import express, { Request, Response, Router } from "express";

export const producstRouter = express.Router();

const HTTP_STATUSES = {
  OK_200: 200,
  CREATED_201: 201,
  NO_CONTENT_204: 204,
  BAD_REQUEST_400: 400,
  NOT_FOUND_404: 404,
};

const db = {
  products: [
    { id: 1, title: "tomato" },
    { id: 2, title: "apple" },
    { id: 3, title: "pear" },
  ],
};

producstRouter.get("/", (req: Request, res: Response) => {
  res.send(db.products);
});

producstRouter.post("/", (req: Request, res: Response) => {
  const newProduct = { id: Number(new Date()), title: req.body.title };
  db.products.push(newProduct);

  res.status(HTTP_STATUSES.CREATED_201).send(newProduct);
});

producstRouter.get("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const product = db.products.find(
    (product) => product.id === id
  );

  if (!product) {
    res.send(404);
    return;
  }

  res.send(product);
});

producstRouter.put("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  for (let i = 0; i < db.products.length; i++) {
    if (db.products[i].id === id) {
      db.products.slice(i, 1);
      res.send(201);
      return;
    }
  }

  res.send(404);
});

producstRouter.delete("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  for (let i = 0; i < db.products.length; i++) {
    if (db.products[i].id === id) {
      db.products.slice(i, 1);
      res.send(201);
      return;
    }
  }

  res.send(404);
});

producstRouter.delete("/__tests__/data", (req: Request, res: Response) => {
  db.products = [];
  res.send(HTTP_STATUSES.NO_CONTENT_204);
});
