import { IsNotEmpty, IsNumber, IsString, Min, MinLength } from 'class-validator'

export class AddOrder {

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    productId: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    quantity: number;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    userId: string;
}