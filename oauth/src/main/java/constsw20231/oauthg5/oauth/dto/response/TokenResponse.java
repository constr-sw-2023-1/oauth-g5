package constsw20231.oauthg5.oauth.dto.response;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@JsonAutoDetect
public class TokenResponse {

  private String access_token;
  private Long expires_in;
  private Long refresh_expires_in;
  private String refresh_token;
  private String token_type;
  @JsonProperty("not-before-policy")
  private Long notBeforePolicy;
  private String session_state;
  private String scope;

}