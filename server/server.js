/** @format */
const express = require("express");
require("dotenv").config();
const connectDB = require("./connectDB.js");
const userRouter = require("./routes/userRoute.js");
const cors = require("cors");
const paymentRouter = require("./routes/paymentRoute.js");
const planRouter = require("./routes/planRoute.js");
const withdrawalRouter = require("./routes/withdrawalRoute.js");
const adminRouter = require("./routes/adminRoute.js");
const newsRouter = require("./routes/newsRoute.js");
const testimonialRouter = require("./routes/testimonialRoute.js");

const app = express();
app.use(cors())
const PORT = process.env.PORT;
connectDB();
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/payment-receipts", paymentRouter);
app.use("/api/plans", planRouter);
app.use("/api/withdrawals", withdrawalRouter);
app.use("/api/admins", adminRouter);
app.use("/api/news", newsRouter);
app.use("/api/testimonials", testimonialRouter);


app.get("/", (req, res) => {
  res.send(`<h1>hello world</h1>`);
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
