"use client"

import React, { useEffect, useRef } from "react";
import { Timeline } from "@/components/ui/timeline";



const Experience = () => {
  const data = [
    {
      title: "Early 2023",
      content: (
        <div className="px-4 py-4 border border-white rounded-2xl shadow-2xl">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Worked for Mercedes-Benz Management Consulting as a student
            consultant and project lead for a human resource related project. 
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8"> Developed "Tofumisu", a tofu based, 100% vegan, tiramisu along with a group of talented individuals from multiple majors at Cornell Unviersity. This product was then presented to a panel consisting of Kelloggs executives. I was primarily responsible for supply chain strategy and supply chain logistics, including the development of a cold chain. </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/photos/tofumisu.jpg"
              width={500}
              height={500}
              className="rounded-lg object-cover sm:h-80 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img 
              src="/photos/misu.png"
              width={500}
              height={500}
              className="rounded-lg object-cover sm:h-80 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Late 2023",
      content: (
        <div className="px-4 py-4 border border-white rounded-2xl shadow-2xl">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Graduated with a Lifetime Achievement Award from Korea University. By helping develop current relationships as well as foster new ones, I was able contribute to the development and growth of Korea University
            Business School and increase the reach of the CEMS MiM Program at Korea University.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <img
                src="/photos/graduation.JPG"
                width={500}
                height={500}
                className="rounded-lg object-cover sm:h-80 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <img 
                src="/photos/grad2.JPG"
                width={500}
                height={500}
                className="rounded-lg object-cover sm:h-80 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
          </div>

          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Started my internship at EF Education First Korea where I managed to double lead generation in my first month. I also held my first event with EF customers and alumni, and initiated discussions regarding a partnership between EF Korea and CEMS with Korea University.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <img
                src="/photos/efevent.PNG"
                width={500}
                height={500}
                className="rounded-lg object-cover sm:h-80 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <img 
                src="/photos/efevent-2.JPEG"
                width={500}
                height={500}
                className="rounded-lg object-cover sm:h-80 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2024",
      content: (
        <div className="px-4 py-4 border border-white rounded-2xl shadow-2xl">
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Was promoted to Marketing Coordinator of EF Education First Korea where I was primarily responsible for customer relationship management, and working with our partners. During this time I developed our new CRM (Ambassador) Strategy which immediately helped increase customer engagement by roughly 20% and increased opportunities generated from referrals by over 300%.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <img
                src="/photos/AmbStrat.png"
                width={500}
                height={500}
                className="rounded-lg object-cover sm:h-80 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <img 
                src="/photos/cemskr.jpg"
                width={500}
                height={500}
                className="rounded-lg object-cover sm:h-80 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id="experience" className="h-[200vh] pt-11 w-screen relative transition-colors duration-300 bg-white sm:px-8">
      <Timeline data={data} />
    </div>
  );
};

export default Experience;
