package learn.attack.data.mappers;

import learn.attack.models.HighScore;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class HighScoreMapper implements RowMapper<HighScore> {

    @Override
    public HighScore mapRow(ResultSet resultSet, int i) throws SQLException{
        HighScore highScore = new HighScore();
        highScore.setHighScoreId(resultSet.getInt("high_score_id"));
        highScore.setHighScore(resultSet.getInt("high_score"));
        highScore.setUserId(resultSet.getInt("user_id"));
        highScore.setUserName(resultSet.getString("user_name"));
        highScore.setDisabled(resultSet.getBoolean("disabled"));
        return highScore;
    }
}
