"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import { MenuIcon, SearchIcon, CartIcon } from "@/components/Icons";
import { products } from "@/lib/products";

export default function Catalog() {
  return (
    <main className="min-h-screen bg-black relative">
      <header className="flex items-center justify-between px-14 py-14 relative z-10">
        <div className="flex items-center gap-5">
          <MenuIcon />
          <SearchIcon />
        </div>
        <Link href="/">
          <Logo size={60} />
        </Link>
        <CartIcon />
      </header>

      <div className="grid grid-cols-3 gap-x-12 gap-y-20 px-20 mt-10 max-w-5xl mx-auto relative z-10">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center text-center">
            <img
              src={product.image}
              alt={product.name}
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
