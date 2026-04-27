#  Laundry Management API

## Overview

This project is a mini Laundry Order Management System designed to help a dry cleaning store manage daily operations efficiently.

It allows users to:

* Create orders
* Track order status
* Calculate billing
* View dashboard insights

The system is built with a focus on simplicity, speed, and clear backend logic.

---

## Tech Stack

* Node.js
* Express.js
* In-memory data storage (JavaScript array)

---

##  Features

### 1. Create Order

* Add customer name and phone number
* Add garments with quantity
* Automatically calculates total bill
* Generates unique order ID

---

### 2. Order Status Management

Each order follows a lifecycle:

* RECEIVED
* PROCESSING
* READY
* DELIVERED

Users can update order status using API.

---

### 3. View Orders

* Fetch all orders
* Filter orders by status
* Search orders by customer name or phone number

---

### 4. Dashboard

Provides summary insights:

* Total number of orders
* Total revenue
* Orders grouped by status

---

##  Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/laundry-management-api.git
cd laundry-management-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the server

```bash
node src/server.js
```

Server will start at:

```
http://localhost:5001
```

---

## API Endpoints

###  Create Order

**POST** `/orders/create`

Request Body:

```json
{
  "customerName": "Riya",
  "phone": "9876543210",
  "items": [
    { "type": "shirt", "quantity": 2 },
    { "type": "pant", "quantity": 1 }
  ]
}
```

---

###  Update Order Status

**PUT** `/orders/:id/status`

Request Body:

```json
{
  "status": "PROCESSING"
}
```

---

###  Get Orders

**GET** `/orders`

With filters:

```
/orders?status=PROCESSING
/orders?search=riya
```

---

### Dashboard

**GET** `/orders/dashboard`

---

##  Sample Response

```json
{
  "message": "Order created",
  "orderId": "3702e767-3174-4723-982a-8412607ee98e",
  "totalAmount": 35,
  "data": {
    "customerName": "Riya",
    "phone": "9876543210",
    "status": "RECEIVED"
  }
}
```

---

##  AI Usage Report (Key Requirement)

### Tools Used

* ChatGPT (for development assistance and debugging)

---

### Sample Prompts Used

* "Create Express API for order management system"
* "How to calculate billing based on item quantity in Node.js"
* "How to filter data using query parameters in Express"
* "How to implement dashboard aggregation logic"

---

### Where AI Helped

* Initial project setup (Express server structure)
* Writing controller logic for APIs
* Designing routes and endpoints
* Implementing filtering and dashboard calculations

---

### What AI Got Wrong / Limitations

* Did not handle edge cases properly (missing validation)
* Basic error handling was incomplete
* Some logic required restructuring for clarity

---

### Improvements Made Manually

* Added proper validations (required fields, structure)
* Organized code into controllers, routes, and models
* Improved error handling and response structure
* Refined filtering and status update logic

---

##  Tradeoffs

* Used in-memory storage instead of a database for simplicity and speed
* No authentication implemented
* Minimal validation to avoid over-engineering

---

## Future Improvements

* Add MongoDB for persistent data storage
* Implement authentication (login/signup)
* Build a frontend UI for better usability
* Add estimated delivery date feature
* Improve validation and error handling

---

## Demo

* Postman collection included in repository for API testing

---

## Notes

This project focuses on:

* Fast execution
* Clear backend logic
* Effective use of AI tools
* Practical problem-solving approach

---
