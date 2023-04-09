package constsw20231.oauthg5.oauth.service;

import com.google.gson.Gson;
import com.mashape.unirest.http.HttpResponse;
import constsw20231.oauthg5.oauth.client.IKeycloakClient;
import constsw20231.oauthg5.oauth.dto.request.DefaultBodyRequest;
import constsw20231.oauthg5.oauth.dto.request.DefaultHeader;
import constsw20231.oauthg5.oauth.dto.response.TokenResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;

@Service
public class KeycloakService implements IKeycloakService {

  @Autowired
  private IKeycloakClient client;

  @Override
  public TokenResponse obtainAccessTokenForUser() {

    DefaultBodyRequest defaultBodyRequest = new DefaultBodyRequest("password", "oauth", "admin",
        "a12345678", "Eanay1tqS3k2pu4sCWvJSih6Zi3RG0fb");

    DefaultHeader header = new DefaultHeader(MediaType.APPLICATION_FORM_URLENCODED_VALUE);

    HttpResponse httpResponse = client.obtainAccessTokenForUser(header, defaultBodyRequest);

    return new Gson().fromJson((String) httpResponse.getBody(), TokenResponse.class);

  }

}
