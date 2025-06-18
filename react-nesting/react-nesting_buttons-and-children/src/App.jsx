import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Butter</Button>
      <Button>Milch</Button>
      <Button>Zucker</Button>
      <Button>Eier</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
