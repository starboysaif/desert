"use client";

import { useState } from "react";
import Link from "next/link";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

export default function EnterButton() {
  const [pressed, setPressed] = useState(false);

  return (
    <Link
      href="/catalog"
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      className={`${bebas.className} enter-btn ${pressed ? "pressed" : ""}`}
    >
      ENTER
    </Link>
  );
}
