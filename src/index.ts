import express, { Request, Response } from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import { producstRouter } from "./routers/products-router";

const app = express();
app.use(bodyParser.json());
app.use('/products', producstRouter)

const port = process.env.PORT || 3000;

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

app.get("/adresses/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const address = addresses.find((address) => address.id === id);

  if (!address) {
    res.send(404);
    return;
  }

  res.send(address);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
