package constsw20231.oauthg5.oauth.client;

import constsw20231.oauthg5.oauth.dto.request.DefaultBodyRequest;
import java.util.Map;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;

@FeignClient(value = "keycloak", url = "http://localhost:8090", configuration = HeaderConfiguration.class)
public interface IKeycloakClient {

  @PostMapping(value = "/auth/realms/master/protocol/openid-connect/token")
    //@Headers("Content-Type: application/x-www-form-urlencoded")
  Object obtainAccessTokenForUser(@RequestHeader HttpHeaders header,
      @RequestBody DefaultBodyRequest b);
}
