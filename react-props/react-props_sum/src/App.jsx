export default function App() {
  return <Sum valueA={12} valueB={8} />;
}

function Sum({ valueA, valueB }) {
  const result = valueA + valueB;
  return (
    <h1>
      {valueA} + {valueB} = {result}
    </h1>
  );
}
