"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Oswald } from "next/font/google";
import Logo from "@/components/Logo";
import { InstagramIcon } from "@/components/Icons";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["700"],
});

function TikTokIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="white"
      className="w-5 h-5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.6 5.82c-.9-.98-1.4-2.26-1.4-3.57h-3.06v14.28c0 1.6-1.3 2.9-2.9 2.9a2.9 2.9 0 0 1-2.9-2.9 2.9 2.9 0 0 1 2.9-2.9c.3 0 .58.05.85.13V10.6a6.2 6.2 0 0 0-.85-.06 5.96 5.96 0 0 0-5.96 5.96A5.96 5.96 0 0 0 9.24 22.46a5.96 5.96 0 0 0 5.96-5.96V9.07a8.2 8.2 0 0 0 4.78 1.53V7.55c-1.16 0-2.24-.37-3.38-1.73z" />
    </svg>
  );
}

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.log("Autoplay blocked:", err);
      });
    }
  }, []);

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

      <div className="relative z-10 flex flex-col items-center gap-16">
        <Logo size={220} />
        <Link
          href="/catalog"
          className={`${oswald.className} italic text-white text-8xl md:text-[11rem] uppercase tracking-widest hover:opacity-70 transition`}
        >
          Enter
        </Link>
        <div className="flex flex-col items-center gap-3 mt-24">
          <div className="flex gap-4">
            <span className="border border-white w-10 h-10 flex items-center justify-center">
              <InstagramIcon />
            </span>
            <span className="border border-white w-10 h-10 flex items-center justify-center">
              <TikTokIcon />
            </span>
          </div>
          <span className="text-white text-xs uppercase tracking-widest">
            Designed By Saif
          </span>
        </div>
      </div>
    </main>
  );
}
