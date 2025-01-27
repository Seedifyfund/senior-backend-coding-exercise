import { Injectable } from '@nestjs/common';
import { IOrderRepository } from '../../domain/interfaces/order.repository.interface';
import { Order } from '../../domain/models/order.model';

interface OrderDetails {
  id: string;
  userId: string;
  productId: string;
  quantity: number;
}

@Injectable()
export class OrdersRepositoryService implements IOrderRepository {
  allOrders: OrderDetails[];

  constructor() {
    this.allOrders = [];
  }

  // adding a new record to orders
  save(orderDetails: Order): Promise<void> {
    console.log(orderDetails);
    this.allOrders.push(orderDetails.orderDetails());
    return Promise.resolve();
  }

  // filtering a single order details
  findById(id: string): Promise<any> {
    const orderDetails = this.allOrders.find(
      (singleOrder) => singleOrder.id === id,
    );
    return Promise.resolve(orderDetails);
  }

  // retriving all the products list
  find(): Promise<any[]> {
    return Promise.resolve(this.allOrders);
  }
}
