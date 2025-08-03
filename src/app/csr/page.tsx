'use client';

import { useEffect, useState } from "react";
import Head from "next/head";
import ProductList from "@/components/ProductList";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function CSRPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Client-Side Rendering (CSR) - FakeStore</title>
        <meta name="description" content="Halaman ini menggunakan CSR di Next.js 15 untuk menampilkan produk dari FakeStore API." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <section>
        <h1 className="text-2xl font-bold mb-4">Client-Side Rendering (CSR)</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ProductList products={products} />
        )}
      </section>
    </>
  );
}
