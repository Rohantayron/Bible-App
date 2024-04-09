/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <>
      {/* component */}
      <div className="w-full min-h-screen z-20 flex items-center justify-center bg-muted">
        <div className="md:w-2/3 w-full px-4 text-foreground flex flex-col">
          <div className="w-full text-7xl font-bold">
            <h1 className="w-full md:w-2/3">
              BibleApp provides the best online bible, everyday.
            </h1>
          </div>
          <div className="flex mt-8 flex-col md:flex-row md:justify-between">
            <p className="w-full md:w-2/3 text-muted-foreground">
              made by rohantayron and kdiffin bro we're so goated at this
            </p>
          </div>
          <div className="flex flex-col">
            <div className="flex mt-24 mb-12 flex-row justify-between">
              <div className="font-bold text-xl font-sans">BibleApp</div>
              <Link
                href={"/home"}
                className="hidden md:block cursor-pointer text-muted-foreground hover:text-foreground uppercase"
              >
                Home
              </Link>
              <Link
                href={"/bible/read/genesis/1"}
                className="hidden md:block cursor-pointer text-muted-foreground hover:text-foreground uppercase"
              >
                Read Genesis
              </Link>
              <Link
                href={"/bible/read/john/1"}
                className="hidden md:block cursor-pointer text-muted-foreground hover:text-foreground uppercase"
              >
                Read a gospel
              </Link>
              <Link
                href={"/bible/read/psalms/1"}
                className="hidden md:block cursor-pointer text-muted-foreground hover:text-foreground uppercase"
              >
                Read a psalm
              </Link>
            </div>
            <hr className="border-gray-600" />
            <p className="w-full text-center my-12 text-muted-foreground">
              Copyright © kdiffin & Rohantayron
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
