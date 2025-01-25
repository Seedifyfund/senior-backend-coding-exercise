import { IsNotEmpty, IsString, IsEmail, MinLength, MaxLength } from 'class-validator';

export class AddProductDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(20)
    name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @MaxLength(250)
    description: string;
}
