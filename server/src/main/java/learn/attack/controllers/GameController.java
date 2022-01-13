package learn.attack.controllers;

import learn.attack.domain.GameService;
import learn.attack.models.Game;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@CrossOrigin(origins = {"http://localhost:3000"})
@RequestMapping("api/game")
public class GameController {

    private final GameService service;
    public GameController(GameService service){
        this.service = service;
    }
    
    @GetMapping
    public List<Game> findAll(){
        return service.findAll();
    }

}
