package constsw20231.oauthg5.oauth.service;

import java.util.Collection;

import constsw20231.oauthg5.oauth.dto.request.UserDTO;

public interface IUserService {

    UserDTO findById(String acessToken, String id) throws Exception;

    Collection<UserDTO> findAllUsers(String authorization, Boolean isEnabled) throws Exception;

    String createUser(String authorization, UserDTO newUser) throws Exception;

    void deleteUser(String accessToken, String id) throws Exception;

    void updateUser(String authorization, String id, UserDTO user) throws Exception;

    void updateUserPassword(String id, String password, String authorization) throws Exception;

}
