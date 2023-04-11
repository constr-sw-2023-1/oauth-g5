package constsw20231.oauthg5.oauth.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class UserResponseDTO {
    private String username;
    private Boolean isEnabled;
    private String firstName;
    private String lastName;
    private String email;
}
