import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { OrdersService } from '../../domain/services/orders.service';
import { AddOrder } from '../dtos/AddOrder.dto';
import { OrderIdDto } from '../dtos/OrderId.dto';

@Controller('order')
export class OrdersController {
  constructor(private orderService: OrdersService) {}

  @Get('/all')
  getAllOrders() {
    return this.orderService.fetchAllOrders();
  }

  @Get('/:id')
  getOrderDetails(@Param('id') orderId: string) {
    const paylod: OrderIdDto = {
      orderId,
    };
    return this.orderService.fetchOrderDetails(paylod);
  }

  @Post('add')
  addOrder(@Body() body: AddOrder) {
    return this.orderService.addOrder(body);
  }
}
