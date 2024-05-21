import React from "react";

function PageTextSkeleton() {
  const skeletonArray = Array(40).fill("");

  return (
    <div className="flex flex-col w-full gap-4 mt-4">
      {skeletonArray.map((item, index) => {
        return (
          <div
            key={index}
            className="animate-pulse bg-muted-foreground/50 w-full h-4  "
          ></div>
        );
      })}
    </div>
  );
}

export default PageTextSkeleton;
