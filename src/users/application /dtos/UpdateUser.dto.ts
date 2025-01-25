import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { AddUserDto } from './AddUser.dto';

export class UpdateUserDto extends AddUserDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  userId: string;
}
