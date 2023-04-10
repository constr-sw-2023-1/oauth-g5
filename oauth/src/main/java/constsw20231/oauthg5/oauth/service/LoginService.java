package constsw20231.oauthg5.oauth.service;

import static org.springframework.http.MediaType.APPLICATION_FORM_URLENCODED_VALUE;

import com.google.gson.Gson;
import com.mashape.unirest.http.HttpResponse;
import constsw20231.oauthg5.oauth.client.ILoginClient;
import constsw20231.oauthg5.oauth.dto.request.LoginBodyRequest;
import constsw20231.oauthg5.oauth.dto.request.DefaultHeader;
import constsw20231.oauthg5.oauth.dto.response.TokenResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService implements ILoginService {

  @Autowired
  private ILoginClient client;

  @Override
  public TokenResponse obtainAccessTokenForUser() {

    var header = new DefaultHeader(APPLICATION_FORM_URLENCODED_VALUE);
    var loginBodyRequest = new LoginBodyRequest("password",
        "oauth",
        "admin",
        "a12345678",
        "Eanay1tqS3k2pu4sCWvJSih6Zi3RG0fb");

    HttpResponse httpResponse = client.obtainAccessTokenForUser(header, loginBodyRequest);

    return new Gson().fromJson((String) httpResponse.getBody(), TokenResponse.class);
  }

}
