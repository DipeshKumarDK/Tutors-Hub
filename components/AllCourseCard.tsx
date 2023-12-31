"use client"

import Image from "next/image";
import pic from "../assets/purple.jpg";
import Link from "next/link";
import type { RootState } from '../app/GlobalRedux/store';
import { useSelector, useDispatch } from 'react-redux';
import { changeCreateCourse } from '../app/GlobalRedux/Features/createCourse/createCourseSlice';
import { useRouter } from "next/navigation";

export default function AllCourseCard({course}:{course: Object}) {

  const dispatch = useDispatch();
  const router = useRouter();

  console.log(course)
  
  const handleSumbit = () => {
    dispatch(changeCreateCourse(course));
    router.push("/createCourse")
  }

  return (
    <div onClick={handleSumbit} className="border-[1px] bg-[#04151b] border-slate-200 cursor-pointer p-3 mt-2 mb-2 flex sm:flex-row flex-col">
      {/* <Link href={"/course"}> */}
        <Image
          src={pic}
          alt="/"
          className="w-2/6 lg:max-h-[170px] sm:block hidden"
        />
        <Image src={pic} alt="/" className="w-full h-44 sm:hidden" />
        <section className="lg:w-3/6 sm:w-4/6 w-full sm:pl-6 sm:pr-6 sm:pt-0 pt-3 flex flex-col justify-center">
          <div>
            <h2 className="sm:text-xl text-lg font-semibold mr-5">
              Discovering Backend BottleNecks, Exploring
            </h2>
            <h4 className="text-slate-200 text-sm mt-2">
              Harness Chrome DevTools, MITM Proxy, and Wireshark to Pinpoint and
              Resolve Bottlenecks
            </h4>
            <div className="flex mt-2">
              <h4 className="text-slate-200 text-sm">
                By <span className="text-green-300">NF Warrior</span>
              </h4>
              <h4 className="text-slate-200 text-sm ml-3">
                Uploaded: <span className="text-green-300">10 June 2020</span>
              </h4>
            </div>
            <div className="flex mt-2">
              <h4 className="text-slate-200 text-sm">
                <span className="text-purple-300">Total Hours: </span>10
              </h4>
              <h4 className="text-slate-200 text-sm ml-3">
                <span className="text-purple-300">Rating: </span>3 ⭐ out of 5
              </h4>
            </div>
            <h3 className="font-semibold sm:text-lg lg:hidden mt-1">$ 520</h3>
          </div>
        </section>
        <div className="w-1/6 hidden lg:flex flex-col justify-center pr-2">
          <h3 className="font-semibold sm:text-lg text-right">$ 520</h3>
        </div>
      {/* </Link> */}
    </div>
  );
}
