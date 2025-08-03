import ProductList from "@/components/ProductList";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export const dynamic = "force-dynamic"; // untuk SSR

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store", // SSR = fetch tiap request
  });

  if (!res.ok) throw new Error("Failed to fetch");

  return res.json();
}

export default async function SSRPage() {
  const products = await getProducts();

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Server-Side Rendering (SSR)</h1>
      <ProductList products={products} />
    </section>
  );
}
