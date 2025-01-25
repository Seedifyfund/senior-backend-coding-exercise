import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AddProductDto } from '../dtos/AddProduct.dto';
import { UpdateProductDto } from '../dtos/UpdateProduct.dto';
import { ProductService } from '../../domain/services/product.service';
import { ProductIdDto } from '../dtos/ProductId.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Get('/single-product/:id')
  fetchProductDetails(@Param('id') id: string) {
    return this.productService.getProductDetails(id);
  }

  @Post('create-product')
  addProduct(@Body() body: AddProductDto) {
    return this.productService.createProduct(body);
  }

  @Post('update-product')
  editeProduct(@Body() body: UpdateProductDto) {
    console.log(body);
    return this.productService.updateProduct(body);
  }

  @Get('all-products')
  fetchAllProducts() {
    return this.productService.getAllProducts();
  }

  @Post('delete-product')
  deleteProduct(@Body() body: ProductIdDto) {
    return this.productService.deleteProduct(body);
  }
}
