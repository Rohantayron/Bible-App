"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import { FULLBIBLE } from "../BibleArray";
import { Button } from "./ui/button";
import Link from "next/link";

function PageButtons() {
  const params = useParams<{ book: string; chapter: string }>();
  const chapter = parseInt(params.chapter);
  function getBookFromStaticArray() {
    return FULLBIBLE.find((obj) => obj.name.toLowerCase() === params.book);
  }

  return (
    <div className="w-[90vw] flex sticky bottom-[35%] z-10 justify-between max-w-[1400px]  mx-auto">
      {chapter ? (
        <Link
          className=" p-6 rounded-full   left-32 top-1/4 absolute border text-xl"
          href={
            parseInt(params.chapter) <= 1
              ? ""
              : `/bible/read/${params.book}/${parseInt(params.chapter) - 1}`
          }
        >
          <ChevronLeft />
        </Link>
      ) : null}

      {chapter ? (
        <Link
          className=" p-6 rounded-full   right-32 top-1/4 absolute border text-xl"
          href={
            parseInt(params.chapter) ===
            getBookFromStaticArray()?.chapters.length
              ? ""
              : `/bible/read/${params.book}/${parseInt(params.chapter) + 1}`
          }
        >
          <ChevronRight />
        </Link>
      ) : null}
    </div>
  );
}

export default PageButtons;
