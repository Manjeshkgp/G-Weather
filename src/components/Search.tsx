"use client";

import React from "react";
import { SearchIcon, MicIcon } from "./svgs";

export default function Search() {
  return (
    <form className="relative w-[90vw] max-w-[730px]">
      <SearchIcon className="absolute left-5 top-3.5 text-primary-500 dark:text-primary-300" />
      <MicIcon className="absolute size-6 right-5 top-3.5" />
      <div className="w-full text-lg leading-6 py-3 border border-primary-300 dark:border-primary-600 rounded-[30px] lg:hover:bg-primary-50 lg:dark:hover:bg-primary-900/80 hover:shadow-sm px-[3.75rem]">
        <textarea
          onInput={(e) => { // for very very long inputs
            e.currentTarget.style.height = "auto";
            e.currentTarget.style.height = e.currentTarget.scrollHeight + "px";
          }}
          rows={1}
          className="focus:outline-none -mb-1.5 resize-none w-full bg-transparent p-0 m-0 overflow-hidden min-h-5 max-h-60"
        />
      </div>
    </form>
  );
}
