"use client";

import React, { useEffect } from "react";
import HomeCourseCard from "@/components/HomeCourseCard";

export default function Viewing({courses}:{courses: any}) {

  return (
    <div className="bg-[#04151b] text-white pt-2 pb-14 2xl:pl-24 2xl:pr-24 lg:pl-14 lg:pr-14 sm:pl-10 sm:pr-10 xs:pl-6 xs:pr-6 pl-3 pr-3">
      <h2 className="md:text-3xl text-2xl font-semibold">
        Students Are Viewing
      </h2>
      {/* <div className="h-[2px] w-[100px] bg-white mt-3 rounded"></div> */}
      <div className="lg:grid grid-cols-5 hidden gap-[15px] pt-6">
      {courses?.map((course:any)=>(
           <HomeCourseCard key={course} course={course}/>
        ))}
      </div>
      <div className="md:grid lg:hidden hidden grid-cols-4 gap-[15px] pt-6">
        {/* <HomeCourseCard />
        <HomeCourseCard />
        <HomeCourseCard />
        <HomeCourseCard /> */}
        {courses?.map((course:any)=>(
           <HomeCourseCard key={course} course={course}/>
        ))}
      </div>
      <div className="sm:grid md:hidden hidden grid-cols-3 gap-[15px] pt-6">
        {/* <HomeCourseCard />
        <HomeCourseCard />
        <HomeCourseCard /> */}
        {courses?.map((course:any)=>(
           <HomeCourseCard key={course} course={course}/>
        ))}
      </div>
      <div className="xs:grid sm:hidden hidden grid-cols-2 gap-[15px] pt-6">
        {/* <HomeCourseCard />
        <HomeCourseCard /> */}
        {courses?.map((course:any)=>(
           <HomeCourseCard key={course} course={course}/>
        ))}
      </div>
      <div className="xs:hidden grid grid-cols-1 pt-6">
        {/* <HomeCourseCard /> */}
        {courses?.map((course:any)=>(
           <HomeCourseCard key={course} course={course}/>
        ))}
      </div>
    </div>
  );
}
