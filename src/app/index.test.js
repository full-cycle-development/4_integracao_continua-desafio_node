const request = require("supertest");
const { app } = require(".");

test("It should response the GET method", done => {
  request(app)
    .get("/")
    .then(response => {
      expect(response.statusCode).toBe(200);
      done();
    });
});
