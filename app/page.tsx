"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center">
        <div className="loading-fade">
          <Logo size={70} />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center gap-10 py-10">
      <Logo size={70} />

      <nav className="flex flex-col items-center gap-5">
        <span className="border border-white/40 text-white/40 px-10 py-3 uppercase tracking-widest text-sm cursor-default">
          Home
        </span>
        <Link
          href="/catalog"
          className="border border-white text-white px-10 py-3 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition"
        >
          Catalog
        </Link>
        <span className="border border-white/40 text-white/40 px-10 py-3 uppercase tracking-widest text-sm cursor-default">
          Contact
        </span>
      </nav>

      <div className="flex gap-4 mt-4">
        <span className="border border-white/60 w-10 h-10 flex items-center justify-center text-xs">
          IG
        </span>
        <span className="border border-white/60 w-10 h-10 flex items-center justify-center text-xs">
          TT
        </span>
      </div>
    </main>
  );
}
