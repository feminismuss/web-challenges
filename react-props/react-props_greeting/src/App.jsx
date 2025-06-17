export default function App() {
  return <Greeting name="Hannah"/>;
}

function Greeting ({name}){
  return <h1>Hello, {name}!</h1>
}