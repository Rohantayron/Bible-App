"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function NavbarSearch() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [input, setInput] = useState("");

  function updateParams() {
    if (pathname === "/bible/search") {
      // https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#using-the-native-history-api
      // client side navigation for when we're in bible/search so that we dont re-trigger navigation events on search param updates
      const params = new URLSearchParams(searchParams.toString());
      params.set("value", input);
      window.history.pushState(null, "", `?${params.toString()}`);
      return;
    }

    //for non bible/search navigations, just put the data of the search input onto the url as params
    router.push("/bible/search?value=" + input);
  }

  return (
    <form
      className="max-w-[750px] w-full"
      onSubmit={(e) => {
        //e.preventdefault needed so that form doesnt reload whole page, readup on this
        e.preventDefault(), updateParams();
      }}
    >
      <Input
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search..."
        className=" focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
      />
    </form>
  );
}

export default NavbarSearch;
