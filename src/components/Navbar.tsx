import React, { Suspense } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";
import NavbarSearch from "./NavbarSearch";

function Navbar() {
  return (
    <div className="flex flex-row border-b sticky top-0 left-0  bg-background justify-items-center px-24 z-20  py-4  items-center gap-2 justify-around ">
      <div className="font-bold text-xl font-sans">BibleApp</div>
      <Link
        href={"/"}
        className="hidden md:block cursor-pointer text-muted-foreground hover:text-foreground uppercase"
      >
        Home
      </Link>
      <Link
        href={"/bible/read/genesis/1"}
        className="hidden md:block cursor-pointer text-muted-foreground hover:text-foreground uppercase"
      >
        Genesis
      </Link>
      <Link
        href={"/bible/read/john/1"}
        className="hidden md:block cursor-pointer text-muted-foreground hover:text-foreground uppercase"
      >
        Gospel
      </Link>
      <Link
        href={"/bible/read/psalms/1"}
        className="hidden md:block cursor-pointer text-muted-foreground hover:text-foreground uppercase"
      >
        Psalms
      </Link>
      <hr className="border-gray-600" />
      <Suspense fallback={<NavbarSearchFallback />}>
        <NavbarSearch />
      </Suspense>
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
