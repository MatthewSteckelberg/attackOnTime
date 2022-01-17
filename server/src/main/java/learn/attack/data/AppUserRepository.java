package learn.attack.data;

import learn.attack.data.mappers.AppUserMapper;
import learn.attack.data.mappers.GameMapper;
import learn.attack.data.mappers.HighScoreMapper;
import learn.attack.models.AppUser;
import learn.attack.models.HighScore;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.Collection;
import java.util.List;

@Repository
public class AppUserRepository {

    private final JdbcTemplate jdbcTemplate;

    public AppUserRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Transactional
    public AppUser findByUsername(String username) {
        List<String> roles = getRolesByUsername(username);

        final String sql = "select user_id, user_name, password, disabled "
                + "from users "
                + "where user_name = ?;";

        return jdbcTemplate.query(sql, new AppUserMapper(roles), username)
                .stream()
                .findFirst().orElse(null);
    }

    @Transactional
    public AppUser create(AppUser user) {

        final String sql = "insert into users (user_name, password) values (?, ?);";

        GeneratedKeyHolder keyHolder = new GeneratedKeyHolder();
        int rowsAffected = jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, user.getUsername());
            ps.setString(2, user.getPassword());
            return ps;
        }, keyHolder);

        if (rowsAffected <= 0) {
            return null;
        }

        user.setAppUserId(keyHolder.getKey().intValue());

        updateRoles(user);

        return user;
    }

    @Transactional
    public void update(AppUser user) {

        final String sql = "update users set "
                + "user_name = ?, "
                + "disabled = ? "
                + "where user_id = ?";

        jdbcTemplate.update(sql,
                user.getUsername(), !user.isEnabled(), user.getAppUserId());

        updateRoles(user);
    }

    private void updateRoles(AppUser user) {
        // delete all roles, then re-add
        jdbcTemplate.update("delete from user_roles where user_id = ?;", user.getAppUserId());

        Collection<GrantedAuthority> authorities = user.getAuthorities();

        if (authorities == null) {
            return;
        }

        for (String role : AppUser.convertAuthoritiesToRoles(authorities)) {
            String sql = "insert into user_roles (user_id, role_id) "
                    + "select ?, role_id from roles where role_name = ?;";
            jdbcTemplate.update(sql, user.getAppUserId(), role);
        }
    }

    private List<String> getRolesByUsername(String username) {
        final String sql = "select r.role_name "
                + "from user_roles ur "
                + "inner join roles r on ur.role_id = r.role_id "
                + "inner join users au on ur.user_id = au.user_id "
                + "where au.user_name = ?";
        return jdbcTemplate.query(sql, (rs, rowId) -> rs.getString("role_name"), username);
    }

    public List<HighScore> findAll() {
        final String sql = "select high_scores.high_score_id, high_scores.high_score, users.user_id, users.user_name, users.disabled\n" +
                " from high_scores\n" +
                " INNER JOIN users\n" +
                " ON high_scores.user_id = users.user_id\n" +
                " order by high_scores.high_score asc\n";

        return jdbcTemplate.query(sql, new HighScoreMapper());
    }
}
