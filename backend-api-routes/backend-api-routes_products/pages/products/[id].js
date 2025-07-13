import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(id ? `/api/products/${id}` : null, fetcher);

  if (error) return <div>Fehler beim Laden</div>;
  if (!data) return <div>Lade Daten</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>Preis: {data.price}</p>
      <p>Beschreibung: {data.description}</p>
    </div>
  );
}
