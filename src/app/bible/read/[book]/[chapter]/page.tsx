import React from "react";
import TextParag from "@/components/TextParag";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PageButtons from "@/components/PageButtons";

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
      return (
        <TextParag
          key={verseandtext.text}
          nmr={verseandtext.verse}
          text={verseandtext.text}
        />
      );
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

      <div className="w-[90vw] flex sticky bottom-[35%] z-1 justify-between max-w-[1400px]  mx-auto">
        <PageButtons />
      </div>
    </div>
  );
}
