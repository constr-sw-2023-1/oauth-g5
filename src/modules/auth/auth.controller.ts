import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Unprotected } from 'nest-keycloak-connect';
import { KeyCloakTokenResponseDTO } from './dto/keyCloakTokenResponseDTO.model';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller()
export class AuthController {
  constructor(private authService: AuthService) { }
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        username: {
          type: 'string',
          example: 'usuario',
        },
        password: {
          type: 'string',
          example: 'senha',
        },
      },
      required: ['username', 'password'],
    },
  })
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

  @ApiParam({
    name: 'token',
    description: 'Refresh do Token do Keycloak',
    type: 'object',
    required: true,
    schema: {
      properties: {
        refresh_token: {
          type: 'string',
          example: 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiS...',
        },
      },
    },
  })
  @Post('refreshToken')
  @Unprotected()
  @HttpCode(HttpStatus.OK)
  refreshAccessToken(@Body() token: KeyCloakTokenResponseDTO) {
    return this.authService.refreshAcessToken(token.refresh_token);
  }
}
