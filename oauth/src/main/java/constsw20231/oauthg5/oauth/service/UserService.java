package constsw20231.oauthg5.oauth.service;

import java.util.Collection;

import constsw20231.oauthg5.oauth.dto.request.UserRequestDTO;
import constsw20231.oauthg5.oauth.dto.response.UserResponseDTO;

public class UserService implements IUserService {

    @Override
    public UserResponseDTO findById(String acessToken, String id) throws Exception {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findById'");
    }

    @Override
    public Collection<UserResponseDTO> findAllUsers(String authorization, Boolean isEnabled) throws Exception {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAllUsers'");
    }

    @Override
    public void deleteUser(String accessToken, String id) throws Exception {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteUser'");
    }

    @Override
    public String createUser(String authorization, UserRequestDTO newUser) throws Exception {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'createUser'");
    }

    @Override
    public void updateUser(String authorization, String id, UserRequestDTO user) throws Exception {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateUser'");
    }

    @Override
    public void updateUserPassword(String id, String password, String authorization) throws Exception {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateUserPassword'");
    }

}
