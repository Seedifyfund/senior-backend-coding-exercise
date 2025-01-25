import { Module } from '@nestjs/common';
import { OrderModule } from './order/order.module';
import { AppController } from './app.controller';
import { ProductModule } from './product/product.module';
import { UsersModule } from './users/users.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [OrderModule, ProductModule, UsersModule, SharedModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
