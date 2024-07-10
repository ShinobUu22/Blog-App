import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

const AuthLinks = () => {
  return (
    <div className=' h-full flex flex-col items-center gap-8'>
      <SignedOut>
        <Link href="/sign-in">Login</Link>
      </SignedOut>
      <SignedIn>
        <Link href="/write" >Write</Link>
        <div className=" rounded-3xl h-fit w-fit flex items-center lg:hidden md:hidden mt-8">
        <UserButton />
        </div>
      </SignedIn>
    </div>
  );
}

export default AuthLinks;
