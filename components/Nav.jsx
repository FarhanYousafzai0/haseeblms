import React from 'react'

import { ShimmerButton } from './magicui/shimmer-button'

import { navitems } from '@/lib/data'

import { SparklesText } from './magicui/sparkles-text'

import Image from 'next/image'

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

import Link from 'next/link';

const Nav = () => {

  return (

    <div className='flex items-center overflow-hidden relative justify-between w-[95%] mx-auto p-2  rounded-md'>

      <div>

        <Image width={50} height={50} src="/Logo1.svg" alt=' ' />

      </div>

      <SignedOut>

        <div className='md:flex items-center gap-3 hidden '>

          {navitems

            .filter(item => item.name !== "Courses")

            .map((item, i) => (

            <Link key={i} href={item.to} className='bg-white shadow-sm cursor-pointer hover:scale-103 transition py-2 px-6 rounded-full '>

              {item.name}

            </Link>

          ))}

        </div>

      </SignedOut>

      <SignedIn>

        <div className='md:flex items-center gap-3 hidden '>

          {navitems.map((item, i) => (

            <Link key={i} href={item.to} className='bg-white shadow-sm cursor-pointer hover:scale-103 transition py-2 px-6 rounded-full '>

              {item.name}

            </Link>

          ))}

        </div>

      </SignedIn>

      <div>

        <SignedOut>

          <SignInButton mode="modal">

            <ShimmerButton className="py-2">Login</ShimmerButton>

          </SignInButton>

        </SignedOut>

        <SignedIn>

          <UserButton />

        </SignedIn>

      </div>

    </div>

  )

}

export default Nav