package learn.attack.data;

import learn.attack.models.Game;
import java.util.List;

public interface GameRepository {
    List<Game> findAll();
}
