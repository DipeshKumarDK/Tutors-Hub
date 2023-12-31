"use client"

import React , {useEffect} from 'react'
import { FaUserGraduate } from 'react-icons/fa';
import bg from '../../assets/bg1.png'
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Start() {

  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        rotateX: 0,
        transition: {
          duration: 5,
          type: "spring",
        },
      });
    }
    if (!inView) {
      animation.start({
        rotateX: 720,
      });
    }
  }, [inView]);

  return (
    <div className="bg-[#04151b] text-white lg:block hidden pt-12 pb-12 xl:pl-24 xl:pr-24 lg:pl-14 lg:pr-14">
        <h2 className="md:text-3xl text-2xl font-semibold">Let's Start Learning, NF Warrior</h2>
        <div className="h-[2px] w-[100px] bg-white mt-3 rounded"></div>

        <section ref={ref} className="grid grid-cols-3 2xl:gap-[20px] gap-[10px] pt-10">
          <motion.div animate={animation} className='flex border-[1px] border-slate-200 p-4'>
            <div className='h-full flex flex-col justify-center'>
            <FaUserGraduate className='h-16 w-16'/>
            </div>
            <div className='pl-4 pr-4'>
              <h3 className='text-lg font-semibold'>Explore Trending Courses</h3>
              <h4 className='text-slate-200 mt-1 text-sm'>Go through a bunch of interesting courses and find the best one for you.</h4>
              <Link href={'/all'} className='underline mt-1 text-blue-400 cursor-pointer'>Explore</Link>
            </div>
          </motion.div>
          <motion.div animate={animation} className='flex border-[1px] border-slate-200 p-4'>
            <div className='h-full flex flex-col justify-center'>
            <FaUserGraduate className='h-16 w-16'/>
            </div>
            <div className='pl-4 pr-4'>
              <h3 className='text-lg font-semibold'>Complete Your Courses</h3>
              <h4 className='text-slate-200 mt-1 text-sm'>Make the best out of the courses that you are enrolled in.</h4>
              <Link href={'/learning'} className='underline mt-1 text-blue-400 cursor-pointer'>Continue</Link>
            </div>
          </motion.div>
          <motion.div animate={animation} className='flex border-[1px] border-slate-200 p-4'>
            <div className='h-full flex flex-col justify-center'>
            <FaUserGraduate className='h-16 w-16'/>
            </div>
            <div className='pl-4 pr-4'>
              <h3 className='text-lg font-semibold'>Become A Teacher</h3>
              <h4 className='text-slate-200 mt-1 text-sm'>Upload your own courses and course materials and start making money.</h4>
              <Link href={'/instructor'} className='underline mt-1 text-blue-400 cursor-pointer'>Upload</Link>
            </div>
          </motion.div>
        </section>
    </div>
  );
}
