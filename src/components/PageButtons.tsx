"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import { FULLBIBLE } from "../BibleArray";
import { Button } from "./ui/button";
import Link from "next/link";

function PageButtons() {
  const params = useParams<{ book: string; chapter: string }>();
  const router = useRouter();

  //code for decreasing
  function ButtonDecrementLink({ children }: { children: ReactNode }) {
    if (parseInt(params.chapter) <= 1) {
      return (
        <Link
          className=" p-6 rounded-full   left-32 top-1/4 absolute border text-xl"
          href={``}
        >
          {children}
        </Link>
      );
    }

    return (
      <Link
        className=" p-6 rounded-full   left-32 top-1/4 absolute border text-xl"
        href={`/bible/read/${params.book}/${parseInt(params.chapter) - 1}`}
      >
        {children}
      </Link>
    );
  }

  function getBookFromStaticArray() {
    return FULLBIBLE.find((obj) => obj.name.toLowerCase() === params.book);
  }

  //code for increasing
  function ButtonIncrementLink({ children }: { children: ReactNode }) {
    if (
      parseInt(params.chapter) === getBookFromStaticArray()?.chapters.length
    ) {
      return (
        <Link
          className=" p-6 rounded-full   right-32 top-1/4 absolute border text-xl"
          href={``}
        >
          {children}
        </Link>
      );
    }

    return (
      <Link
        className=" p-6 rounded-full   right-32 top-1/4 absolute border text-xl"
        href={`/bible/read/${params.book}/${parseInt(params.chapter) + 1}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <>
      <ButtonDecrementLink>
        <ChevronLeft />
      </ButtonDecrementLink>
      <ButtonIncrementLink>
        {" "}
        <ChevronRight />
      </ButtonIncrementLink>
    </>
  );
}

export default PageButtons;
