import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UserIdDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  userId: string;
}