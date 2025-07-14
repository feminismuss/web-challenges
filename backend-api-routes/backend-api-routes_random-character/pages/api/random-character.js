import Chance from "chance"; //  - import via `import Chance from "chance";`

const chance = new Chance(); // - create a new instance with `const chance = new Chance();`

//  - create a `character` object and use the methods of `chance` like in the example below;
export default function handler(request, response) {
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    age: chance.age(),
    twitter: chance.twitter(),
    geohash: chance.geohash(),
    email: chance.email(),
    profession: chance.profession(),
  };
  response.status(200).json(character);
}
