import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input'
import { FaVideo } from "react-icons/fa";
import { GiLevelEndFlag } from "react-icons/gi";
import { MdAccessTimeFilled } from "react-icons/md";
import { TbListNumbers } from "react-icons/tb";




function SelectOption() {
  return (
    <div className='px-10 md:px-20 lg:px-44'>
        <div className='grid grid-cols-2 gap-10'>
            <div>
                  <label className='text-sm flex items-center gap-1'><GiLevelEndFlag />Difficulty Level</label>
                  <Select>
                      <SelectTrigger className="">
                          <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                          <SelectItem value="Beginner">Beginner</SelectItem>
                          <SelectItem value="Intermediate">Intermediate</SelectItem>
                          <SelectItem value="Advance">Advance</SelectItem>
                      </SelectContent>
                  </Select>

            </div>
              <div>
                  <label className='text-sm flex items-center gap-1'><MdAccessTimeFilled />Course Duration</label>
                  <Select>
                      <SelectTrigger className="">
                          <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                          <SelectItem value="2 Hours">2 Hours</SelectItem>
                          <SelectItem value="5 Hours">5 Hours</SelectItem>
                          <SelectItem value="More than 6 Hours">More than 6 Hours</SelectItem>
                      </SelectContent>
                  </Select>

              </div>
              <div>
                  <label className='text-sm flex items-center gap-1'><FaVideo />Add Video</label>
                  <Select>
                      <SelectTrigger className="">
                          <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                          <SelectItem value="Yes">Yes</SelectItem>
                          <SelectItem value="No">No</SelectItem>
                      </SelectContent>
                  </Select>

              </div>
              <div>
                  <label className='text-sm flex items-center gap-1'><TbListNumbers />No of Chapters</label>
                  <Input type="number"/>
              </div>
        </div>
    </div>
  )
}

export default SelectOption