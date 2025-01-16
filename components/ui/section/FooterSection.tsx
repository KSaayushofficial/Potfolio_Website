import Image from 'next/image'
import React from 'react'

export function Footer() {
  return (
    <div className='max-w-[1200px] w-[90%] mx-auto py-[20px] flex flex-wrap gap-[10px] justify-between items-center border-t border-[#1d1d1d]'>
        <a href="/">
                  <Image
                    src=""
                    width={120}
                    height={80}
                    className="max-h-[80px] h-full  object-contain object-center"
                    alt="logo"
                  />
                </a>
                <span className='text-[0.9rem] font-[500] text-[#9e9e9e]'>Going To Internet - Copyright</span>
    </div>
  )
}

