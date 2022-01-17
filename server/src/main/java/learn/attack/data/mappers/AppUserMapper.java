package learn.attack.data.mappers;

import learn.attack.models.AppUser;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

public class AppUserMapper implements RowMapper<AppUser> {
    private final List<String> roles;

    public AppUserMapper(List<String> roles) {
        this.roles = roles;
    }

    @Override
    public AppUser mapRow(ResultSet rs, int i) throws SQLException {
        return new AppUser(
                rs.getInt("user_id"),
                rs.getString("user_name"),
                rs.getString("password"),
                rs.getBoolean("disabled"),
                roles);
    }
}
