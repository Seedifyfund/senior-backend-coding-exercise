
# Senior Backend Coding Exercise

## Overview

This repository contains a legacy codebase for handling user orders. Your task is to **refactor** the legacy code using **NestJS** and implement a **Repository Pattern** with an **in-memory** data store. The refactored solution should follow clean architecture principles, emphasizing separation of concerns and modular design. You should also implement **DTO validation** for incoming requests.

## Project Structure

Here’s a breakdown of the updated folder structure:

```
src/
│
├── order/
│   ├── application/                # (Empty, ready for application services)
│   ├── domain/                     # Domain layer
│   │   ├── order.ts                # Order entity/model
│   │   └── order.repository.ts     # Repository interface for order
│   ├── infrastructure/             # Infrastructure layer
│   │   ├── legacy-order.controller.js  # Legacy controller you need to refactor
│   │   ├── order.module.ts         # NestJS module for order
│   └── main.ts                     # Entry point of the application
│
├── test/                           # Jest configuration and tests (if applicable)
│
├── .eslintc.js                     # Linting configuration
├── .prettierrc                     # Code formatting configuration
├── nest-cli.json                   # NestJS CLI configuration
├── package.json                    # Project dependencies
├── tsconfig.json                   # TypeScript configuration
├── tsconfig.build.json             # Build configuration
└── README.md                       # You are here
```

## Task

You are provided with a legacy controller (`legacy-order.controller.js`) that handles user orders. The task is to **refactor** this codebase into a more modular structure, applying the **Repository Pattern** and using **DTO validation** to validate incoming requests.

### Key Requirements:

- **Refactor the `legacy-order.controller.js`:**
  - Modularize the code by separating concerns, making it clean and maintainable.
  - Apply a **Repository Pattern** to abstract data access, ensuring the repository is implemented with an **in-memory** data store.
  - Implement **DTO validation** to validate incoming request data for creating or modifying orders.

### Modular Architecture:

The solution should follow a **modular architecture**:
- **Domain layer** (entities and repository interfaces).
- **Application layer** (business logic and services).
- **Infrastructure layer** (controllers and repository implementations).

### Time Limit:

The exercise should **not take more than 20 minutes** to complete.

## Instructions

### Step 1: Clone the Repository

```bash
git clone https://github.com/Seedifyfund/senior-backend-coding-exercise.git
cd senior-backend-coding-exercise
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Run the Application

```bash
npm run start
```

The application will run on `http://localhost:3000`.

## Files of Interest

### Legacy Code:
- `src/order/infrastructure/legacy-order.controller.js`: This is the legacy controller you will be refactoring.

### Refactored Code (to be created):
- Refactor the legacy controller, applying the repository pattern, DTO validation, and separating business logic into appropriate layers.

## What We Are Looking For

- Clean, **modular code** using **NestJS**.
- Implementation of a **Repository Pattern** with an **in-memory** repository.
- Proper **DTO validation** for incoming request data.
- Demonstration of clear **separation of concerns** between the layers (domain, application, infrastructure).

### Time Estimate:

The exercise should take approximately **20 minutes** to complete.


# Senior Backend Coding Exercise Sample Payloads

