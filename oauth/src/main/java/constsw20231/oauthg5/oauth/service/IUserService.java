package constsw20231.oauthg5.oauth.service;

import java.util.Collection;

import constsw20231.oauthg5.oauth.dto.request.UserRequestDTO;
import constsw20231.oauthg5.oauth.dto.response.UserResponseDTO;

public interface IUserService {

    UserResponseDTO findById(String acessToken, String id) throws Exception;

    Collection<UserResponseDTO> findAllUsers(String authorization, Boolean isEnabled) throws Exception;

    String createUser(String authorization, UserRequestDTO newUser) throws Exception;

    void deleteUser(String accessToken, String id) throws Exception;

    void updateUser(String authorization, String id, UserRequestDTO user) throws Exception;

    void updateUserPassword(String id, String password, String authorization) throws Exception;

}
