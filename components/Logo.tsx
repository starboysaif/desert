import Image from "next/image";

export default function Logo({ size = 60 }: { size?: number }) {
  return (
    <div
      style={{ width: size, height: size, position: "relative" }}
      className="tumbleweed-roll"
    >
      <Image
        src="/logo.png"
        alt="Desert logo"
        fill
        style={{ objectFit: "contain" }}
        priority
      />
    </div>
  );
}
