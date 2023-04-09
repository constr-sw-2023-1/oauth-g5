package constsw20231.oauthg5.oauth;

import lombok.Getter;

@Getter
public enum RequestURI {
  OBTAIN_ACCESS_TOKEN_FOR_A_USER("http://localhost:8090/auth/realms/master/protocol/openid-connect/token");

  private String value;

  RequestURI(String value) {
    this.value = value;
  }
}
