/* eslint-disable prettier/prettier */
export class UserResponseDTO {
  id: string;
  username: string;
  enabled: boolean;
  firstName: string;
  lastName: string;
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
