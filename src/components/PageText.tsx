"use client";
import React from "react";
import TextParag from "./TextParag";

export async function getChapter(params: { chapter: number; book: string }) {
  const res = await fetch(
    `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-asv/books/${params.book}/chapters/${params.chapter}.json`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function PageText({
  params,
}: {
  params: { chapter: number; book: string };
}) {
  const chapter = await getChapter({
    chapter: params.chapter,
    book: params.book,
  });

  const chaptertext = chapter.data.map(
    (verseandtext: { text: string; verseNmr: number }) => {
      return (
        <TextParag
          key={verseandtext.text}
          nmr={verseandtext.verseNmr}
          text={verseandtext.text}
        />
      );
    }
  );

  return <div>{chaptertext}</div>;
}

export default PageText;
