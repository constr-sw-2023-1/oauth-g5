/* eslint-disable prettier/prettier */

import { IsNotEmpty } from 'class-validator';

export class UpdatePasswordDTO {
  @IsNotEmpty()
  newPassword: string;
}
