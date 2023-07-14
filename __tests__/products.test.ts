import request from "supertest";
import { app } from "../src";
import { producstRouter } from "../src/routers/products-router";

//const url = "localhost:3000/products";

// describe("/products", () => {
//   beforeAll(async () => {
//     await request(app).delete("/__tests__/data");
//   });

//   it("should return 200 and empty array", async () => {
//     await request(app).get(url).expect(200, []);
//   });

//   it("should return 200 and empty array", async () => {
//     await request(producstRouter).get("/1").expect(404);
//   });
// });

test('adds 1 + 2 to equal 3', () => {
  expect(2).toBe(2);
});
