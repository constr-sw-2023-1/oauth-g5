package constsw20231.oauthg5.oauth.controller;

import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import constsw20231.oauthg5.oauth.dto.request.ChangePasswordRequestDTO;
import constsw20231.oauthg5.oauth.dto.request.UserRequestDTO;

@RestController
@RequestMapping("/users")
public class UserController {

    @GetMapping
    public ResponseEntity<?> getAllUsers(@RequestHeader HttpHeaders headers,
            @RequestParam(required = false) Boolean enabled) {
        return null;
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getUserById(@RequestHeader HttpHeaders headers, @PathVariable String id) {
        return null;
    }

    @PostMapping
    public ResponseEntity<?> createUser(@RequestHeader HttpHeaders headers, @RequestBody UserRequestDTO user) {
        return null;
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateUser(@RequestHeader HttpHeaders headers, @RequestBody UserRequestDTO user,
            @PathVariable String id) {
        return null;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUserById(@RequestHeader HttpHeaders headers, @PathVariable String id) {
        return null;
    }

    @PatchMapping("{id}")
    public ResponseEntity<?> changePassword(@RequestHeader HttpHeaders headers, @PathVariable("id") String id,
            @RequestBody ChangePasswordRequestDTO password) {
        return null;
    }

}
