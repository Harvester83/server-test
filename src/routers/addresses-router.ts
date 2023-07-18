import express, { Request, Response, Router } from "express";
import { requestCounter } from "../";

export const addressesRouter = express.Router();

const addresses = [
  {
    id: 1,
    street: "123 Main St",
    city: "Cityville",
    state: "State",
    country: "Country",
    postalCode: "12345",
  },
  {
    id: 2,
    street: "456 Elm St",
    city: "Townsville",
    state: "State",
    country: "Country",
    postalCode: "67890",
  },
  {
    id: 3,
    street: "789 Oak St",
    city: "Villagetown",
    state: "State",
    country: "Country",
    postalCode: "54321",
  },
];

addressesRouter.get("/", (req: Request, res: Response) => {
  // @ts-ignore
  const exampleMiddleware = res.exampleMiddleware;
  res.send({ value: exampleMiddleware + "! Address: " + requestCounter });
  //res.send(addresses);
});

addressesRouter.get("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const address = addresses.find((address) => address.id === id);

  if (!address) {
    res.send(404);
    return;
  }

  res.send(address);
});
