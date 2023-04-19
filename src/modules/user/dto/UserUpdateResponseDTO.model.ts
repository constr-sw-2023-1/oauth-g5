import { ApiProperty } from '@nestjs/swagger';

export class UserUpdateResponseDTO {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  enabled: boolean;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    enabled: boolean,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.enabled = enabled;
  }
}
