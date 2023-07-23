import AlsoCard from "@/components/AlsoCard";

export default function AlsoBuy() {
  return (
    <div className="xl:pl-36 xl:pr-36 lg:pl-24 lg:pr-24 md:pl-12 md:pr-12 sm:pl-8 sm:pr-8 xs:pl-4 xs:pr-4 pl-3 pr-3 pt-7 pb-4 flex bg-[#04151b] text-slate-100">
      <div className="w-full">
        <h2 className="text-2xl font-semibold">
          Students Also Bought
        </h2>
        <section className="xs:mt-4 mt-3">
           <AlsoCard/>
           <AlsoCard/>
           <AlsoCard/>
           <AlsoCard/>
        </section>
        <h3 className="border-[1px] border-slate-300 pt-3 pb-3 text-center mt-3 text-sm font-semibold">Show More</h3>
      </div>
    </div>
  );
}