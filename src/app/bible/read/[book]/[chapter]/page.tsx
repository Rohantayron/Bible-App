import React, { Suspense } from "react";
import TextParag from "@/components/TextParag";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PageButtons from "@/components/PageButtons";
import PageText, { getChapter } from "@/components/PageText";
import PageTextSkeleton from "@/components/PageTextSkeleton";
import BookSelect from "@/components/BookSelect";
import { getBook } from "@/lib/utils";
import { FULLBIBLE } from "@/BibleArray";

export async function generateStaticParams() {
  return FULLBIBLE.map((book) =>
    book.chapters.map((chapter) => {
      return { chapter: chapter, book: book.name };
    })
  );
}

export default async function page({
  params,
}: {
  params: { chapter: number; book: string };
}) {
  // neccesarry for generate static params to work
  const { book, chapter } = params;

  return (
    <div className="relative py-16">
      <BookSelect />
      <div className="flex flex-col justify-center  items-center">
        <h1 className="text-3xl font-bold pb-6 ">
          {params.book.charAt(0).toUpperCase() + params.book.slice(1)}{" "}
          {params.chapter}
        </h1>

        <div className="text-2xl max-w-[600px] w-full leading-relaxed ">
          <Suspense fallback={<PageTextSkeleton />}>
            <PageText params={params} />
          </Suspense>
        </div>
      </div>
      <PageButtons />
    </div>
  );
}
