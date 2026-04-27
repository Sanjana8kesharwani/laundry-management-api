const express = require("express");
const router = express.Router();

const {
  createOrder,
  updateOrderStatus,
  getOrders,
  getDashboard,
} = require("../controllers/orderController");

router.post("/create", createOrder);
router.put("/:id/status", updateOrderStatus);
router.get("/", getOrders);
router.get("/dashboard", getDashboard);

module.exports = router;