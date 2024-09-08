"use client"
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { FaHome } from "react-icons/fa";
import { GiStack } from "react-icons/gi";
import { FaShieldAlt } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Progress } from "@/components/ui/progress"
import { UserCourseListContext } from '@/app/_context/UserCourseListContext';



function SideBar() {
    const { userCourseList, setUserCourseList }=useContext(UserCourseListContext);

    const Menu=[
        {
            id:1,
            name:'Home',
            icon: <FaHome />,
            path:'/dashboard'
        },
        {
            id: 2,
            name: 'Explore',
            icon: <GiStack />,
            path: '/dashboard/explore'
        },
        {
            id: 3,
            name: 'Upgrade',
            icon: <FaShieldAlt />,
            path: '/dashboard/upgrade'
        },
        {
            id: 4,
            name: 'Logout',
            icon: <FaPowerOff />,
            path: '/dashboard/logout'
        }
    ]

    const path=usePathname();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

  return (
    <div className='fixed h-full md:w-64  p-5 shadow-md'>
          <Image src={'/logo.svg'} width={160} height={100} priority />
        <h2 className='my-5'></h2>



        <ul>
            {Menu.map((item,index)=>(
                <Link href={item.path} key={item.id}>
                    <div className={`flex items-center  gap-2  text-gray-600 p-3
                    cursor-pointer  hover:bg-gray-100  hover:text-black rounded-lg mb-3
                    ${item.path==path&& 'bg-gray-100 text-black'}`}>
                        <div className='text-2xl '>{item.icon}</div>
                        <h2>{item.name}</h2>
                    </div>
                </Link>
            ))}
        </ul>

          <div className='absolute bottom-10 w-[80%]'>
              <Progress value={(userCourseList?.length/100)*100} />
              <h2 className='text-sm my-2 font-semibold'>{userCourseList?.length} Out of 100  Course Created</h2>
              <h2 className='text-xs text-gray-500'>Upgrade your plan for unlimited course generation</h2>
        </div>
    </div>
  )
}

export default SideBar