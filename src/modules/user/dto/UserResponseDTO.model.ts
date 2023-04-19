import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  enabled: boolean;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string;

  constructor(
    id: string,
    username: string,
    enabled: boolean,
    firstName: string,
    lastName: string,
    email: string,
  ) {
    this.id = id;
    this.username = username;
    this.enabled = enabled;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}
