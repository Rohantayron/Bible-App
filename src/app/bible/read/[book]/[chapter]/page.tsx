import React from "react";
import TextParag from "@/components/TextParag";
import { ChevronLeft, ChevronRight } from "lucide-react";

async function getChapter(params: { chapter: number; book: string }) {
  const res = await fetch(
    `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-asv/books/${params.book}/chapters/${params.chapter}.json`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function page({
  params,
}: {
  params: { chapter: number; book: string };
}) {
  const chapter = await getChapter({
    chapter: params.chapter,
    book: params.book,
  });
  console.log(chapter);
  const chaptertext = chapter.data.map(
    (verseandtext: { text: string; verse: number }) => {
      console.log(verseandtext);
      return <TextParag nmr={verseandtext.verse} text={verseandtext.text} />;
    }
  );
  return (
    <div className="relative">
      <div className="flex flex-col justify-center py-16 items-center">
        <h1 className="text-3xl font-bold py-6 ">Chapter Title</h1>

        <div className="text-2xl max-w-[600px] leading-relaxed ">
          {chaptertext}
        </div>
      </div>

      <button className=" p-6 rounded-full   left-32 top-1/4 absolute border text-xl">
        {" "}
        <ChevronLeft />
      </button>
      <button className=" p-6 rounded-full  right-32 top-1/4 absolute border text-xl">
        {" "}
        <ChevronRight />
      </button>
    </div>
  );
}
