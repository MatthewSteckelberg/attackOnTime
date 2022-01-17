package learn.attack.controllers;


import learn.attack.domain.Result;
import learn.attack.domain.UserService;
import learn.attack.models.AppUser;
import learn.attack.security.AppUserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
@RequestMapping("api/adduser")
public class UserController {
    private final AppUserService service;

    public UserController(AppUserService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Object> add(@RequestBody AppUser user) {
        Result<AppUser> result = service.create(user.getUsername(), user.getPassword());
        if (result.isSuccess()) {
            return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED);
        }
        return ErrorResponse.build(result);
    }


}
