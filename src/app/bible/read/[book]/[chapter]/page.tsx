import React, { Suspense } from "react";
import TextParag from "@/components/TextParag";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PageButtons from "@/components/PageButtons";
import PageText from "@/components/PageText";
import PageTextSkeleton from "@/components/PageTextSkeleton";

export default async function page({
  params,
}: {
  params: { chapter: number; book: string };
}) {
  return (
    <div className="relative">
      <div className="flex flex-col justify-center py-16 items-center">
        <h1 className="text-3xl font-bold py-6 ">Chapter Title</h1>

        <div className="text-2xl max-w-[600px] w-full leading-relaxed ">
          <Suspense fallback={<PageTextSkeleton />}>
            <PageText params={params} />
          </Suspense>
        </div>
      </div>

      <div className="w-[90vw] flex sticky bottom-[35%] z-1 justify-between max-w-[1400px]  mx-auto">
        <PageButtons />
      </div>
    </div>
  );
}
