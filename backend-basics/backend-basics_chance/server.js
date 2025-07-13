import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();

export const server = createServer((request, response) => {
  const name = chance.name();
  const age = chance.age();
  const profession = chance.profession({ rank: true });

  const message = `Hallo, mein Namen ist ${name} und ich bin ${age} Jahre alt. Ich bin ein ${profession}.`;

  response.statusCode = 200;
  response.end(message);
});
