import { Module } from '@nestjs/common';
import { OrderModule } from './order/order.module';
import { AppController } from './app.controller';
import { ProductModule } from './product/product.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [OrderModule, ProductModule, UsersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
