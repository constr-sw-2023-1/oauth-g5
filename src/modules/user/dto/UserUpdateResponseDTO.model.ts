/* eslint-disable prettier/prettier */
export class UserUpdateResponseDTO {
  firstName: string;
  lastName: string;
  email: string;
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
