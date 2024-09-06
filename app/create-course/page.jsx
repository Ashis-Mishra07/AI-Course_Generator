"use client"
import React, { useState } from 'react'
import { RiStackFill } from "react-icons/ri";
import { HiLightBulb } from "react-icons/hi";
import { HiClipboardDocumentCheck } from "react-icons/hi2";
import { Button } from '@/components/ui/button';

function CreateCourse() {
    const StepperOptions =[
        {
            id:1,
            name:'Category',
            icon: <RiStackFill />
        },
        {
            id: 2,
            name: 'Topic & Desc',
            icon: <HiLightBulb />
        },
        {
            id: 3,
            name: 'Options',
            icon: <HiClipboardDocumentCheck />
        }
    ]

    const [activeIndex , setActiveIndex]=useState(0);
  return (
    <div>
        <div className='flex flex-col justify-center items-center mt-10 '>
            <h2 className='text-4xl text-primary font-medium'>Create Course</h2>
            <div className='flex mt-10'>
                {StepperOptions.map((item,index)=>(
                    <div className='flex items-center '>
                        <div className='flex flex-col items-center w-[50px] md:w-[100px] '>
                            <div className={`bg-gray-200 p-3 rounded-full text-white 
                                ${activeIndex >= index &&'bg-[#510AC9]'}`}>
                                {item.icon}
                            </div>
                            <h2 className='hidden md:block md:text-sm'>{item.name}</h2>
                        </div>
                        {index != StepperOptions?.length - 1 && <div className={`h-1 w-[50px] 
                            md:w-[100px]  rounded-full lg:w-w-[170px] bg-gray-300
                            ${activeIndex-1>=index&& 'bg-[#510AC9]'}`}></div>}
                        

                    </div>
                ))}
            </div>
        </div>

        <div>
            <Button onClick={()=>setActiveIndex(activeIndex+1)}>Next</Button>
        </div>
    </div>
  )
}

export default CreateCourse