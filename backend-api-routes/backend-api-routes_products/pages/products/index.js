import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductsPage() {
  const { data, error } = useSWR("/api/products", fetcher);

  if (error) return <div>Fehler beim Laden</div>;
  if (!data) return <div>Lade Daten</div>;

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          {product.name} - {product.price}EUR
        </li>
      ))}
    </ul>
  );
}
