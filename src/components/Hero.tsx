/* eslint-disable react/no-unescaped-entities */
import { ChevronRight, Download, Github } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function Hero() {
  const citate = [
    "For God so loved the world, that he gave his only begotten Son, that whosoever believeth on him should not perish, but have eternal life.",
    "wgwgw",
    "vsdvsveve",
  ];
  
  return (
    <div className="grid  place-items-center   relative  pt-16 pb-8 md:pt-12 md:pb-24">
      <Image
        alt="a"
        src={"/cross.png"}
        className=" -top-0 opacity-30 py-4 absolute z-0 "
        width={700}
        height={1400}
        priority
      />

      <div className="text-center justify-center z-10 items-center flex flex-col ">
        <h1 className="text-5xl lg:text-7xl  xl:text-8xl xl:max-w-screen-lg mt-24 font-bold lg:tracking-tight xl:tracking-tighter">
          The definitive Bible app made for
          <span className="text-foreground-primary">Everyone.</span>
        </h1>
        <p className="text-lg mt-4 text-slate-600 max-w-xl">
          {citate[getRandomInt(citate.length)]}
        </p>
        <div>-John 3:16</div>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link
            href="https://github.com/rohantayron/bible-app"
            target="_blank"
            rel="noopener"
          >
            <Button
              variant={"link"}
              size={"lg"}
              className="flex gap-1 items-center justify-center"
            >
              <Github />
              Github repo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
