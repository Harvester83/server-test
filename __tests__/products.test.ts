import request from "supertest";
import { producstRouter } from "../src/routers/products-router";
import { app } from "../src";


//app.use('/products', producstRouter)

describe("/products", () => {
  beforeAll(async () => {
    await request(producstRouter).delete("/__tests__/data");
  });

  it("should return 200 and empty array", async () => {
    await request(app).get("/products").expect(200, []);
  });

  it("should return 200 and empty array", async () => {
    await request(app).get("/products/1").expect(404);
  });
});


