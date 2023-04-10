package constsw20231.oauthg5.oauth.client;

import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import constsw20231.oauthg5.oauth.util.RequestURI;
import constsw20231.oauthg5.oauth.dto.request.LoginBodyRequest;
import constsw20231.oauthg5.oauth.dto.request.DefaultHeader;
import org.springframework.stereotype.Component;

@Component
public class LoginClient implements ILoginClient {

  private static final String CONTENT_TYPE = "Content-Type";
  private static final String CLIENT_ID = "client_id";
  private static final String USERNAME = "username";
  private static final String PASSWORD = "password";
  private static final String GRANT_TYPE = "grant_type";
  private static final String CLIENT_SECRET = "client_secret";

  @Override
  public HttpResponse obtainAccessTokenForUser(DefaultHeader header,
      LoginBodyRequest loginBodyRequest) {

    try {
      Unirest.setTimeouts(0, 0);
      HttpResponse<String> stringHttpResponse = Unirest.post(
              RequestURI.OBTAIN_ACCESS_TOKEN_FOR_A_USER.getValue())
          .header(CONTENT_TYPE, header.getContentType())
          .field(CLIENT_ID, loginBodyRequest.getClient_id())
          .field(USERNAME, loginBodyRequest.getUsername())
          .field(PASSWORD, loginBodyRequest.getPassword())
          .field(GRANT_TYPE, loginBodyRequest.getGrant_type())
          .field(CLIENT_SECRET, loginBodyRequest.getClient_secret())
          .asString();
      return stringHttpResponse;
    } catch (UnirestException e) {
      throw new RuntimeException(e);
    }
  }
}
