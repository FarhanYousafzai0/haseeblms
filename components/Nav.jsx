import React from 'react'
import { ShimmerButton } from './magicui/shimmer-button'
import { navitems } from '@/lib/data'
import { SparklesText } from './magicui/sparkles-text'
import Image from 'next/image'

const Nav = () => {
  return (
    <div className='flex items-center overflow-hidden relative justify-between w-[95%] mx-auto p-2  rounded-md'>



<div>
<Image width={50} height={50} src="/Logo.svg" alt=' ' />


</div>


<div className='md:flex items-center gap-3 hidden '>
  {navitems.map((item, i) => (
    <div key={i} className='bg-white shadow-sm cursor-pointer hover:scale-103 transition  py-2 px-6 rounded-full '>
      {item.name}
    </div>
  ))}
</div>

<div><ShimmerButton className="py-2">Login</ShimmerButton></div>

    </div>
  )
}

export default Nav