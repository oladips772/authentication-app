/** @format */
const express = require("express");
require("dotenv").config();
const connectDB = require("./connectDB.js");
const userRouter = require("./routes/userRoute.js");
const cors = require("cors");
const paymentRouter = require("./routes/paymentRoute.js");

const app = express();
app.use(cors())
const PORT = process.env.PORT;

app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/receipts", paymentRouter);
connectDB();

app.get("/", (req, res) => {
  res.send(`<h1>hello world</h1>`);
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
