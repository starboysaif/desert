"use client";

import Image from "next/image";

export default function Logo({ size = 220 }: { size?: number }) {
  const height = size * 0.81;

  return (
    <div
      className="scorpion-3d-scene"
      style={{ width: size, height }}
    >
      <div className="scorpion-3d-card">
        <div className="scorpion-face scorpion-front">
          <div className="scorpion-plate">
            <div className="scorpion-shine" />
            <Image
              src="/logo.png"
              alt="Desert logo"
              fill
              style={{ objectFit: "contain", padding: "14%" }}
              priority
            />
          </div>
        </div>
        <div className="scorpion-face scorpion-back">
          <div className="scorpion-plate">
            <div className="scorpion-shine" />
            <Image
              src="/logo.png"
              alt=""
              fill
              style={{ objectFit: "contain", padding: "14%" }}
            />
          </div>
        </div>
        <div className="scorpion-edge scorpion-edge-left" />
        <div className="scorpion-edge scorpion-edge-right" />
        <div className="scorpion-edge scorpion-edge-top" />
        <div className="scorpion-edge scorpion-edge-bottom" />
      </div>
    </div>
  );
}
