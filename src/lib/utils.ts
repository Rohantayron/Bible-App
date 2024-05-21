import { FULLBIBLE } from "@/BibleArray";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getBook(book: string) {
  return FULLBIBLE.find((item) => item.name === book);
}
