import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from './orders.service';
import { AddOrder } from '../../application/dtos/AddOrder.dto';
import { OrdersRepositoryService } from '../../infrastructure/repositories/order-repository.service';

describe('OrdersService', () => {
  let service: OrdersService;

  const mockOrderRepo = {
    allOrders: [],
    save: jest.fn((order)=>{}),
    findById: jest.fn((id)=>{}),
    findAll: jest.fn(),
    ordersMaxId: 0,
  };

  const addNewOrder : AddOrder = {
    productId: '345',
    quantity: 4,
    userId: 'test_user',
  };

  const orderDetails = {
    id: '1',
    ...addNewOrder
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [
        OrdersService,
        { provide: OrdersRepositoryService, useValue: mockOrderRepo },
      ],
    }).compile();

    service = module.get<OrdersService>(OrdersService);
  });

  it('add a new order', async () => {
    const response = await  service.addOrder(addNewOrder);

    expect(response.success).toEqual(true);
    expect(mockOrderRepo.save).toHaveBeenCalled()
  });
});
