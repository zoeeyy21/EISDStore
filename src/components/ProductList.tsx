import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link
          href={`/product/${product.id}`}
          key={product.id}
          className="border p-4 rounded shadow hover:shadow-md transition"
        >
          <div className="relative w-full h-32 mb-2">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
            />
          </div>
          <h3 className="text-sm font-semibold line-clamp-2">{product.title}</h3>
          <p className="text-xs text-gray-600 mt-1">${product.price}</p>
        </Link>
      ))}
    </div>
  );
}
