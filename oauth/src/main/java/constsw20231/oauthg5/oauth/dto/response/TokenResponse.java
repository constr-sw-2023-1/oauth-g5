package constsw20231.oauthg5.oauth.dto.response;

public class TokenResponse {

  private String access_token;
  private Long expires_in;
  private Long refresh_expires_in;
  private String refresh_token;
  private String token_type;
  private String session_state;
  private String scope;

  public TokenResponse(String access_token, Long expires_in, Long refresh_expires_in,
      String refresh_token, String token_type, String session_state, String scope) {
    this.access_token = access_token;
    this.expires_in = expires_in;
    this.refresh_expires_in = refresh_expires_in;
    this.refresh_token = refresh_token;
    this.token_type = token_type;
    this.session_state = session_state;
    this.scope = scope;
  }
}