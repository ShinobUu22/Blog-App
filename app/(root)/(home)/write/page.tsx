// page.tsx

"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { FaUpload, FaVideo } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import dynamic from 'next/dynamic';
import "react-quill/dist/quill.bubble.css";

// Dynamically import ReactQuill with no SSR
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const WritePage = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const [value, setValue] = useState("");
  
  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        placeholder="Title"
        className="w-4/5 rounded-xl text-center p-6 font-semibold text-[64px]"
      />
      <div className="h-fit flex flex-col gap-8 mt-8 w-full">
        <div className="flex gap-8">
          <IoAdd
            size={25}
            onClick={() => setOpen(!open)}
            className="cursor-pointer"
          />

          {open && (
            <div className="flex gap-8">
              <CiImageOn size={25} className="cursor-pointer"/>
              <FaUpload size={25} className="cursor-pointer"/>
              <FaVideo size={25} className="cursor-pointer"/>
            </div>
          )}
        </div>
        <span className="text-2xl font-[500]">Description:</span>
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          className="quill text-xl"
        />
      </div>
      <Button className="bg-green-400 my-10">Publish</Button>
    </div>
  );
};

export default WritePage;
