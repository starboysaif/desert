"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import { products } from "@/lib/products";

export default function Catalog() {
  return (
    <main className="min-h-screen bg-black relative">
      <header className="flex items-center justify-between px-10 py-6 relative z-10">
        <div className="text-2xl tracking-widest">≡</div>
        <Link href="/">
          <Logo size={44} />
        </Link>
        <div className="text-xl">🛒</div>
      </header>

      <div className="grid grid-cols-3 gap-x-12 gap-y-20 px-20 mt-16 max-w-5xl mx-auto relative z-10">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center text-center">
            <img
              src={product.image}
              alt={product.color}
              className="float-item w-full h-auto max-w-[220px]"
            />
            <p className="mt-4 text-sm tracking-wide">{product.color}</p>
            <p className="text-xs opacity-70 mt-1">{product.price} EGP</p>
          </div>
        ))}
      </div>
    </main>
  );
}
