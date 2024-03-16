/* eslint-disable react/no-unescaped-entities */
import Verse from "@/components/Verse";
import React from "react";

function page() {
  return (
    <div className="flex items-center flex-col justify-center">
      <div>
        <h1 className="text-foreground-primary pt-20 pb-12 text-7xl justify-normal  font-semibold">
          Search Bible for: "Thing"
        </h1>{" "}
        <div className=" flex  rounded-md">
          <div className="p-2 flex flex-col">
            <button className="text-2xl font-semibold p-4 hover:bg-muted rounded-md">
              New Testament
            </button>
            <button className="text-2xl font-semibold p-4 hover:bg-muted rounded-md">
              Old Testament
            </button>
          </div>

          <div className="flex border-l p-6  flex-col gap-4">
            {Array(10)
              .fill("")
              .map((item, i) => {
                return <Verse key={i} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;