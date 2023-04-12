/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import jwt_decode from 'jwt-decode';
import { AuthService } from '../modules/auth/auth.service';
import { KeyCloakTokenResponseDTO } from 'src/modules/auth/dto/keyCloakTokenResponseDTO.model';

@Injectable()
export class TokenMiddleware implements NestMiddleware {
  constructor(private authService: AuthService) {}

  async use(req: Request, res: Response, next: () => void) {
    try {
      const accessToken = req.headers.authorization.split(' ')[1];
      const decodedAccessToken: KeyCloakTokenResponseDTO =
        jwt_decode(accessToken);
      const currentTimestamp = Math.floor(Date.now() / 1000);
      if (parseInt(decodedAccessToken.expires_in) < currentTimestamp) {
        const newTokens = await this.authService.refreshAcessToken(
          decodedAccessToken.refresh_token,
        );
        req.headers.authorization = `Bearer ${newTokens.access_token}`;
      }
    } catch (err) {
      console.error(err);
    }
    next();
  }
}
