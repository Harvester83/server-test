import express, { NextFunction, Request, Response } from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import { producstRouter } from "./routers/products-router";
import { addressesRouter } from "./routers/addresses-router";

export const app = express();

const exampleMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // @ts-ignore
  res.exampleMiddleware = "Example Middleware Work";
  next();
};

const authGuradMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.query.token === "123") {
    return next();
  }

  res.send(401);
};

export let requestCounter = 0;
const requestCounterMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    requestCounter++;
    next();
  };

app.use(bodyParser.json());
app.use(requestCounterMiddleware);
app.use(exampleMiddleware);
//app.use(authGuradMiddleware);

app.use("/products", producstRouter);
app.use("/addresses", addressesRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}`));
