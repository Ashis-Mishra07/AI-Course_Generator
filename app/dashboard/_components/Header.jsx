import { UserButton } from '@clerk/nextjs'
import { User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between items-center p-5 shadow-sm'>
      <Link href={'/dashboard'}>
        <Image src={'/log.svg'} width={60} height={60} alt="Logo" />
      </Link>

      <div className="flex items-center gap-4">
        {/* Visit Profile Button */}
        <Link href="/dashboard/profile">
          <div className="inline-flex items-center gap-2 rounded-md border border-primary bg-white px-4 py-2 text-sm font-medium text-primary hover:bg-gray-50 transition-colors cursor-pointer">
            <User className="h-4 w-4" />
            Manage Account
          </div>
        </Link>

        {/* User Button */}
        <UserButton />
      </div>
    </div>
  )
}

export default Header