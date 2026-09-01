"use client";

import Image from "next/image";

export default function Logo({ size = 220 }: { size?: number }) {
  return (
    <div
      className="scorpion-3d-scene"
      style={{ width: size, height: size * 0.81 }}
    >
      <div className="scorpion-3d-card">
        <div className="scorpion-face scorpion-front">
          <Image
            src="/logo.png"
            alt="Desert logo"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
          <div className="scorpion-shine" />
        </div>
        <div className="scorpion-face scorpion-back">
          <Image
            src="/logo.png"
            alt=""
            fill
            style={{ objectFit: "contain" }}
          />
          <div className="scorpion-shine" />
        </div>
        <div className="scorpion-edge scorpion-edge-left" />
        <div className="scorpion-edge scorpion-edge-right" />
      </div>
    </div>
  );
}
