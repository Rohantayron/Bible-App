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
      <Link href={`/bible/read/${book.name.toLowerCase()}/1`}>
        <CommandItem>{book.name}</CommandItem>
      </Link>
    );
  });
  const books2 = NEWTESTAMENT.map((book) => {
    return (
      <Link href={`/bible/read/${book.name.toLowerCase()}/1`}>
        <CommandItem>{book.name}</CommandItem>
      </Link>
    );
  });
  return (
    <Popover>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Old Testament">{books}</CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="New Testament">{books2}</CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default BookSelect;
