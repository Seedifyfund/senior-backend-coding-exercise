import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from '../models/order.model';
import { AddOrder } from '../../application/dtos/AddOrder.dto';
import { OrdersRepositoryService } from '../../infrastructure/repositories/order-repository.service';
import { OrderIdDto } from '../../application/dtos/OrderId.dto';

@Injectable()
export class OrdersService {
  constructor(private ordersRepo: OrdersRepositoryService) {}

  async fetchOrderDetails(payload: OrderIdDto) {
    const result = {
      success: true,
      message: '',
      data: {},
    };

    const orderDetails = await this.ordersRepo
      .findById(payload.orderId)
      .catch((error) => {
        result.message = 'Unable to process right now';
        result.success = false;
        console.log(error);
      });

    console.log('order details', orderDetails);

    if (!orderDetails?.id && result.success) {
      result.success = false;
      result.message = 'Order not found';
      delete result.data;
      throw new NotFoundException(result);
    } else if (result.success) {
      result.data = orderDetails;
      result.message = 'Order details fetched successfully';
      return result;
    } else {
      return result;
    }
  }

  async addOrder(body: AddOrder) {
    const result = {
      success: true,
      message: '',
      data: {},
    };

    try {
      const id = Math.random().toString(36).substr(2, 9);
      const product = new Order({
        id: id,
        productId: body.productId,
        quantity: body.quantity,
        userId: body.userId,
      });

      await this.ordersRepo.save(product);
      result.data = product.orderDetails();
      result.message = 'Order created successfully';
    } catch (error) {
      result.message = 'Unable to process right now';
      result.success = false;
      console.log(error);
    }
    return result;
  }

  async fetchAllOrders() {
    const result = {
      success: true,
      message: '',
      data: [],
    };

    try {
      const ordersList = await this.ordersRepo.find();
      result.message = 'Orders fetched successfully';
      result.data = ordersList;
    } catch (error) {
      console.log(error);
      result.success = false;
      result.message = 'Unable to process right now';
    }
    return result;
  }
}
