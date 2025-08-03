import Image from "next/image";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

export async function generateStaticParams() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();

  return products.map((p) => ({ id: p.id.toString() }));
}

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "force-cache",
  });
  return res.json();
}

export default async function ProductDetail({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <div className="relative w-full h-64 mb-4">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain"
        />
      </div>
      <p className="font-semibold text-lg mb-2">${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}
