const app = require("../../server");
const request = require("supertest");

describe("POST /data", function () {
  it("responds with sum in json", async function () {
    let response = await request(app)
      .post("/data")
      .send({ nums: [1, 2, 3, 4, 5] })
      .set("Accept", "application/json");
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
    expect(response.body.sum).toEqual(15);
  });
});
