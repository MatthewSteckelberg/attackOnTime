package learn.attack.domain;

import org.springframework.stereotype.Service;
import learn.attack.models.Game;
import learn.attack.data.GameRepository;

import java.util.List;


@Service
public class GameService {

    private final GameRepository repository;

    public GameService(GameRepository repository){
        this.repository = repository;
    }

    public List<Game> findAll(){
        return repository.findAll();
    };

}
