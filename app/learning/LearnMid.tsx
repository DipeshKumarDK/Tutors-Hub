import HomeCourseCard from "@/components/HomeCourseCard";
import LearningCard from "@/components/LearningCard";

export default function LearnMid() {
    return (
      <div className="bg-black ">
        <section className="bg-[#07232e] flex text-slate-100 lg:pl-24 lg:pr-24 md:pl-16 md:pr-16 sm:pl-10 sm:pr-10 pl-2 pr-2">
            <h4 className="pl-3 pr-3 pt-2 pb-2 xs:text-base text-sm font-semibold border-b-[3px] border-slate-200">Your Courses</h4>
            <h4 className="pl-3 pr-3 pt-2 pb-2 xs:text-base text-sm font-semibold">Your Wishlist</h4>
        </section>

        <section className="lg:pl-24 lg:pr-24 md:pl-16 md:pr-16 sm:pl-10 sm:pr-10 pl-2 pr-2 pt-[40px] pb-[40px]">
           <div className="lg:grid grid-cols-5 hidden gap-[15px]">
            <LearningCard/>
            <LearningCard/>
            <LearningCard/>
            <LearningCard/>
            <LearningCard/>
        </div>
        <div className="md:grid lg:hidden hidden grid-cols-4 gap-[15px]">
            <LearningCard/>
            <LearningCard/>
            <LearningCard/>
            <LearningCard/>
        </div>
        <div className="sm:grid md:hidden hidden grid-cols-3 gap-[15px]">
            <LearningCard/>
            <LearningCard/>
            <LearningCard/>
        </div>
        <div className="xs:grid sm:hidden hidden grid-cols-2 gap-[15px]">
            <LearningCard/>
            <LearningCard/>
        </div>
        <div className="xs:hidden grid grid-cols-1">
            <LearningCard/>
        </div>
        </section>

        <section className="hidden lg:pl-24 lg:pr-24 md:pl-16 md:pr-16 sm:pl-10 sm:pr-10 pl-2 pr-2 pt-[40px] pb-[40px]">
           <div className="lg:grid grid-cols-5 hidden gap-[15px]">
            <HomeCourseCard/>
            <HomeCourseCard/>
            <HomeCourseCard/>
            <HomeCourseCard/>
            <HomeCourseCard/>
        </div>
        <div className="md:grid lg:hidden hidden grid-cols-4 gap-[15px]">
            <HomeCourseCard/>
            <HomeCourseCard/>
            <HomeCourseCard/>
            <HomeCourseCard/>
        </div>
        <div className="sm:grid md:hidden hidden grid-cols-3 gap-[15px]">
            <HomeCourseCard/>
            <HomeCourseCard/>
            <HomeCourseCard/>
        </div>
        <div className="xs:grid sm:hidden hidden grid-cols-2 gap-[15px]">
            <HomeCourseCard/>
            <HomeCourseCard/>
        </div>
        <div className="xs:hidden grid grid-cols-1">
            <HomeCourseCard/>
        </div>
        </section>
      </div>
    );
  }
  