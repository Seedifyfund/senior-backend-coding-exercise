import { Test, TestingModule } from '@nestjs/testing';
import { OrdersController } from './orders.controller';
import { OrdersService } from '../../domain/services/orders.service';
import { AddOrder } from '../dtos/AddOrder.dto';

describe('OrdersController', () => {
  let controller: OrdersController;

  const mockOrdersService = {
    fetchOrderDetails: jest.fn((payload) => {
      return {
        success: true,
        message: 'Order details fetched successfully',
        data: {
          id: '1',
          productId: '345',
          quantity: 4,
          userId: 'test_user',
        },
      };
    }),
    addOrder: jest.fn((body) => {
      return {
        success: true,
        message: 'Order created successfully',
        data: {
          id: '1',
          productId: '345',
          quantity: 4,
          userId: 'test_user',
        },
      };
    }),
    fetchAllOrders: jest.fn(() => {
      return {
        success: true,
        message: 'Orders fetched successfully',
        data: [{ id: '1', productId: '345', quantity: 4, userId: 'test_user' }],
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersController],
      providers: [{ provide: OrdersService, useValue: mockOrdersService }],
    }).compile();

    controller = module.get<OrdersController>(OrdersController);
  });

  it('add an order', async () => {
    const payload: AddOrder = {
      productId: '345',
      quantity: 4,
      userId: 'test_user',
    };
    const response = (await controller.addOrder(payload)) as any;
    // console.log(response);

    expect(response.success).toEqual(true);
    expect(response.data.id).toEqual('1');
    expect(mockOrdersService.addOrder).toHaveBeenCalled();
  });

  it('fetch all orders', async () => {
    const response = await controller.getAllOrders();
    // console.log(response);

    expect(response.data[0].productId).toEqual('345');
    expect(response.data[0].quantity).toEqual(4);
    expect(response.data[0].userId).toEqual('test_user');
    expect(mockOrdersService.fetchAllOrders).toHaveBeenCalled();
  });

  it('fetching single order details', async () => {
    const payload = {
      orderId: '1',
    };

    const result: any = await controller.getOrderDetails(payload.orderId);
    // console.log(result);
    expect(result.success).toEqual(true);
    expect(result.data.userId).toEqual('test_user');
    expect(mockOrdersService.fetchOrderDetails).toHaveBeenCalled();
  });
});
