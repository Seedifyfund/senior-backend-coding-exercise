import { Module } from '@nestjs/common';
import { ProductsController } from './application/controllers/products.controller';
import { ProductService } from './domain/services/product.service';
import { ProductRepositoryService } from './infrastructure/repositories/product-repository.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductService, ProductRepositoryService]
})
export class ProductModule {}
