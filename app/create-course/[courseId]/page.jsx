"use client"
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { useUser } from '@clerk/nextjs';
import { and ,eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import CourseBasicInfo from './_components/CourseBasicInfo';
import CourseDetail from './_components/CourseDetail';
import ChapterList from './_components/ChapterList';
import { Button } from '@/components/ui/button';
import { GenerateChapterContent_AI } from '@/configs/AiModel';
import LoadingDialog from '../_components/LoadingDialog';

function CourseLayout({params}) {

  const {user}=useUser();
  const [course , setCourse] =useState([]);
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    params&&GetCourse();
  },[params,user]);
  const GetCourse= async()=>{
    const result=await db.select().from(CourseList)
    .where(and(eq(CourseList.courseId , params?.courseId)) ,
               eq(CourseList?.createdBy , user?.primaryEmailAddress?.emailAddress))
    
    setCourse(result[0]);
    console.log(result);
    
  }

  const GenerateChapterContent =()=>{
    setLoading(true);
    const chapters=course?.courseOutput?.course?.chapters;
    chapters.forEach(async(chapter,index)=>{
      const PROMPT='Explain the concept in Detail on Topic:'+course?.name+',Chapter:'+chapter?.name+', in JSON Format with list of array with field as title , description in detail , Code Example (Code field in <precode> format) if applicable ';
      console.log(PROMPT);

      if(index<3){
        try {
          const result=await GenerateChapterContent_AI.sendMessage(PROMPT);
          console.log(result?.response?.text());

          setLoading(false);
        } catch (error) {
          setLoading(false);
          console.log(error);
          
        }
      }
      
    })
  }

  return (
    <div className='mt-10 px-7 md:px-20 lg:px-44'>
        <h1 className='font-bold text-center text-2xl '>Course Layout</h1>

        <LoadingDialog loading={loading}/>

        <CourseBasicInfo course={course} refreshData={()=>GetCourse()}/>

        <CourseDetail course={course}/>

        <ChapterList course={course} refreshData={() => GetCourse()} />

          <Button onClick={GenerateChapterContent} className="my-10">
            Generate Course Content
          </Button>
    </div>
  )
}

export default CourseLayout