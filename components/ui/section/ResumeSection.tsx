import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Resume() {
  const data = [
    {
      title: "Experience",
      content: (
        <div className="flex flex-col gap-[30px]">
          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
              Freelancing
            </h4>
            <span className="text-blue-400 my-[10px]">2019-2023</span>
            <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Learned ReactJS and CoreJs.
            </p>
          </div>
          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
              Freelancing
            </h4>
            <span className="text-blue-400 my-[10px]">2023-2024</span>
            <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Learned NextJs and made some projects.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      content: (
        <div className="flex flex-col gap-[30px]">
          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
              +2/Science College
            </h4>
            <span className="text-blue-400 my-[10px]">2019-2022</span>
            <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              St.Xavier's College,Maitighar,Kathmandu,Nepal
            </p>
          </div>
          <div>
            <h4 className="text-[#f4f4f4] text-[1.8rem] font-[600]">
              Bachelor In Computer Application(BCA)
            </h4>
            <span className="text-blue-400 my-[10px]">2023-ongoing</span>
            <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Divya Gyan College,Putalisadak,Nepal
            </p>
          </div>
        </div>
      ),
    },

  ];
  return (
    <div className="w-full" id="resume">
      <Timeline data={data} />
    </div>
  );
}
