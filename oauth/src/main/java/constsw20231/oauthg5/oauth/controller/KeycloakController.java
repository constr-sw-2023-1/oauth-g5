package constsw20231.oauthg5.oauth.controller;

import constsw20231.oauthg5.oauth.client.IKeycloakClient;
import constsw20231.oauthg5.oauth.dto.request.DefaultBodyRequest;
import constsw20231.oauthg5.oauth.dto.response.TokenResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Controller
public class KeycloakController {

  @Autowired
  private IKeycloakClient client;

  //ENDPOINT para gerar o token
  @PostMapping(path = "/tokens")
  public TokenResponse getToken() {
    System.out.println(" ***************** ");
    Object response = null;
    try {
      HttpHeaders httpHeaders = new HttpHeaders();
      httpHeaders.add("Content-Type", MediaType.APPLICATION_FORM_URLENCODED_VALUE);
      response = client.obtainAccessTokenForUser(httpHeaders,
          new DefaultBodyRequest("oauth",
              "admin",
              "a123456878",
              "password",
              "Eanay1tqS3k2pu4sCWvJSih6Zi3RG0fb")
      );
    } catch (Exception e) {
      System.out.println("catch");
      e.printStackTrace();
      System.err.println(e.getMessage());
    }
    System.out.println(response);
    return null;
  }

}
