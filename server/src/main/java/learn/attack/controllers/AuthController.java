package learn.attack.controllers;

import learn.attack.security.AppUserService;
import learn.attack.security.JwtConverter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping( "/api/security")
@CrossOrigin( origins={ "http://localhost:3000" } )
public class AuthController {

    AppUserService service;
    AuthenticationManager authManager;
    JwtConverter converter;

    public AuthController( AuthenticationManager authManager, JwtConverter converter, AppUserService service ){
        this.authManager = authManager;
        this.converter = converter;
        this.service = service;
    }

    @PostMapping( "/authenticate")
    public ResponseEntity authenticate(@RequestBody Map<String,String> credentials){

        UsernamePasswordAuthenticationToken token =
                new UsernamePasswordAuthenticationToken(
                        credentials.get("username"),
                        credentials.get("password"));

        try {
            Authentication authResult = authManager.authenticate(token);

            if (authResult.isAuthenticated()) {
                //return new ResponseEntity(token, HttpStatus.OK);

                String jwt = converter.getTokenFromUser((User)authResult.getPrincipal());

                Map<String,String> tokenWrapper = new HashMap<>();
                tokenWrapper.put( "jwt_token", jwt);

                return ResponseEntity.ok( tokenWrapper );
            }
        } catch (AuthenticationException ex){
            //in a real application, we'd want to log this
            System.err.println( ex.getMessage() );
            ex.printStackTrace(System.err);
        }
        return new ResponseEntity(HttpStatus.FORBIDDEN );
    }

}
