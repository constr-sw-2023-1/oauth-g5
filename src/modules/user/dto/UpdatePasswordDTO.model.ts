import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdatePasswordDTO {
  @ApiProperty()
  @IsNotEmpty()
  newPassword: string;
}
