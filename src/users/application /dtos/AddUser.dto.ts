import { IsNotEmpty, IsString, IsEmail, MinLength, MaxLength } from 'class-validator';

export class AddUserDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(20)
    name: string;

    @IsNotEmpty()
    @IsEmail()
    @MinLength(6)
    @MaxLength(25)
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @MaxLength(20)
    password?: string;
}
