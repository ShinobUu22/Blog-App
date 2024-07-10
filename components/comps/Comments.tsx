import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import RecentBlog from "../BlogComps/RecentBlog";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className="flex w-full">
        <div className="lg:flex-5 min-lg:flex w-full">
      <h1 className="text-xl font-[500] my-4">Comments</h1>
      {status === "authenticated" ? (
        <div className=" lg:w-4/5 max-md:w-full flex items-center justify-between mb-5">
          <div className="w-4/5">
            <textarea className="w-full border" />
          </div>
          <div className="">
            <Button className="border">Post</Button>
          </div>
        </div>
      ) : (
        <Link href="/login">Log in to write a comment</Link>
      )}
      <div className="mt-12">
        <div className="mb-">
          <div className="flex gap-5 mb-5 items-center">
            <Image
              src="/Images/Coding.jpg"
              alt=""
              width={50}
              height={50}
              className="rounded-full"
              objectFit="cover"
            />
            <div className="gap-5">
              <span className="font-[500]">Jon Doe</span><br />
              <span className="text-md">date</span>
            </div>
          </div>
          <p className="text-lg font-[300]">
       
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            voluptatibus nulla perferendis id et, dolorem, repudiandae sit optio
            ipsa amet fugit ipsam, beatae facere sint quam velit at fugiat
            tempore.
          </p>
        </div>
      </div>
      </div>
      <div className="lg:flex-2 min-lg:hidden">
        <RecentBlog/>
      </div>
    </div>
  );
};

export default Comments;
