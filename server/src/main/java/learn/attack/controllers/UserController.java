package learn.attack.controllers;


import learn.attack.App;
import learn.attack.domain.Result;
import learn.attack.models.AppUser;
import learn.attack.models.HighScore;
import learn.attack.security.AppUserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
@RequestMapping("api/users")
public class UserController {
    private final AppUserService service;

    public UserController(AppUserService service) {
        this.service = service;
    }

    @GetMapping("username/{username}")
    public AppUser findByUserName(@PathVariable String username) {
        return service.loadUserByUsername(username);
    }


    @PostMapping
    public ResponseEntity<Object> add(@RequestBody AppUser user) {
        Result<AppUser> result = service.create(user.getUsername(), user.getPassword());
        if (result.isSuccess()) {
            return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED);
        }
        return ErrorResponse.build(result);
    }

    @GetMapping
    public List<HighScore> findAll(){
        return service.findAll();
    }

    @GetMapping("/enabled")
    public List<HighScore> findEnabled(){
        return service.findEnabled();
    }

    @GetMapping("/disabled")
    public List<HighScore> findDisabled(){
        return service.findDisabled();
    }

    @PutMapping("/enabled/{appUserId}")
    public ResponseEntity<Object> disable(@PathVariable int appUserId, @RequestBody AppUser user) {
        if (appUserId != user.getAppUserId()) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        Result<AppUser> result = service.disable(user);
        if (result.isSuccess()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return ErrorResponse.build(result);
    }

    @PutMapping("/disabled/{appUserId}")
    public ResponseEntity<Object> enable(@PathVariable int appUserId, @RequestBody AppUser user) {
        if (appUserId != user.getAppUserId()) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        Result<AppUser> result = service.enable(user);
        if (result.isSuccess()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return ErrorResponse.build(result);
    }

}
