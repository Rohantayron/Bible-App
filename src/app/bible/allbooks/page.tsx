import React from "react";
import { FULLBIBLE } from "@/BibleArray";

async function getAllBooks() {
  const res = await Promise.all(
    FULLBIBLE.map((item, index) =>
      fetch(
        `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-asv/books/genesis.json`
      ).then((res) => {
        console.log(res);
        return res.json();
      })
    )
  );
  return res;
}

export async function page() {
  const a = await getAllBooks();
  console.log(a);
  return <div>page</div>;
}

export default page;
