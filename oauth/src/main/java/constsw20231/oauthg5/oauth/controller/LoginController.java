package constsw20231.oauthg5.oauth.controller;

import constsw20231.oauthg5.oauth.dto.response.TokenResponse;
import constsw20231.oauthg5.oauth.dto.response.UserInfoResponseDTO;
import constsw20231.oauthg5.oauth.service.ILoginService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Controller
@AllArgsConstructor
public class LoginController {

  private ILoginService service;

  @PostMapping(path = "/login")
  public ResponseEntity<TokenResponse> getToken() {
    return ResponseEntity.ok(service.obtainAccessTokenForUser());
  }

  @GetMapping("/user-info")
  public ResponseEntity<UserInfoResponseDTO> getUserInfo() {
    return null;
  }
}
