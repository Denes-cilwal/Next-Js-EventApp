import React from "react";
import Link from "next/link";

export default function Store() {
  return (
    <p>
      This is Store Page{" "}
      <Link href="/store/kavre palanchok">
        <a>Kavre Palanchok</a>
      </Link>{" "}
    </p>
  );
}