import {
  Controller,
  Get,
  Headers,
  Param,
  Post,
  Body,
  Put,
  HttpStatus,
  Patch,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Unprotected } from 'nest-keycloak-connect';
import { UserResponseDTO } from './dto/UserResponseDTO.model';
import { CreateUserDTO } from './dto/CreateUserDTO.model';
import { UserUpdateDTO } from './dto/UserUpdateDTO.model';
import { UpdatePasswordDTO } from './dto/UpdatePasswordDTO.model';
import { Observable } from 'rxjs';
import { ApiBearerAuth, ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth('Authorization')
@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @Unprotected()
  @HttpCode(HttpStatus.OK)
  async getAllUsers(@Headers('Authorization') authHeader: string) {
    const accessToken = authHeader.split(' ')[1];
    return this.userService.getAllUsers(accessToken);
  }

  @ApiParam({
    name: 'id',
    description: 'User ID',
    type: 'string',
    required: true,
    example: '123456',
  })
  @Get(':id')
  @Unprotected()
  @HttpCode(HttpStatus.OK)
  async getUserById(
    @Param('id') userId: string,
    @Headers('Authorization') authHeader: string,
  ): Promise<UserResponseDTO> {
    const accessToken = authHeader.split(' ')[1];
    return this.userService.getUserById(accessToken, userId);
  }

  @ApiBody({ type: CreateUserDTO })
  @Post()
  @Unprotected()
  @HttpCode(HttpStatus.CREATED)
  async createUser(
    @Body() createUserDTO: CreateUserDTO,
    @Headers('Authorization') authHeader: string,
  ): Promise<any> {
    const accessToken = authHeader.split(' ')[1];
    return await this.userService.createUser(accessToken, createUserDTO);
  }

  @ApiParam({
    name: 'id',
    description: 'User ID',
    type: 'string',
    required: true,
    example: '123456',
  })
  @ApiBody({ type: UserUpdateDTO })
  @Put(':id')
  @Unprotected()
  @HttpCode(HttpStatus.OK)
  async updateUser(
    @Headers('Authorization') authHeader: string,
    @Param('id') userId: string,
    @Body() updatedUser: UserUpdateDTO,
  ): Promise<any> {
    const accessToken = authHeader.split(' ')[1];
    return await this.userService.updateUser(accessToken, updatedUser, userId);
  }

  @ApiParam({
    name: 'id',
    description: 'User ID',
    type: 'string',
    required: true,
    example: '123456',
  })
  @ApiBody({ type: UpdatePasswordDTO })
  @Patch(':id')
  @Unprotected()
  @HttpCode(HttpStatus.OK)
  async patchUserPassword(
    @Headers('Authorization') authHeader: string,
    @Param('id') userId: string,
    @Body() { newPassword }: UpdatePasswordDTO,
  ) {
    const accessToken = authHeader.split(' ')[1];
    await this.userService.patchUserPassword(userId, newPassword, accessToken);
  }

  @ApiParam({
    name: 'id',
    description: 'User ID',
    type: 'string',
    required: true,
    example: '123456',
  })
  @Delete(':id')
  @Unprotected()
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteUser(
    @Headers('Authorization') authHeader: string,
    @Param('id') userId: string,
  ): Observable<void> {
    const accessToken = authHeader.split(' ')[1];
    return this.userService.disableUser(accessToken, userId);
  }
}
