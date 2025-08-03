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

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

// Perbaikan utama: Gunakan tipe yang sesuai dengan Next.js App Router
type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetailPage(props: PageProps) {
  // Ambil params sebagai Promise dan tunggu penyelesaiannya
  const params = await props.params;
  const id = params.id;

  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  const product: Product = await res.json();

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <div className="relative w-full h-64 mb-4">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />
      </div>
      <p className="text-lg font-semibold text-blue-600 mb-2">
        ${product.price}
      </p>
      <p className="text-gray-700">{product.description}</p>
    </div>
  );
}
