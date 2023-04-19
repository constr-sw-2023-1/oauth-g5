import { ApiProperty } from '@nestjs/swagger';

export class UserUpdateDTO {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  enabled: boolean;
}
