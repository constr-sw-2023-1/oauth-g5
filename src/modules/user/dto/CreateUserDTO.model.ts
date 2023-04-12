/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

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
