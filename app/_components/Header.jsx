"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import { ExternalLink } from 'lucide-react';

function Header() {
  const path = usePathname();

  useEffect(() => {
    // console.log(path)
  }, [path])

  return (
    <div className='flex justify-between p-4 shadow-sm'>
      <Link href={'/dashboard'}>
        <Image src={'/logo.svg'} width={150} height={100} alt="Logo" />
      </Link>

      {/* Link styled like the previous <a> tag */}
      <Link href="/dashboard/questions" >
        <div className="inline-block rounded border bg-primary px-10 py-3 text-sm font-medium text-white hover:bg-[#620AC9] cursor-pointer">
          <div className='flex items-center justify-center gap-2'>
            <ExternalLink /> Learn from Handpicked Courses
          </div>
        </div>
      </Link>

      {/* Another Link component for dashboard/questions */}
      {/* <Link href="/dashboard/questions" passHref>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
          ${path === '/dashboard/questions' && 'text-primary font-bold'}`}>
          LEARN CONCEPTS
        </li>
      </Link> */}
    </div>
  )
}

export default Header;
