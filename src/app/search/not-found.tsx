import React from "react";
import { ConfusedEmojiIcon } from "@/components/svgs";
import Link from "next/link";
export default function page() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-6 pb-6">
      <div className="w-full lg:w-1/2 aspect-square max-w-md flex justify-center items-center">
        <ConfusedEmojiIcon className="w-[90%] max-h-[28rem] max-w-md" />
      </div>
      <div className="flex flex-col items-center lg:items-start gap-4">
        <p className="text-3xl lg:text-5xl text-primary-800 dark:text-primary-100 font-bold">
          Not Found
        </p>
        <p className="text-base text-primary-800 dark:text-primary-100 font-medium">{`Didn't got data from API`}</p>
        <Link href={'/'}>Go back to Home</Link>
      </div>
    </div>
  );
}