```bash
    
    Signup User

    API: https://senior-backend-coding-exercise.fly.dev/users/signup
    Method: POST
    
    Payload: {
    "name": "steve",
    "email": "abc@test.com",
    "password": "encrypted"
    }

    Response: {
    "success": true,
    "message": "User created successfully",
    "data": {
        "id": "5dew2s8um",
        "name": "abc@test.com",
        "email": "steve",
        "password": "encrypted"
        }
    }

    Fetch User Details

    API: https://senior-backend-coding-exercise.fly.dev/users/single-user/5dew2s8um
    Method: GET

    Response: 
    {
    "success": true,
    "message": "User details fetched successfully",
    "data": 
          {
        "id": "5dew2s8um",
        "name": "abc@test.com",
        "email": "steve",
        "password": "encrypted"
          }
    } 
    
    Fetch All Users

    API: https://senior-backend-coding-exercise.fly.dev/users/all-users
    Method: GET

    Response:
    {
    "success": true,
    "message": "Users fetched successfully",
    "data": [
        {
            "id": "5dew2s8um",
            "name": "abc@test.com",
            "email": "steve",
            "password": "encrypted"
        }
    ]
  }

    Update profile

    API: https://senior-backend-coding-exercise.fly.dev/users/update-profile
    Method: POST
    Payload: 
    {
    "userId":"fqeuzrhee",
    "name": "tony",
    "email": "tony@stark.in",
    "password": "double_enc"
    }

    Response: 
    {
    "success": true,
    "message": "User updated successfully"
  }


    Delete User

    API: https://senior-backend-coding-exercise.fly.dev/users/delete-user
    Method: POST
    Payload:
    {
    "userId": "hsgqx70tp"
    }

    Response: 
    {
    "success": true,
    "message": "User deleted successfully"
    }
```

```bash
    Add new Products
    API: https://senior-backend-coding-exercise.fly.dev/products/create-product
    Method: POST
    Payload:
    {
    "name": "mobiles",
    "description": "a simple mobile device"
    }

    Response:
    {
    "success": true,
    "message": "Product created successfully",
    "data": {
        "id": "epefon9gr",
        "name": "mobiles",
        "description": "a simple mobile device"
        }
    }


    Fetch Product Details
    API: https://senior-backend-coding-exercise.fly.dev/products/single-product/epefon9gr
    Method: GET

    Response:
    {
    "success": true,
    "message": "Product details fetched successfully",
    "data": {
        "id": "epefon9gr",
        "name": "mobiles",
        "description": "a simple mobile device"
      }
    }


    Fetch All Products
    API: https://senior-backend-coding-exercise.fly.dev/products/all-products
    Method: GET

    Response:
    {
    "success": true,
    "message": "Products fetched successfully",
    "data": [
        {
            "id": "epefon9gr",
            "name": "mobiles",
            "description": "a simple mobile device"
          }
        ]
    }


    Update Product
    API: https://senior-backend-coding-exercise.fly.dev/products/update-product
    Method: POST
    Payload:
    {
    "productId":"epefon9gr",
    "name": "Nothing Phone (1)",
    "description": "A brand new nothing phone (1)(R)"
    }

    Response:
    {
    "success": true,
    "message": "Product updated successfully"
    }

    Delete Product
    API: https://senior-backend-coding-exercise.fly.dev/products/delete-product
    Method: POST
    Payload:
    {
    "productId": "epefon9gr"
    }

    Response:
    {
    "success": true,
    "message": "Product deleted successfully"
    }

```

```bash
    Add Orders
    API: https://senior-backend-coding-exercise.fly.dev/order/add
    Method: POST
    Payload:
    {
    "productId":"xh945mdtb",
    "userId":"gvs9athpt",
    "quantity": 2
    }

    Response:
    {
    "success": true,
    "message": "Order created successfully",
    "data": {
        "id": "842cm5c2x",
        "productId": "xh945mdtb",
        "quantity": 2,
        "userId": "gvs9athpt"
      }
    }


    Fetch Product Details
    API: https://senior-backend-coding-exercise.fly.dev/order/842cm5c2x
    Method: GET
    Response:
    {
    "success": true,
    "message": "Order details fetched successfully",
    "data": {
        "id": "842cm5c2x",
        "productId": "xh945mdtb",
        "quantity": 2,
        "userId": "gvs9athpt"
        }
    }


    Fetch All Orders
    API: https://senior-backend-coding-exercise.fly.dev/order/all
    Method: GET
    Response:
    {
    "success": true,
    "message": "Orders fetched successfully",
    "data": [
        {
            "id": "842cm5c2x",
            "productId": "xh945mdtb",
            "quantity": 2,
            "userId": "gvs9athpt"
            }
        ]
    }

```