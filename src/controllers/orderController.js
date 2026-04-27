const { v4: uuidv4 } = require("uuid");
const { orders } = require("../models/orderModel");

// price map
const priceMap = {
  shirt: 10,
  pant: 15,
  saree: 20,
};

// CREATE ORDER
exports.createOrder = (req, res) => {
  try {
    const { customerName, phone, items } = req.body;

    if (!customerName || !phone || !items) {
      return res.status(400).json({ message: "Missing fields" });
    }

    let totalAmount = 0;

    items.forEach((item) => {
      const price = priceMap[item.type.toLowerCase()];
      if (price) {
        totalAmount += price * item.quantity;
      }
    });

    const newOrder = {
      id: uuidv4(),
      customerName,
      phone,
      items,
      totalAmount,
      status: "RECEIVED",
      createdAt: new Date(),
    };

    orders.push(newOrder);

    res.status(201).json({
      message: "Order created",
      orderId: newOrder.id,
      totalAmount,
      data: newOrder,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// UPDATE STATUS
exports.updateOrderStatus = (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ["RECEIVED", "PROCESSING", "READY", "DELIVERED"];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const order = orders.find((o) => o.id === id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.status = status;

    res.json({
      message: "Status updated",
      data: order,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// GET ORDERS (FILTER + SEARCH)
exports.getOrders = (req, res) => {
  try {
    let result = [...orders];

    const { status, search } = req.query;

    if (status) {
      result = result.filter((o) => o.status === status);
    }

    if (search) {
      result = result.filter(
        (o) =>
          o.customerName.toLowerCase().includes(search.toLowerCase()) ||
          o.phone.includes(search)
      );
    }

    res.json({
      count: result.length,
      data: result,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// DASHBOARD
exports.getDashboard = (req, res) => {
  try {
    const totalOrders = orders.length;

    const totalRevenue = orders.reduce(
      (sum, o) => sum + o.totalAmount,
      0
    );

    const statusCount = {
      RECEIVED: 0,
      PROCESSING: 0,
      READY: 0,
      DELIVERED: 0,
    };

    orders.forEach((o) => {
      statusCount[o.status]++;
    });

    res.json({
      totalOrders,
      totalRevenue,
      statusCount,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};