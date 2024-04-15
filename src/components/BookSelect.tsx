"use client";
import React from "react";
import Link from "next/link";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

import { OLDTESTAMENT, NEWTESTAMENT } from "../BibleArray";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function BookSelect() {
  const books = OLDTESTAMENT.map((book) => {
    return (
      <Link key={book.name} href={`/bible/read/${book.name.toLowerCase()}/1`}>
        <CommandItem className="text-[18px]  data-[disabled]:opacity-100  aria-selected:bg-transparent aria-selected:text-black">
          {book.name}
        </CommandItem>
      </Link>
    );
  });
  // nigg
  const books2 = NEWTESTAMENT.map((book) => {
    return (
      <Link key={book.name} href={`/bible/read/${book.name.toLowerCase()}/1`}>
        <CommandItem className="text-[18px] data-[disabled]:opacity-100 ">
          {book.name}
        </CommandItem>
      </Link>
    );
  });
  return (
    <Popover>
      <PopoverTrigger className=" ml-[50%] border-b-2 w-16 text-xl ">
        Books
      </PopoverTrigger>
      <PopoverContent className="w-[500px] h-[500px] ">
        <Command className="">
          <CommandInput placeholder="Search..." />
          <CommandList className="max-h-full">
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup
              heading="Old Testament"
              className="[&_[cmdk-group-heading]]:text-[18px] "
            >
              {books}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup
              heading="New Testament"
              className="[&_[cmdk-group-heading]]:text-[18px]"
            >
              {books2}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default BookSelect;
