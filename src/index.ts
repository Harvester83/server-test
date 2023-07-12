import express, { Request, Response } from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import { producstRouter } from "./routers/products-router";
import { addressesRouter } from "./routers/addresses-router";

export const app = express();
export const randomNum = 23;

app.use(bodyParser.json());
app.use('/products', producstRouter)
app.use('/addresses', addressesRouter)

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
