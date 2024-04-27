import React, { Suspense } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";
import NavbarSearch from "./NavbarSearch";

function Navbar() {
  return (
    <div className="flex border-b sticky top-0 left-0  bg-background justify-items-center px-24 z-10  py-4  items-center gap-2 ">
      <Link href={"/"} className="font-bold mr-auto flex-1 text-lg">
        BibleApp
      </Link>

      {/* <Suspense fallback={<NavbarSearchFallback />}>
        <NavbarSearch />
      </Suspense> */}

      <Link href={"bible/read/genesis/1"}>
        <Button className="ml-auto ">Read the Bible</Button>
      </Link>
    </div>
  );
}

function NavbarSearchFallback() {
  return (
    <Input
      placeholder="Search..."
      className="max-w-[750px] focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
    />
  );
}

export default Navbar;
