import { Order } from '../models/order.model';

export interface IOrderRepository {
  save(order: Order): Promise<void>;
  find(): Promise<any>;
  findById(id: string): Promise<any>;
}
