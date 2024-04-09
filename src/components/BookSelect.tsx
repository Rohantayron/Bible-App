"use client";
import React from "react";
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
  console.log(OLDTESTAMENT);
  const books = OLDTESTAMENT.map((book) => {
    return <CommandItem>{book.name}</CommandItem>;
  });
  const books2 = NEWTESTAMENT.map((book) => {
    return <CommandItem>{book.name}</CommandItem>;
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
            <CommandGroup heading="New Testament">
              <link></link>
              {books2}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default BookSelect;
