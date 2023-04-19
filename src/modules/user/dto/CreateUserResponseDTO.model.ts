import { ApiProperty } from '@nestjs/swagger';

export class CreateUserResponseDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  enabled: boolean;

  constructor(
    id: string,
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    enabled: boolean,
  ) {
    this.id = id;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.enabled = enabled;
  }
}
