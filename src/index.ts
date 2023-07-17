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
  

app.use(bodyParser.json());
app.use(exampleMiddleware);

app.use('/products', producstRouter)
app.use("/addresses", addressesRouter);

const port = process.env.PORT || 3000;

// const HTTP_STATUSES = {
//   OK_200: 200,
//   CREATED_201: 201,
//   NO_CONTENT_204: 204,
//   BAD_REQUEST_400: 400,
//   NOT_FOUND_404: 404,
// };

// const db = {
//   products: [
//     { id: 1, title: "tomato" },
//     { id: 2, title: "apple" },
//     { id: 3, title: "pear" },
//   ],
// };

// app.get("/products", (req: Request, res: Response) => {
//   res.send(db.products);
// });

// app.post("/products", (req: Request, res: Response) => {
//   const newProduct = { id: Number(new Date()), title: req.body.title };
//   db.products.push(newProduct);

//   res.status(HTTP_STATUSES.CREATED_201).send(newProduct);
// });

// app.get("products/:id", (req: Request, res: Response) => {
//   const id = Number(req.params.id);
//   const product = db.products.find((product) => product.id === id);

//   if (!product) {
//     res.send(404);
//     return;
//   }

//   res.send(product);
// });

// app.delete("/__tests__/data", (req: Request, res: Response) => {
//   db.products = [];
//   res.send(HTTP_STATUSES.NO_CONTENT_204);
// });


// if (process.env.NODE_ENV !== "test") {
//   app.listen(port, () => console.log(`Example app listening on port ${port}`));
// }

app.listen(port, () => console.log(`Example app listening on port ${port}`));
