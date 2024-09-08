"use client"

import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { useUser } from '@clerk/nextjs';
import { and, eq } from 'drizzle-orm';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import CourseBasicInfo from '../_components/CourseBasicInfo';
import { MdContentCopy } from "react-icons/md";

function FinishScreen({ params }) {
    const { user } = useUser();
    const [course, setCourse] = useState([]);
    const [copied, setCopied] = useState(false);  // State to track copy action
    const router = useRouter();

    useEffect(() => {
        params && GetCourse();
    }, [params, user]);

    const GetCourse = async () => {
        const result = await db.select().from(CourseList)
            .where(and(eq(CourseList.courseId, params?.courseId)),
                eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress))

        setCourse(result[0]);
        console.log(result);
    }

    // Function to handle the copy action
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(process.env.NEXT_PUBLIC_HOST_NAME + '/course/view/' + course?.courseId);
            setCopied(true);  // Set copied to true when successfully copied

            // Reset the state after 2 seconds
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (error) {
            console.error("Failed to copy text:", error);
        }
    };

    return (
        <div className='px-10 md:px-20 lg:px-44 my-7'>
            <h2 className='text-center font-bold text-2xl my-3 text-primary'>Congrats! Your Course is Ready</h2>

            <CourseBasicInfo course={course} refreshData={() => console.log()} />

            <h2 className='mt-3'>Course URL:</h2>
            <h2 className='text-center text-gray-400 border p-2 rounded flex gap-5 items-center'>
                {process.env.NEXT_PUBLIC_HOST_NAME}/course/view/{course?.courseId}
                <MdContentCopy
                    className={`h-5 w-5 cursor-pointer ${copied ? 'text-green-500' : 'text-primary'}`}
                    onClick={handleCopy}
                />
            </h2>
        </div>
    )
}

export default FinishScreen;
