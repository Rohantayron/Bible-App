"use client";
"use client";

import { ComboboxDemo } from "@/components/Command";
import React from "react";

import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import BookSelect from "@/components/BookSelect";

async function getData() {
  const res = await fetch(
    "https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-asv/books.json"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ComboboxDemo() {
  const data = await getData();
  console.log(data);
  return <BookSelect />;
}
