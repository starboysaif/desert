"use client";

const LAYER_COUNT = 18;
const DEPTH = 34;

export default function Logo({ size = 220 }: { size?: number }) {
  const height = size * 0.81;

  const layers = Array.from({ length: LAYER_COUNT }, (_, i) => {
    const z = (i / (LAYER_COUNT - 1)) * DEPTH - DEPTH / 2;
    const brightness = 1 - (i / (LAYER_COUNT - 1)) * 0.6;
    return { z, brightness, key: i };
  });

  return (
    <div className="scorpion-3d-scene" style={{ width: size, height }}>
      <div className="scorpion-3d-stack">
        {layers.map(({ z, brightness, key }) => (
          <div
            key={key}
            className="scorpion-layer"
            style={{
              transform: `translateZ(${z}px)`,
              filter: `brightness(${brightness})`,
            }}
          />
        ))}
        <div className="scorpion-shine" />
      </div>
    </div>
  );
}
