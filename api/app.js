const express = require("express");
const connection = require("./configration/config");
const {
    productRouter,
    orderRouter
} = require("./router/app.router");

const app = express();
const cors = require('cors')

require('dotenv').config();
const port = process.env.PORT;

app.use(express.json());
connection();
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use(productRouter);
app.use(orderRouter);

app.listen(port, () => {
    console.log(`App Listening Successfully At Port ${port}`);
})