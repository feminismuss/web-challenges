import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR("/api/random-character", fetcher);

  if (error) return <p>Fehler beim Laden der Daten</p>;
  if (isLoading || !data) return <p>Lade Charakter</p>;
  return (
    <main>
      <h1>Zufälliger Charackter</h1>
      <ul>
        {Object.entries(data).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </main>
  );
}
