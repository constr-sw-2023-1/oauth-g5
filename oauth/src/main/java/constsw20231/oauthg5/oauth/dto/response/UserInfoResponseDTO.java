package constsw20231.oauthg5.oauth.dto.response;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
public class UserInfoResponseDTO {
    private String sub;
    private boolean emailVerified;
    private String name;
    private List<String> groups;
    private String preferredUsername;
    private String givenName;
    private String familyName;
    private String email;
}
