import { Product } from "../models/product.model";

export interface IProductRepository {
    save(productDetails: Product): Promise<void>;
    update(productDetails: Product): Promise<void>;
    find(): Promise<void>;
    findById(id: string): Promise<void>;
    delete(id: string): Promise<void>;
}