export default function App() {
  return (
    <div>
      <Smiley isHappy={true} />
      <Smiley isHappy={false} />
      <Smiley />
    </div>
  );
}

function Smiley({ isHappy }) {
  return <p>{isHappy ? "😊" : "😩"}</p>;
}
