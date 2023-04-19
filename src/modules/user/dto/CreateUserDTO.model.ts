import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDTO {
  @ApiProperty()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  enabled: boolean;

  credentials: {
    type: string;
    value: string;
    temporary: boolean;
  }[];

  constructor(
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    enabled: boolean,
  ) {
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.enabled = enabled;
    this.credentials = [
      {
        type: 'password',
        value: password,
        temporary: false,
      },
    ];
  }
}
