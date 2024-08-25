require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const userRouter = require("./api/users/user.router");
const productsRouter = require("./api/products/product.router");

app.use(express.json());
app.use(cors());
app.use("/api/users", userRouter);
app.use("/api/products", productsRouter);

app.listen(process.env.APP_PORT, () => {
    console.log("Server up and running: ", process.env.APP_PORT);
});