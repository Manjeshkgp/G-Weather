import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-primary-100 dark:bg-primary-900 sticky flex w-full flex-col text-primary-600 text-sm dark:text-primary-200">
      <div className="px-3 md:px-9 py-1.5">
        <p>India</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center px-1 gap-y-3 md:px-9 py-1.5 border-t border-primary-300 dark:border-primary-500/70">
        <div className="justify-start items-center flex gap-2">
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Advertising</Link>
          <Link href={"#"}>Business</Link>
          <Link href={"#"}>How Search works</Link>
        </div>
        <div className="justify-start items-center flex gap-2">
          <Link href={"#"}>Privacy</Link>
          <Link href={"#"}>Terms</Link>
          <Link href={"#"}>Settings</Link>
        </div>
      </div>
    </footer>
  );
}
