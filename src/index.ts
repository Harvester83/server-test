import express, { Request, Response } from "express";
import "dotenv/config";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
console.log(process.env.NAME);

const products = [
  { id: 1, title: "tomato" },
  { id: 2, title: "apple" },
  { id: 3, title: "pear" },
];

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

app.get("/products", (req: Request, res: Response) => {
  res.send(products);
});

app.post("/products", (req: Request, res: Response) => {
  const newProduct = { id: Number(new Date()), title: req.body.title };
  products.push(newProduct);

  res.status(201).send(newProduct);
});

app.get("/products/:productTitle", (req: Request, res: Response) => {
  const product = products.find(
    (product) => product.title === req.params.productTitle
  );

  if (!product) {
    res.send(404);
    return;
  }

  res.send(product);
});


app.put("/products/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      
      products.slice(i, 1);
      res.send(201);
      return;
    }
  }

  res.send(404);
});

app.delete("/products/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      products.slice(i, 1);
      res.send(201);
      return;
    }
  }

  res.send(404);
});

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
