'use client'

import { FiSun, FiMoon } from "react-icons/fi"
import { BiLoaderCircle } from "react-icons/bi";
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Button from "./Button";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() =>  setMounted(true), [])

  if (!mounted) return (
    <BiLoaderCircle className="size-7 md:size-6 2xl:size-8 animate-pulse" />
  )

  if (resolvedTheme === 'dark') {
    return <Button onClick={() => setTheme('light')} variant="link"><FiSun className="size-7 md:size-6 2xl:size-8 text-primary-600 dark:text-primary-100 hover:text-primary-700 dark:hover:text-primary-50" /></Button>
  }

  if (resolvedTheme === 'light') {
    return <Button onClick={() => setTheme('dark')} variant="link"><FiMoon className="size-7 md:size-6 2xl:size-8 text-primary-600 dark:text-primary-100 hover:text-primary-700 dark:hover:text-primary-50" /></Button>
  }

}