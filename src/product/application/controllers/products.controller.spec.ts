import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from '../controllers/products.controller';
import { ProductService } from '../../domain/services/product.service';
import { UpdateProductDto } from '../dtos/UpdateProduct.dto';
import { ProductIdDto } from '../dtos/ProductId.dto';

describe('ProductsController', () => {
  let controller: ProductsController;

  const mockProductService = {
    createProduct: jest.fn(() => {
      return {
        success: true,
        message: 'Product created successfully',
        data: {
          id: 'xh945mdtb',
          name: 'mobiles',
          description: 'a simple mobile device',
        },
      };
    }),
    getProductDetails: jest.fn((id) => {
      return {
        success: true,
        message: 'Product details fetched successfully',
        data: {
          id: 'xh945mdtb',
          name: 'mobiles',
          description: 'a simple mobile device',
        },
      };
    }),
    updateProduct: jest.fn((body: UpdateProductDto) => {
      return {
        success: true,
        message: 'Product updated successfully',
      };
    }),
    getAllProducts: jest.fn(() => {
      return {
        success: true,
        message: 'Products fetched successfully',
        data: [
          {
            id: 'xh945mdtb',
            name: 'mobiles',
            description: 'a simple mobile device',
          },
        ],
      };
    }),
    deleteProduct: jest.fn((body: ProductIdDto) => {
      return {
        success: true,
        message: 'Product deleted successfully'
      }
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [{ provide: ProductService, useValue: mockProductService }],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
  });

  it('add new product', async () => {
    const product = {
      name: 'mobiles',
      description: 'a simple mobile device',
    };

    const response: any = await controller.addProduct(product);

    expect(response.success).toEqual(true);
    expect(response.data.id).toEqual('xh945mdtb');
    expect(mockProductService.createProduct).toHaveBeenCalled();
  });

  it('fetch a product by id', async () => {
    const payload = {
      id: 'xh945mdtb',
    };

    const response: any = await controller.fetchProductDetails(payload.id);

    expect(response.data.id).toEqual('xh945mdtb');
    expect(mockProductService.getProductDetails).toHaveBeenCalled();
  });

  it('update a single product with product details',async ()=>{
    const payload : UpdateProductDto= {
      productId: 'xh945mdtb',
      name: 'Nothing Phone(1)',
      description: 'Nothing brand first phone',
    }

    const response = await controller.editeProduct(payload);

    expect(response.success).toEqual(true);
    expect(mockProductService.updateProduct).toHaveBeenCalled();
  })

  it('fetching all products', async()=>{
    const response = await controller.fetchAllProducts();
    
    expect(response.data.length).toBeGreaterThan(0);
    expect(mockProductService.getAllProducts).toHaveBeenCalled();
  })

  it('delete a product', async ()=>{
    const payload = { productId: 'xh945md'};

    const result = await controller.deleteProduct(payload);

    expect(result.success).toEqual(true);
    expect(mockProductService.deleteProduct).toHaveBeenCalled();
  })
});
