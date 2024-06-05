const request = require("supertest");
const app = require("./server");

describe("Test the root path", () => {
  test("It should respond to the GET method", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hello World");
  });

  test("It should respond to the POST method", async () => {
    const title = "developer";
    const response = await request(app)
      .post("/gemini")
      .send({
        message: "I want to be a developer",
        history: [
          {
            role: "user",
            parts: [
              { text: `Hello, I am interviewing for a job title of ${title}.` },
            ],
          },
          {
            role: "model",
            parts: [{ text: "Tell me more about yourself" }],
          },
        ],
      });
    expect(response.statusCode).toBe(200);
  });
});
