import express, { Request, Response, Router, NextFunction } from "express";
import { requestCounter } from "../";
import { todo } from "node:test";
import { productsRepository } from "../repositories/products-repository";

export const producstRouter = express.Router();

const HTTP_STATUSES = {
  OK_200: 200,
  CREATED_201: 201,
  NO_CONTENT_204: 204,
  BAD_REQUEST_400: 400,
  NOT_FOUND_404: 404,
};

producstRouter.get("/", (req: Request, res: Response) => {
  const products = productsRepository.findproducts(
    req.query?.title?.toString()
  );

  res.send(products);
});

producstRouter.get("/:id", (req: Request, res: Response) => {
  const product = productsRepository.findproductsById(req.params.id);

  if (!product) {
    res.send(HTTP_STATUSES.NOT_FOUND_404);
    return;
  }

  res.send(product);
});

// producstRouter.post("/", (req: Request, res: Response) => {
//   const newProduct = { id: Number(new Date()), title: req.body.title };
//   db.products.push(newProduct);

//   res.status(HTTP_STATUSES.CREATED_201).send(newProduct);
// });

// producstRouter.put("/:id", (req: Request, res: Response) => {
//   const id = Number(req.params.id);
//   for (let i = 0; i < db.products.length; i++) {
//     if (db.products[i].id === id) {
//       db.products.slice(i, 1);
//       res.send(201);
//       return;
//     }
//   }

//   res.send(404);
// });

// producstRouter.delete("/:id", (req: Request, res: Response) => {
//   const id = Number(req.params.id);
//   for (let i = 0; i < db.products.length; i++) {
//     if (db.products[i].id === id) {
//       db.products.slice(i, 1);
//       res.send(201);
//       return;
//     }
//   }

//   res.send(404);
// });

// For testing
// producstRouter.delete("/__tests__/data", (req: Request, res: Response) => {
//   db.products = [];
//   res.send(HTTP_STATUSES.NO_CONTENT_204);
// });
