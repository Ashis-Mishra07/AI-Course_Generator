"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import { ExternalLink } from 'lucide-react';

function Header() {
  const path = usePathname();

  useEffect(() => {
  }, [path])

  return (
    <div className='flex justify-between p-4 shadow-sm'>
      <Link href={'/dashboard'}>
        <Image src={'/logo.png'} width={190} height={100} alt="Logo" />
      </Link>

      {/* Link styled like the previous <a> tag */}
      <Link href="/dashboard/questions" >
        <div className="inline-block rounded-xl border bg-gradient-to-b
    from-primary to-neutral-600 px-10 py-3 text-sm font-medium text-white hover:bg-[#620AC9] cursor-pointer">
          <div className='flex items-center justify-center gap-2'>
            <ExternalLink  /> Learn from Handpicked Courses
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Header;
