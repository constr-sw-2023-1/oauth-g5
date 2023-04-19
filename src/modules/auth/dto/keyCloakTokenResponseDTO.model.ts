import { ApiProperty } from '@nestjs/swagger';

export class KeyCloakTokenResponseDTO {
  @ApiProperty()
  access_token: string;

  @ApiProperty()
  refresh_token: string;

  @ApiProperty()
  expires_in: string;

  @ApiProperty()
  refresh_expires_in: string;

  constructor(
    access_token: string,
    refresh_token: string,
    expires_in: string,
    refresh_expires_in: string,
  ) {
    this.access_token = access_token;
    this.refresh_token = refresh_token;
    this.expires_in = expires_in;
    this.refresh_expires_in = refresh_expires_in;
  }
}
