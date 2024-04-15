"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { FULLBIBLE } from "../BibleArray";

function PageButtons() {
  const params = useParams<{ book: string; chapter: string }>();
  const router = useRouter();

  //code for decreasing
  function buttonDecrement() {
    if (parseInt(params.chapter) <= 1) {
      return;
    }

    router.replace(
      // parseInt turns string to interger
      // add a limiter here
      `/bible/read/${params.book}/${parseInt(params.chapter) - 1}`
    );
  }

  function getBookFromStaticArray() {
    return FULLBIBLE.find((obj) => obj.name.toLowerCase() === params.book);
  }

  //code for increasing
  function buttonIncrement() {
    if (
      parseInt(params.chapter) === getBookFromStaticArray()?.chapters.length
    ) {
      return;
    }
    
    router.replace(
      `/bible/read/${params.book}/${parseInt(params.chapter) + 1}`
    );
  }

  return (
    <>
      <button
        onClick={buttonDecrement}
        className=" p-6 rounded-full   left-32 top-1/4 absolute border text-xl"
      >
        {" "}
        <ChevronLeft />
      </button>
      <button
        onClick={buttonIncrement}
        className=" p-6 rounded-full   right-32 top-1/4 absolute border text-xl"
      >
        {" "}
        <ChevronRight />
      </button>
    </>
  );
}

export default PageButtons;
