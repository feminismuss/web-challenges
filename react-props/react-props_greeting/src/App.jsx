export default function App() {
  return (
    <div>
      <Greeting name="Hannah" />
      <Greeting name="Roland" />
    </div>
  );
}
const coaches = ["Roland", "Sven", "Gimena"];

function Greeting({ name }) {
  const isCoach = coaches.includes(name);
  return <h1>{isCoach ? "Hello, Coach!" : `Hello, ${name}!`}</h1>;
}
