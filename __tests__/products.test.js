// import request from "supertest";
// import { app } from "../src";
import { randomNum } from "../src";

//export const num = 43

// describe("/products", () => {
//   it("should return 200 and empty array", async () => {
//     await request(app).get("/products").expect(200, []);
//   });
// });

test("My first test", () => {
  expect(num).toBe(43);
});
