import React from "react";
import Link from "next/link";
import { items } from "@/constants/NavL";
import { ModeToggle } from "./Toggle";
import Hamburger from "./Hamburger";
import AuthLinks from "./AuthLinks";
import { UserButton } from "@clerk/nextjs";




const Navbar = () => {
  return (
    <div className="flex justify-center items-center mt-5 lg:h-32 md:h-20 sm:h-16 ">
      <div className="w-4/5 h-16 flex justify-between items-center mx-5">
        <Link href="/" className="flex items-center text-2xl ml-3">
          <h1 className="font-extrabold">Safin</h1>
          <span>Blog</span>
        </Link>
        <div className="flex gap-3">
          <ModeToggle/>
          <Hamburger/>
        <div className="max-md:hidden flex items-center gap-8">
        <div className=" rounded-3xl h-fit w-fit flex items-center">
          <UserButton/>
       </div>
          <Link href='/Blog' className="font-extrabold">Blog</Link>
          {items.map((i) => (
            <Link href={`/${i.name}`} key={i.name}>{i.name}</Link>
          ))}
          <AuthLinks/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
