import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { AddProductDto } from './AddProduct.dto';

export class UpdateProductDto extends AddProductDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  productId: string;
}
