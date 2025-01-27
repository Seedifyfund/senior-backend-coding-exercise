import { Injectable, NotFoundException } from '@nestjs/common';
import { AddProductDto } from '../../application/dtos/AddProduct.dto';
import { ProductRepositoryService } from '../../infrastructure/repositories/product-repository.service';
import { Product } from '../models/product.model';
import { UpdateProductDto } from '../../application/dtos/UpdateProduct.dto';
import { ProductIdDto } from '../../application/dtos/ProductId.dto';

@Injectable()
export class ProductService {
  constructor(private readonly productRepo: ProductRepositoryService) {}

  // fetching a single product details
  async getProductDetails(productId: string) {
    const result = {
      success: true,
      message: '',
      data: {},
    };

    const productDetails = await this.productRepo
      .findById(productId)
      .catch((error) => {
        result.message = 'Unable to process right now';
        result.success = false;
        console.log(error);
      });

    console.log('product details', productDetails);

    if (!productDetails?.id && result.success) {
      result.success = false;
      result.message = 'Product not found';
      delete result.data;
      throw new NotFoundException(result);
    } else if (result.success) {
      result.data = productDetails;
      result.message = 'Product details fetched successfully';
      return result;
    } else {
      return result;
    }
  }

  // add a new record to products
  async createProduct(body: AddProductDto) {
    const result = {
      success: true,
      message: '',
      data: {},
    };

    try {
      const id = Math.random().toString(36).substr(2, 9);
      const product = new Product(id, body.name, body.description);

      await this.productRepo.save(product);
      result.data = product.getDetails();
      result.message = 'Product created successfully';
    } catch (error) {
      result.message = 'Unable to process right now';
      result.success = false;
      console.log(error);
    }
    return result;
  }

  // update a prodduct detail
  async updateProduct(body: UpdateProductDto) {
    const result = {
      success: true,
      message: '',
    };

    try {
      await this.productRepo.update({
        id: body.productId,
        name: body.name,
        description: body.description,
      });
      result.message = 'Product updated successfully';
    } catch (error) {
      console.log(error);
      result.success = false;
      result.message = 'Unable to process right now';
    }
    return result;
  }

  // delete a product with productId
  async deleteProduct(body: ProductIdDto) {
    const result = {
      success: true,
      message: '',
    };

    try {
      const productDetails = await this.productRepo.delete(body.productId);
      console.log('Product deleted', productDetails);
      result.message = 'Product deleted successfully';
    } catch (error) {
      console.log(error);
      result.success = false;
      result.message = 'Unable to process right now';
    }
    return result;
  }

  // fetching all product details
  async getAllProducts() {
    const result = {
      success: true,
      message: '',
      data: [],
    };

    try {
      const productsList = await this.productRepo.find();
      result.message = 'Products fetched successfully';
      result.data = productsList;
    } catch (error) {
      console.log(error);
      result.success = false;
      result.message = 'Unable to process right now';
    }

    return result;
  }
}
