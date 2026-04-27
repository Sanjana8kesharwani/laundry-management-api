const express = require("express");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Laundry API running ");
});

app.use("/orders", orderRoutes);

module.exports = app;