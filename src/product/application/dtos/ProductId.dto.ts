import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class ProductIdDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  productId: string;
}