// import Head from "next/head";
import Link from "next/link";
import { introduction } from "lib/data";

export default function HomePage() {
  return (
    <>
      <head>
        <title>Lord of the Rings</title>
      </head>
      <main>
        <div>
          <h1>Lord of the Rings </h1>
          <p>{introduction}</p>
          <h2>All Volumes</h2>
          <Link href={"/volumes/the-fellowship-of-the-ring.js"}>
            The Fellowship of the Ring
          </Link>
          <Link href={"/volumes/the-two-towers.js"}>The Two Towers</Link>
          <Link href={"/volumes/the-return-of-the-king.js"}>
            The Return of the King
          </Link>
        </div>
      </main>
    </>
  );
}
