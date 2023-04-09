package constsw20231.oauthg5.oauth.client;

import com.mashape.unirest.http.HttpResponse;
import constsw20231.oauthg5.oauth.dto.request.DefaultBodyRequest;
import constsw20231.oauthg5.oauth.dto.request.DefaultHeader;

public interface IKeycloakClient {

  HttpResponse obtainAccessTokenForUser(DefaultHeader header,
      DefaultBodyRequest defaultBodyRequest);
}
