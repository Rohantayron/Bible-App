import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="flex overflow-y-hidden min-h-screen flex-col ">
      <Hero />
    </main>
  );
}
