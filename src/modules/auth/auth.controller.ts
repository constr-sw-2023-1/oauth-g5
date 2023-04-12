import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Unprotected } from 'nest-keycloak-connect';
import { KeyCloakTokenResponseDTO } from './dto/keyCloakTokenResponseDTO.model';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @Unprotected()
  @HttpCode(HttpStatus.OK)
  getKeyCloakToken(
    @Body() credentials: { username: string; password: string },
  ) {
    const username: string = credentials.username;
    const password: string = credentials.password;
    return this.authService.getKeyCloakToken(username, password);
  }

  @Post('refreshToken')
  @Unprotected()
  @HttpCode(HttpStatus.OK)
  refreshAccessToken(@Body() token: KeyCloakTokenResponseDTO) {
    return this.authService.refreshAcessToken(token.refresh_token);
  }
}
