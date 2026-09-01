"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Oswald } from "next/font/google";
import Logo from "@/components/Logo";
import { InstagramIcon, TikTokIcon } from "@/components/Icons";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Home() {
  const [loading, setLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.log("Autoplay blocked:", err);
      });
    }
  }, [loading]);

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
    <main className="min-h-screen relative flex flex-col items-center justify-center gap-10 py-10 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-screen h-screen object-cover -z-10"
      >
        <source src="/desert.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col items-center gap-14">
        <Logo size={140} />
        <Link
          href="/catalog"
          className={`${oswald.className} text-white text-7xl md:text-9xl uppercase tracking-widest hover:opacity-70 transition`}
        >
          Enter
        </Link>
        <div className="flex flex-col items-center gap-3 mt-16">
          <div className="flex gap-4">
            <span className="border border-white w-10 h-10 flex items-center justify-center">
              <InstagramIcon />
            </span>
            <span className="border border-white w-10 h-10 flex items-center justify-center">
              <TikTokIcon />
            </span>
          </div>
          <span className="text-white/60 text-xs uppercase tracking-widest">
            Designed By Said
          </span>
        </div>
      </div>
    </main>
  );
}
