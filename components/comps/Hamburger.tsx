"use client";
import { items } from "@/constants/NavL";
import Link from "next/link";
import React, { useRef } from "react";
import { IoMenuSharp } from "react-icons/io5";

import AuthLinks from "./AuthLinks";

const Hamburger = () => {

  const dialogRef = useRef<HTMLDialogElement>(null);
  return (
    <div className="" >
      <div className="hidden max-md:block cursor-pointer">
        <IoMenuSharp
          size={40}
          onClick={() => {
            if (dialogRef) dialogRef.current?.showModal();
          }}
        />
      </div>
      <dialog onClick={()=>dialogRef.current?.close()}
        ref={dialogRef}
        className=" dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-3xl shadow-xl  scale-95 w-screen h-screen "
      >
        <button
          onClick={() => {
            dialogRef.current?.close();
          }}
          className="right-4 top-2 absolute text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
        >
          &times;
        </button>
        <div className="flex flex-col h-96 items-center text-xl space-y-4 mt-8 gap-20">
          {items.map((i) => (
            <Link href={`/${i.name}`} key={i.name} className="hover:text-blue-500 dark:hover:text-blue-400">
              {i.name}
            </Link>
          ))}
          <AuthLinks/>
          
        </div>
      </dialog>
    </div>
  );
};

export default Hamburger;
