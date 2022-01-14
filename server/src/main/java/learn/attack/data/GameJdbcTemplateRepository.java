package learn.attack.data;

import learn.attack.models.Game;
import learn.attack.data.mappers.GameMapper;
import java.util.List;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class GameJdbcTemplateRepository implements GameRepository{

    private final JdbcTemplate jdbcTemplate;
    public GameJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }


    @Override
    public List<Game> findAll() {
        final String sql = "select game_id, game_name, game_description from games;";
        return jdbcTemplate.query(sql, new GameMapper());
    }
}
