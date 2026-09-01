"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { MenuIcon, SearchIcon, CartIcon } from "@/components/Icons";
import { products } from "@/lib/products";

export default function Catalog() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      canvas!.width = canvas!.offsetWidth;
      canvas!.height = canvas!.offsetHeight;
      drawSand();
    }

    function drawSand() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      ctx!.fillStyle = "#c2a878";
      for (let i = 0; i < 4000; i++) {
        const x = Math.random() * canvas!.width;
        const y = Math.random() * canvas!.height;
        const r = Math.random() * 1.2 + 0.3;
        ctx!.beginPath();
        ctx!.arc(x, y, r, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    let isDragging = false;

    function clearAt(x: number, y: number) {
      ctx!.save();
      ctx!.globalCompositeOperation = "destination-out";
      const gradient = ctx!.createRadialGradient(x, y, 0, x, y, 45);
      gradient.addColorStop(0, "rgba(0,0,0,1)");
      gradient.addColorStop(1, "rgba(0,0,0,0)");
      ctx!.fillStyle = gradient;
      ctx!.beginPath();
      ctx!.arc(x, y, 45, 0, Math.PI * 2);
      ctx!.fill();
      ctx!.restore();
    }

    function handleMove(e: MouseEvent) {
      if (!isDragging) return;
      const rect = canvas!.getBoundingClientRect();
      clearAt(e.clientX - rect.left, e.clientY - rect.top);
    }

    canvas.addEventListener("mousedown", () => (isDragging = true));
    canvas.addEventListener("mouseup", () => (isDragging = false));
    canvas.addEventListener("mousemove", handleMove);
    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className="min-h-screen bg-black relative">
      <header className="relative h-40 overflow-hidden flex items-center justify-between px-14">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/desert.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex items-center gap-5">
          <MenuIcon />
          <SearchIcon />
        </div>
        <Link href="/" className="relative z-10">
          <Logo size={55} />
        </Link>
        <div className="relative z-10">
          <CartIcon />
        </div>
      </header>

      <div className="relative">
        <div className="grid grid-cols-3 gap-x-12 gap-y-20 px-20 pt-16 pb-20 max-w-5xl mx-auto relative z-0">
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

        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-10 cursor-crosshair"
        />
      </div>
    </main>
  );
}
