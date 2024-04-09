import React from "react";

import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import BookSelect from "@/components/BookSelect";

export default async function ComboboxDemo() {
  return <BookSelect />;
}
