import { createServer } from "node:http";

// const name = "Hannah";
export const server = createServer((request, response) => {
  response.statusCode = 200;
  response.end("Hello, Hannah");
});
