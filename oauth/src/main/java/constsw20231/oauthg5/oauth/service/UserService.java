package constsw20231.oauthg5.oauth.service;

import java.util.Collection;

import constsw20231.oauthg5.oauth.dto.request.UserDTO;

public class UserService implements IUserService {

    @Override
    public UserDTO findById(String acessToken, String id) throws Exception {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findById'");
    }

    @Override
    public Collection<UserDTO> findAllUsers(String authorization, Boolean isEnabled) throws Exception {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAllUsers'");
    }

    @Override
    public void deleteUser(String accessToken, String id) throws Exception {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteUser'");
    }

    @Override
    public String createUser(String authorization, UserDTO newUser) throws Exception {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'createUser'");
    }

    @Override
    public void updateUser(String authorization, String id, UserDTO user) throws Exception {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateUser'");
    }

    @Override
    public void updateUserPassword(String id, String password, String authorization) throws Exception {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateUserPassword'");
    }

}
