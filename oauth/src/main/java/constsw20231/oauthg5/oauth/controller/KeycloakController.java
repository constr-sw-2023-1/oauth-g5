package constsw20231.oauthg5.oauth.controller;

import constsw20231.oauthg5.oauth.dto.response.TokenResponse;
import constsw20231.oauthg5.oauth.service.IKeycloakService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Controller
public class KeycloakController {

  @Autowired
  private IKeycloakService service;

  //ENDPOINT para gerar o token
  @PostMapping(path = "/tokens")
  public TokenResponse getToken() {
    return service.obtainAccessTokenForUser();
  }

}
