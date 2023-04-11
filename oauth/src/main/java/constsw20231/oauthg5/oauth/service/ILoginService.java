package constsw20231.oauthg5.oauth.service;

import constsw20231.oauthg5.oauth.dto.response.TokenResponse;
import constsw20231.oauthg5.oauth.dto.response.UserInfoResponseDTO;

public interface ILoginService {

  TokenResponse obtainAccessTokenForUser();

  UserInfoResponseDTO getUserInfo();

}
