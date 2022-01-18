package learn.attack.security;

import learn.attack.data.AppUserRepository;
import learn.attack.domain.Result;
import learn.attack.domain.ResultType;
import learn.attack.models.AppUser;
import learn.attack.models.HighScore;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.validation.ValidationException;
import java.util.List;

@Service
public class AppUserService implements UserDetailsService {
    private final AppUserRepository repository;
    private final PasswordEncoder encoder;

    public AppUserService(AppUserRepository repository,
                          PasswordEncoder encoder) {
        this.repository = repository;
        this.encoder = encoder;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AppUser appUser = repository.findByUsername(username);

        if (appUser == null || !appUser.isEnabled()) {
            throw new UsernameNotFoundException(username + " not found");
        }

        return appUser;
    }

//    public AppUser create(String username, String password) {
//        validate(username);
//        validatePassword(password);
//
//        password = encoder.encode(password);
//
//        AppUser appUser = new AppUser(0, username, password,false, List.of("User"));
//
//        return repository.create(appUser);
//    }

    public Result<AppUser> create(String username, String password) {

        Result<AppUser> result = validate(username);
        if (!result.isSuccess()) {
            return result;
        }
        result = validatePassword(password);
        if (!result.isSuccess()) {
            return result;
        } //test when working: result += validatePassword(password);

        password = encoder.encode(password);

        AppUser appUser = new AppUser(0, username, password,false, List.of("User"));

        AppUser newUser = repository.create(appUser);

        result.setPayload(newUser);


        return result;
    }

    private Result<AppUser> validate(String username) {
        Result<AppUser> result = new Result<>();
        if (username == null || username.isBlank()) {
            result.addMessage("Username cannot be null", ResultType.INVALID);
            //throw new ValidationException("username is required");
        }

        if (username.length() > 50) {
            result.addMessage("Username cannot be over fifty characters", ResultType.INVALID);
            //throw new ValidationException("username must be less than 50 characters");
        }

        return result;
    }

    private Result<AppUser> validatePassword(String password) {
        Result<AppUser> result = new Result<>();
        if (password == null || password.length() < 8) {
            result.addMessage("password must be atleast 8 characters", ResultType.INVALID);
            //throw new ValidationException("password must be at least 8 characters");
        }

        int digits = 0;
        int letters = 0;
        int others = 0;
        for (char c : password.toCharArray()) {
            if (Character.isDigit(c)) {
                digits++;
            } else if (Character.isLetter(c)) {
                letters++;
            } else {
                others++;
            }
        }

        if (digits == 0 || letters == 0 || others == 0) {
            result.addMessage("password must contain a digit, a letter, and a non-digit/non-letter", ResultType.INVALID);
            //throw new ValidationException("password must contain a digit, a letter, and a non-digit/non-letter");
        }
        return result;
    }

    public List<HighScore> findAll() {
        return repository.findAll();

    }

    public List<HighScore> findEnabled() {
        return repository.findEnabled();
    }

    public List<HighScore> findDisabled() {
        return repository.findDisabled();
    }

    public Result<AppUser> disable(AppUser user) {
        Result<AppUser> result = new Result<>();

        if (user.getAppUserId() <= 0) {
            result.addMessage("appUserId must be set for `update` operation", ResultType.INVALID);
            return result;
        }

        if (!repository.disable(user)) {
            String msg = String.format("appUserId: %s, not found", user.getAppUserId());
            result.addMessage(msg, ResultType.NOT_FOUND);
        }

        return result;
    }

    public Result<AppUser> enable(AppUser user) {
        Result<AppUser> result = new Result<>();

        if (user.getAppUserId() <= 0) {
            result.addMessage("appUserId must be set for `update` operation", ResultType.INVALID);
            return result;
        }

        if (!repository.enable(user)) {
            String msg = String.format("appUserId: %s, not found", user.getAppUserId());
            result.addMessage(msg, ResultType.NOT_FOUND);
        }

        return result;
    }

//    private void validate(String username) {
//        if (username == null || username.isBlank()) {
//            throw new ValidationException("username is required");
//        }
//
//        if (username.length() > 50) {
//            throw new ValidationException("username must be less than 50 characters");
//        }
//    }
//
//    private void validatePassword(String password) {
//        if (password == null || password.length() < 8) {
//            throw new ValidationException("password must be at least 8 characters");
//        }
//
//        int digits = 0;
//        int letters = 0;
//        int others = 0;
//        for (char c : password.toCharArray()) {
//            if (Character.isDigit(c)) {
//                digits++;
//            } else if (Character.isLetter(c)) {
//                letters++;
//            } else {
//                others++;
//            }
//        }
//
//        if (digits == 0 || letters == 0 || others == 0) {
//            throw new ValidationException("password must contain a digit, a letter, and a non-digit/non-letter");
//        }
//    }
}
