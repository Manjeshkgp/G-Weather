import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import Link from 'next/link'
import { GoogleGridDotsIcon } from './svgs'
import { HiBeaker } from "react-icons/hi2";

export default function Navbar() {
  return (
    <header className='w-full justify-between flex items-center p-3 2xl:p-5 fixed top-0 bg-white dark:bg-primary-700'>
        <div className='flex justify-start items-center gap-4'>
            <Link href={"#"} className='text-primary-600 dark:text-primary-100 hover:text-primary-700 dark:hover:text-primary-50 hover:underline text-sm md:hidden'><HiBeaker size={26}/></Link>
            <Link href={"#"} className='text-primary-600 dark:text-primary-100 hover:text-primary-700 dark:hover:text-primary-50 hover:underline text-sm md:hidden uppercase'>All</Link>
            <Link href={"#"} className='text-primary-600 dark:text-primary-100 hover:text-primary-700 dark:hover:text-primary-50 hover:underline text-sm md:hidden uppercase'>Images</Link>
        </div>
        <div className='flex justify-start items-center gap-4'>
            <Link href={"#"} className='text-primary-600 dark:text-primary-100 hover:text-primary-700 dark:hover:text-primary-50 hover:underline text-sm hidden md:block'>Gmail</Link>
            <Link href={"#"} className='text-primary-600 dark:text-primary-100 hover:text-primary-700 dark:hover:text-primary-50 hover:underline text-sm hidden md:block'>Images</Link>
            <GoogleGridDotsIcon className='text-primary-600 dark:text-primary-100 hover:text-primary-700 dark:hover:text-primary-50 size-4 2xl:size-5 lg:mx-3 2xl:mx-5'/>
            <ThemeSwitcher/>
        </div>
    </header>
  )
}
