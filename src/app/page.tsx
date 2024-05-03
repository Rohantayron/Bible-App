import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

async function getData() {
  const res = await fetch(
    "https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-asv/books/john/chapters/3/verses/16.json"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="flex overflow-y-hidden min-h-screen flex-col ">
      <Hero nmr={data.verse} text={data.text} />
    </main>
  );
}
