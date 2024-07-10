import Comments from "@/components/comps/Comments";
import Image from "next/image";
import React from "react";

const SinglePage = () => {
  return (
    <div className="">
      <div className="flex max-md:flex-col items-center gap-[50px]">
      <div className="min-lg:flex-1 w-5/6 h-[350px] relative">
          <Image src="/Images/Epic.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="min-lg:flex-1 px-4">
          <h1 className="max-lg:text-3xl lg:text-3xl mb-8 max-md:text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <div className="flex gap-[20px]">
            <div className="w-12 h-12 relative">
              <Image
                src="/Images/Epic.jpg"
                alt="Blog image"
                layout="fill"
                objectFit="cover"
                className="rounded-3xl"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[20px] font-[500]">jon doe</span>
              <span>date</span>
            </div>
          </div>
        </div>
        
      </div>
      <div className="flex gap-12 px-4">
        <div className="mt-16">
          <div className="text-xl font-[300] ">
            <p className="mb-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores vero molestiae minima aperiam eos nesciunt accusantium
              dolor? Praesentium quos possimus quo cum reprehenderit provident
              vel optio nam doloremque, sint aperiam!
            </p>
            <h2 className="text-2xl font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p className="mb-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores vero molestiae minima aperiam eos nesciunt accusantium
              dolor? Praesentium quos possimus quo cum reprehenderit provident
              vel optio nam doloremque, sint aperiam!
            </p>
            <p className="mb-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores vero molestiae minima aperiam eos nesciunt accusantium
              dolor? Praesentium quos possimus quo cum reprehenderit provident
              vel optio nam doloremque, sint aperiam!
            </p>
          </div>
          <div className="">
          <Comments/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
