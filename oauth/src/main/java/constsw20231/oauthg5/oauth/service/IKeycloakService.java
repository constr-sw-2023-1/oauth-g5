package constsw20231.oauthg5.oauth.service;

import constsw20231.oauthg5.oauth.dto.response.TokenResponse;

public interface IKeycloakService {

  TokenResponse obtainAccessTokenForUser();
}
