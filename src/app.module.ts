import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import {
  AuthGuard,
  KeycloakConnectModule,
  RoleGuard,
} from 'nest-keycloak-connect';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { TokenMiddleware } from './middleware/TokenMiddleware';
import { AuthService } from './modules/auth/auth.service';
import { HttpModule } from '@nestjs/axios';

const keyCloakOptionsProvider = {
  provide: 'keyCloakDataProvider',
  useFactory: (config: ConfigService) => {
    return {
      authServerUrl: config.get('KEYCLOAK_AUTH_URI'),
      realm: config.get('KEYCLOAK_REALM'),
      clientId: config.get('KEYCLOAK_CLIENT_ID'),
      secret: config.get('KEYCLOAK_CLIENT_SECRET'),
    };
  },
  inject: [ConfigService],
};

@Module({
  imports: [
    KeycloakConnectModule.registerAsync(keyCloakOptionsProvider),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    HttpModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
    AuthService,
    TokenMiddleware,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(TokenMiddleware).forRoutes('/users');
  }
}
