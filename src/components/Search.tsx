"use client";

import React, { KeyboardEventHandler, useEffect, useRef } from "react";
import { SearchIcon, MicIcon } from "./svgs";
import { IoClose, IoArrowBack } from "react-icons/io5";
import { BsClock } from "react-icons/bs";
import {
  addHistory,
  AreaI,
  deleteHistory,
  setAllData,
  setLoading,
  setMobileSearch,
  setSearchString,
  setSearchSuggestions,
  setShowSuggestions,
} from "@/store/slices/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { MainState } from "@/store/store";
import Button from "./Button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface SearchI {
  isMobile?: boolean;
  pageSearchQuery?: string;
}

export default function Search({ isMobile, pageSearchQuery }: SearchI) {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchRef = useRef<HTMLTextAreaElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { allData, searchString, searchSuggestions, showSuggestions, history } =
    useSelector((state: MainState) => state.search);

  const handleTextInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    // for very very long inputs
    e.currentTarget.style.height = "auto";
    e.currentTarget.style.height = e.currentTarget.scrollHeight + "px";
  };

  const handleSearch = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const query = e.target.value;
    dispatch(setSearchString(query));
    dispatch(setShowSuggestions(true));
  };

  const handleFocus = async (e: React.FocusEvent<HTMLTextAreaElement>) => {
    if (/Mobi|Android|iPhone/i.test(navigator.userAgent) && !isMobile) {
      dispatch(setMobileSearch(true));
      router.push("#mobile");
    } else if (searchSuggestions.length > 0 || e.target.value.length > 0) {
      dispatch(setShowSuggestions(true));
      return;
    }
    dispatch(setShowSuggestions(true));
  };

  const clearSearchQuery = () => {
    dispatch(setSearchString(""));
    dispatch(setShowSuggestions(false));
    dispatch(setSearchSuggestions([]));
    if (searchRef.current) {
      searchRef.current.focus();
    }
  };

  const focusOnSearch = () => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  };

  const searchFunction = (obj: AreaI) => {
    dispatch(setLoading(true));
    dispatch(addHistory(obj.localityId));
    router.push(
      `/search?q=${obj.localityName}&lat=${obj.latitude}&long=${obj.longitude}`
    );
    dispatch(setSearchString(obj.localityName));
    dispatch(setShowSuggestions(false));
    dispatch(setLoading(false));
  };

  const deleteSingleHistory = (
    e: React.MouseEvent<HTMLButtonElement>,
    localityId: string
  ) => {
    e.preventDefault();
    dispatch(deleteHistory(localityId));
  };

  const goBack = () => {
    dispatch(setShowSuggestions(false));
    router.back();
  };

  const handleTextareaEnter: KeyboardEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      toast.error("Please click on search suggestions");
    }
  };

  useEffect(() => {
    const outsideClickHandler = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        dispatch(setShowSuggestions(false));
      }
    };
    document.addEventListener("mousedown", outsideClickHandler);
    return () => document.removeEventListener("mousedown", outsideClickHandler);
  }, [dispatch]);

  useEffect(() => {
    const importData = async () => {
      const data = (await import("~/public/localities.json")).data;
      dispatch(setAllData(data));
    };
    importData();
  }, [dispatch]);

  useEffect(() => {
    if (pageSearchQuery !== searchString) {
      if (pageSearchQuery) dispatch(setSearchString(pageSearchQuery));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageSearchQuery, dispatch]);

  useEffect(() => {
    const basicSearchAlgo = (arr: AreaI[], searchTerm?: string) => {
      const filteredResults = arr
        .filter((item) => {
          if (!searchTerm) {
            return true;
          }
          return (
            item.localityName.toLowerCase().includes(searchTerm) ||
            item.cityName.toLowerCase().includes(searchTerm)
          );
        })
        .map((item) => {
          let relevance = 0;
          if (searchTerm) {
            if (item.localityName.toLowerCase() === searchTerm) {
              relevance += 2;
            }
            if (item.cityName.toLowerCase() === searchTerm) {
              relevance += 2;
            }
          }
          if (history.includes(item.localityId)) {
            relevance += 3;
          }
          return { ...item, relevance };
        })
        .sort((a, b) => b.relevance - a.relevance);

      return filteredResults;
    };
    const filteredResults = basicSearchAlgo(
      allData,
      searchString.toLowerCase()
    );
    dispatch(setSearchSuggestions(filteredResults.slice(0, 8)));
  }, [history, allData, searchString, dispatch]);

  return (
    <div className="relative w-full overflow-visible h-12 max-h-12">
      <div
        ref={wrapperRef}
        className={cn(
          "absolute z-10 left-[50%] -translate-x-[50%] w-[90vw] sm:w-[70vw] max-w-[730px] hover:shadow border border-primary-300 dark:border-primary-600 rounded-[24px] lg:hover:bg-primary-50 lg:dark:hover:bg-primary-600 flex flex-col items-center justify-center",
          showSuggestions &&
            searchSuggestions.length > 0 &&
            "bg-primary-50 dark:bg-primary-600",
          isMobile && "w-full rounded-none"
        )}
      >
        {isMobile ? (
          <Button variant="link" type="button" onClick={goBack}>
            <IoArrowBack className="absolute size-6 left-5 top-3 text-blue-600 dark:text-blue-400" />
          </Button>
        ) : (
          <SearchIcon className="absolute left-5 top-3 text-primary-500 dark:text-primary-300" />
        )}
        <MicIcon className="absolute size-6 right-5 top-3" />
        {searchString.length > 0 && (
          <>
            <div className="absolute w-px h-7 top-2.5 right-[3.25rem] bg-primary-300 dark:bg-primary-400" />
            <Button
              onClick={clearSearchQuery}
              className="absolute right-16 top-3"
              variant="link"
              type="button"
            >
              <IoClose className="size-6 text-primary-500 dark:text-primary-300" />
            </Button>
          </>
        )}
        <div
          onClick={focusOnSearch}
          className="w-full text-lg cursor-text leading-6 py-3 pl-[3.75rem] pr-[5.5rem]"
        >
          <textarea
            ref={searchRef}
            onInput={handleTextInput}
            onFocus={handleFocus}
            onChange={handleSearch}
            onKeyDown={handleTextareaEnter}
            value={searchString}
            rows={1}
            className="focus:outline-none font-normal -mb-1.5 resize-none w-full bg-transparent p-0 m-0 overflow-hidden min-h-5 max-h-60"
          />
        </div>
        {showSuggestions && searchSuggestions.length > 0 && (
          <>
            <div className="w-[calc(100%-2.5rem)] border-t border-primary-300 dark:border-primary-400" />
            <div className="mt-1 flex flex-col w-full pb-4">
              {searchSuggestions.slice(0, 8).map((obj) => (
                <div
                  key={obj.localityId}
                  className={cn(
                    "w-full rounded-md text-[1rem] group leading-[1.125rem] py-1.5 px-5 dark:hover:bg-primary-500 font-normal hover:bg-primary-100 flex justify-between items-center gap-4 cursor-default",
                    history.includes(obj.localityId)
                      ? "text-indigo-600 dark:text-purple-400"
                      : "text-primary-650 dark:text-primary-50"
                  )}
                >
                  <div
                    onClick={() => searchFunction(obj)}
                    className="flex justify-start items-center gap-4 w-full"
                  >
                    {history.includes(obj.localityId) ? (
                      <BsClock className="size-[0.875rem] opacity-85 text-primary-500 dark:text-primary-300" />
                    ) : (
                      <SearchIcon className="size-[0.875rem] opacity-85 text-primary-500 dark:text-primary-300" />
                    )}
                    <p>{obj.localityName}</p>
                  </div>
                  {history.includes(obj.localityId) && (
                    <Button
                      className="hover:underline text-primary-650 text-sm leading-[1.125rem] dark:text-primary-300 hover:text-blue-500 hidden group-hover:block"
                      variant="link"
                      type="button"
                      onClick={(e) => deleteSingleHistory(e, obj.localityId)}
                    >
                      Delete
                    </Button>
                  )}
                </div>
              ))}
              <div
                className={cn(
                  "flex justify-center gap-4 mt-4 w-full",
                  pageSearchQuery && "hidden"
                )}
              >
                <Button type="button" size="sm">
                  Google Search
                </Button>
                <Button type="button" size="sm">{`I'm Feeling Lucky`}</Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
