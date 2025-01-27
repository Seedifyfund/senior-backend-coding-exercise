import { Module } from '@nestjs/common';
import { OrdersController } from './application/controllers/orders.controller';
import { OrdersService } from './domain/services/orders.service';
import { OrdersRepositoryService } from './infrastructure/repositories/order-repository.service';

@Module({
  imports: [],
  controllers: [OrdersController],
  providers: [OrdersService, OrdersRepositoryService],
})
export class OrderModule {}
