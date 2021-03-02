require("dotenv").config();
const request = require("supertest");
const app = require("./app");

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});

// describe("Test root endpoint", () => {
//   test("It should response server information", () => {
//     return request(app)
//       .get("/")
//       .then((response) => {
//         expect(response.statusCode).toBe(200);
//         app.close();
//         done();
//       });
//   });
// });

// describe("Test search endpoint", () => {
//   test("It should response search data", () => {
//     return request(app)
//       .get("/search?s=Infinity")
//       .then((response) => {
//         expect(response.statusCode).toBe(200);
//       });
//   });
// });

// describe("Test detail endpoint", () => {
//   test("It should response detail data", () => {
//     return request(app)
//       .get("/detail?i=tt8146754")
//       .then((response) => {
//         expect(response.statusCode).toBe(200);
//       });
//   });
// });

// afterAll(() => {
//   app.close();
//   done();
// });
