package constsw20231.oauthg5.oauth.client;

import com.mashape.unirest.http.HttpResponse;
import constsw20231.oauthg5.oauth.dto.request.LoginBodyRequest;
import constsw20231.oauthg5.oauth.dto.request.DefaultHeader;

public interface ILoginClient {

  HttpResponse obtainAccessTokenForUser(DefaultHeader header,
      LoginBodyRequest loginBodyRequest);
}
