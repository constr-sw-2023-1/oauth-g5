import { HttpService } from '@nestjs/axios';
import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserResponseDTO } from './dto/UserResponseDTO.model';
import { map, firstValueFrom, catchError, Observable } from 'rxjs';
import { CreateUserDTO } from './dto/CreateUserDTO.model';
import { UserUpdateDTO } from './dto/UserUpdateDTO.model';
import { UpdatePasswordDTO } from './dto/UpdatePasswordDTO.model';
import { DisableUserDTO } from './dto/DisableUserDTO.model';
import { UserUpdateResponseDTO } from './dto/UserUpdateResponseDTO.model';

@Injectable()
export class UserService {
  private keyCloakBaseUsersUri: string;
  private keyCloakGetEnabledUsersUri: string;

  constructor(
    readonly _config: ConfigService,
    private readonly _http: HttpService,
  ) {
    this.keyCloakBaseUsersUri = _config.get('KEYCLOAK_BASE_USERS_URI');
    this.keyCloakGetEnabledUsersUri = _config.get(
      'KEYCLOAK_GET_ENABLED_USERS_URI',
    );
  }

  getAllUsers(accessToken: string): Promise<any[]> {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const response = this._http
      .get(this.keyCloakGetEnabledUsersUri, config)
      .pipe(
        map((response) =>
          response.data.map(
            (user) =>
              new UserResponseDTO(
                user.id,
                user.username,
                user.enabled,
                user.firstName,
                user.lastName,
                user.email,
              ),
          ),
        ),
        catchError((e) => {
          if (e.response && e.response.status === HttpStatus.UNAUTHORIZED) {
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
          } else if (
            e.response &&
            e.response.status === HttpStatus.BAD_REQUEST
          ) {
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
          } else {
            throw new HttpException(e.response.data, e.response.status);
          }
        }),
      );

    return firstValueFrom(response);
  }

  getUserById(
    accessToken: string,
    userId: string,
  ): UserResponseDTO | PromiseLike<UserResponseDTO> {
    const getUserUri = `${this.keyCloakBaseUsersUri}/${userId}`;
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const response = this._http.get(getUserUri, config).pipe(
      map(
        (response) =>
          new UserResponseDTO(
            response.data.id,
            response.data.username,
            response.data.enabled,
            response.data.firstName,
            response.data.lastName,
            response.data.email,
          ),
      ),
      catchError((e) => {
        if (e.response && e.response.status === HttpStatus.UNAUTHORIZED) {
          throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        } else if (e.response && e.response.status === HttpStatus.NOT_FOUND) {
          throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        } else if (e.response && e.response.status === HttpStatus.BAD_REQUEST) {
          throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        } else {
          throw new HttpException(e.response.data, e.response.status);
        }
      }),
    );

    return firstValueFrom(response);
  }

  createUser(accessToken: string, createUserDTO: CreateUserDTO): any {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    };

    return this._http
      .post<UserResponseDTO>(this.keyCloakBaseUsersUri, createUserDTO, config)
      .pipe(
        map(async (res) => {
          const locationHeader = res.headers['location'];
          const id = locationHeader.substring(
            locationHeader.lastIndexOf('/') + 1,
          );
          const user = await this.getUserById(accessToken, id);
          return new UserResponseDTO(
            id,
            user.username,
            user.enabled,
            user.firstName,
            user.lastName,
            user.email,
          );
        }),
        catchError((e) => {
          if (e.response && e.response.status === HttpStatus.CONFLICT) {
            throw new ConflictException(e.response.data);
          } else if (e.response && e.response.status === HttpStatus.FORBIDDEN) {
            throw new ForbiddenException(e.response.data);
          } else {
            throw new HttpException(e.response.data, e.response.status);
          }
        }),
      );
  }

  updateUser(accessToken: string, updatedUser: UserUpdateDTO, userId: string): any {
    const getUserUri = `${this.keyCloakBaseUsersUri}/${userId}`;
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    };

    return this._http.put<UserUpdateDTO>(getUserUri, updatedUser, config).pipe(
      map((res) => {
        const { firstName, email, lastName, enabled } = res.data;
        const updatedUser = new UserUpdateResponseDTO(
          firstName,
          email,
          lastName,
          enabled,
        );
      }),
      catchError((e) => {
        if (e.response && e.response.status === HttpStatus.NOT_FOUND) {
          throw new NotFoundException(e.response.data);
        } else if (
          e.response &&
          e.response.status === HttpStatus.UNAUTHORIZED
        ) {
          throw new UnauthorizedException(e.response.data);
        } else if (e.response && e.response.status === HttpStatus.BAD_REQUEST) {
          throw new BadRequestException(e.response.data);
        } else {
          throw new HttpException(e.response.data, e.response.status);
        }
      }),
    );
  }

  async patchUserPassword(
    userId: string,
    newPassword: string,
    accessToken: string,
  ) {
    const getUserUri = `${this.keyCloakBaseUsersUri}/${userId}/reset-password`;
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    };

    const data = {
      type: 'password',
      value: newPassword,
      temporary: false,
    };

    await firstValueFrom(
      this._http.put<UpdatePasswordDTO>(getUserUri, data, config).pipe(
        catchError((e) => {
          if (e.response && e.response.status === HttpStatus.NOT_FOUND) {
            throw new NotFoundException(e.response.data);
          } else if (
            e.response &&
            e.response.status === HttpStatus.UNAUTHORIZED
          ) {
            throw new UnauthorizedException(e.response.data);
          } else if (
            e.response &&
            e.response.status === HttpStatus.BAD_REQUEST
          ) {
            throw new BadRequestException(e.response.data);
          } else {
            throw new HttpException(e.response.data, e.response.status);
          }
        }),
      ),
    );
  }

  disableUser(accessToken: string, userId: string): Observable<any> {
    const getUserUri = `${this.keyCloakBaseUsersUri}/${userId}`;
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    };

    const data = { enabled: false };

    return this._http.put<DisableUserDTO>(getUserUri, data, config).pipe(
      map((res) => res.data),
      catchError((e) => {
        if (e.response && e.response.status === HttpStatus.NOT_FOUND) {
          throw new NotFoundException(e.response.data);
        } else if (
          e.response &&
          e.response.status === HttpStatus.UNAUTHORIZED
        ) {
          throw new UnauthorizedException(e.response.data);
        } else if (e.response && e.response.status === HttpStatus.BAD_REQUEST) {
          throw new BadRequestException(e.response.data);
        } else {
          throw new HttpException(e.response.data, e.response.status);
        }
      }),
    );
  }
}
