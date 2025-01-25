import { Injectable } from '@nestjs/common';
import { Product } from '../../domain/models/product.model';

interface ProductDetails {
    id: string;
    name: string;
    description: string;
}

@Injectable()
export class ProductRepositoryService {
    productsData: ProductDetails[];

  constructor() {
    this.productsData = [];
  }

  // adding a new record to products
  save(productDetails: Product): Promise<void> {
    console.log(productDetails);
    this.productsData.push(productDetails.getDetails());
    return Promise.resolve();
  }

  // updating the product details
  update(productDetails: ProductDetails): Promise<void> {
    console.log(productDetails);
    const productIndex = this.productsData.findIndex(
      (singleProduct) => singleProduct.id === productDetails.id,
    );
    this.productsData[productIndex] = productDetails;
    return Promise.resolve();
  }

  // retriving all the products list
  find(): Promise<any> {
    return Promise.resolve(this.productsData);
  }

  // filtering a single product details
  findById(id: string): Promise<any> {
    const productDetails = this.productsData.find(
      (singleProduct) => singleProduct.id === id,
    );
    return Promise.resolve(productDetails);
  }

  // deleting a product with productid
  delete(id: string): Promise<any> {
    const productIndex = this.productsData.findIndex(
      (singleProduct) => singleProduct.id === id,
    );
    const [deletedUser] = this.productsData.splice(productIndex, 1);
    return Promise.resolve(deletedUser);
  }
}
