import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

  if (request.method === "GET") {
    try {
      const products = await Product.findById(id);
      response.status(200).json(products);
    } catch (error) {
      console.error("Fehler beim Abrufen der Produkte:", error);
      response.status(500).json({ message: "Interner Serverfehler" });
    }
  } else {
    response.status(405).json({ message: "Methode nicht erlaubt" });
  }
}
