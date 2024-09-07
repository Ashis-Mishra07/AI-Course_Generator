import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import { FaLightbulb } from "react-icons/fa";
import { MdOutlineMoreTime } from "react-icons/md";



function TopicDescription() {
  return (
    <div className='mx-20 lg:max-44 '>
        <div className='mt-5'>
              <label className='flex items-center gap-1' ><FaLightbulb />Write the topic for which you want to generate a course(e.g., Python Course , Yoga , etc.): </label>
            <Input placeholder={'Topic'}/>
        </div>
        <div className='mt-5 '>
              <label className='flex items-center gap-1'><MdOutlineMoreTime />Tell us more about your course , what you want to include in the course (Optional)</label>
            <Textarea placeholder="About your Course"/>
        </div>
        
    </div>
  )
}

export default TopicDescription