package learn.attack.data;

import learn.attack.data.mappers.HighScoreMapper;
import learn.attack.models.HighScore;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@Repository
public class HighScoreJdbcTemplateRepository implements HighScoreRepository{

    private final JdbcTemplate jdbcTemplate;

    public HighScoreJdbcTemplateRepository(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<HighScore> topScores() {
        final String sql = "select high_score_id, high_score, user_id \n" +
                " from high_scores\n" +
                " order by high_score asc\n" +
                " limit 1000;";
        return jdbcTemplate.query(sql, new HighScoreMapper());
    }

    @Override
    public HighScore add(HighScore highScore) {

        final String sql = "insert into high_scores (high_score, user_id) values (?,?)";
        //TODO discover Keyholder
//        Keyholder keyholder = new GeneratedKeyHolder();
//        int rowsAffected = jdbcTemplate.update(connection -> {
//            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
//            ps.setInt(1, highScore.getHighScore());
//            ps.setInt(2, highScore.getUserId());
//            return ps;
//        }, keyHolder);

//        if (rowsAffected <= 0) {
//            return null;
//        }

//        highScore.setHighScoreId(keyHolder.getKey().intValue());
//        return highScore;
        return null;
    }

    @Override
    public boolean update(HighScore highscore) {

        final String sql = "update high_scores set "
                + "high_score = ?, "
                + "user_id = ? "
                + "where high_score_id = ?";

        return jdbcTemplate.update(sql, highscore.getHighScore(), highscore.getUserId(), highscore.getHighScoreId())>0;
    }

    @Override
    public boolean deleteById(int highScoreId) {

        //TODO delete from which user based on what info?
//        jdbcTemplate.update("delete from users where user_id = ?", highScoreId);
          jdbcTemplate.update("delete from high_score where high_score_id = ?", highScoreId);
          return jdbcTemplate.update("delete from high_score where high_score_id = ?", highScoreId) > 0;
    }
}
