"use client";

import { cn } from "@/lib/utils";
import { setMobileSearch } from "@/store/slices/searchSlice";
import { MainState } from "@/store/store";
import { ThemeProvider } from "next-themes";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import Search from "../Search";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { BiLoaderCircle } from "react-icons/bi";

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { mobileSearch, loading } = useSelector(
    (state: MainState) => state.search
  );
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (
      window.location.hash === "#mobile" &&
      /Mobi|Android|iPhone/i.test(navigator.userAgent)
    ) {
      dispatch(setMobileSearch(true));
    } else {
      dispatch(setMobileSearch(false));
    }
  }, [params, dispatch]);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Navbar />
      {loading&&(
        <div className="fixed flex justify-center dark:bg-primary-100/20 bg-primary-800/5 items-center inset-0 z-[100] backdrop-blur">
          <BiLoaderCircle className="size-40 animate-pulse" />
        </div>
      )}
      {mobileSearch ? (
        <div
          id="mobile"
          className={cn(
            "fixed z-50 flex-col inset-0 bg-primary-100 dark:bg-primary-700"
          )}
        >
          <Search isMobile />
        </div>
      ) : (
        <main className={cn("min-h-[calc(100vh-4.05rem)]")}>{children}</main>
      )}
      <Footer />
    </ThemeProvider>
  );
}
