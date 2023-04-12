import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { catchError, map } from 'rxjs';
import { KeyCloakTokenResponseDTO } from './dto/keyCloakTokenResponseDTO.model';

@Injectable()
export class AuthService {
  private keyCloakClientId: string;
  private keyCloakClientSecret: string;
  private keyCloakTokenUri: string;
  private username: string;
  private password: string;

  constructor(
    readonly _config: ConfigService,
    private readonly _http: HttpService,
  ) {
    this.keyCloakClientId = _config.get('KEYCLOAK_CLIENT_ID');
    this.keyCloakClientSecret = _config.get('KEYCLOAK_CLIENT_SECRET');
    this.keyCloakTokenUri = _config.get('KEYCLOAK_TOKEN_URI');
    this.username = this.username;
    this.password = this.password;
  }

  getKeyCloakToken(username: string, password: string) {
    const params = {
      grant_type: 'password',
      client_id: this.keyCloakClientId,
      client_secret: this.keyCloakClientSecret,
      username: username,
      password: password,
    };
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    const config = {
      headers: headers,
    };
    return this._http.post(this.keyCloakTokenUri, params, config).pipe(
      map(
        (res) =>
          new KeyCloakTokenResponseDTO(
            res.data.access_token,
            res.data.refresh_token,
            res.data.expires_in,
            res.data.refresh_expires_in,
          ),
      ),
      catchError((e) => {
        if (e.response.status === HttpStatus.BAD_REQUEST) {
          throw new HttpException(
            'Invalid credentials',
            HttpStatus.UNAUTHORIZED,
          );
        } else if (e.response.status === HttpStatus.UNAUTHORIZED) {
          throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        } else {
          throw new HttpException(e.response.data, e.response.status);
        }
      }),
    );
  }

  async refreshAcessToken(refresh_token: string) {
    const params = {
      grant_type: 'refresh_token',
      refresh_token: refresh_token,
      client_id: 'my-client-id',
      client_secret: 'my-client-secret',
    };
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    const config = {
      headers: headers,
    };
    try {
      const response = await this._http
        .post(this.keyCloakTokenUri, params, config)
        .toPromise();
      return new KeyCloakTokenResponseDTO(
        response.data.access_token,
        response.data.refresh_token,
        response.data.expires_in,
        response.data.refresh_expires_in,
      );
    } catch (e) {
      if (e.response.status === HttpStatus.BAD_REQUEST) {
        throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
      } else if (e.response.status === HttpStatus.UNAUTHORIZED) {
        throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
      } else {
        throw new HttpException(e.response.data, e.response.status);
      }
    }
  }
}
