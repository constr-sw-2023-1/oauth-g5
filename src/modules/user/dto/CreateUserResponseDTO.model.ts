/* eslint-disable prettier/prettier */
export class CreateUserResponseDTO {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
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
