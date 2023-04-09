package constsw20231.oauthg5.oauth.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class DefaultBodyRequest {

  private String grant_type;
  private String client_id;
  private String username;
  private String password;
  private String client_secret;

}
