"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function Testimonials() {
  return (
    <div
      className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
      id="testimonials"
    >
      <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center text-white font-medium">
        What Our Client Says?
      </h4>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote: "Your project idea is great, if you could just make it work.",
    name: "Project manager-LogPoint",
    title: " Codefest Hackathon Judge",
  },
  {
    quote:
      "One day you will look back and see that all along you were blooming.",
    name: "Parikshitz Sitaula",
    title: "Friend and Fellow Coder",
  },
  {
    quote:
      "Your passion will drive you to success, and your dedication will keep you there.",
    name: "Sunil Shrestha",
    title: "Brother and Mentor",
  },
  {
    quote: "Isn't this too much coding for you?",
    name: "Raju Maharjan",
    title: "A Friend and Fellow Coder",
  },
  {
    quote: "Teach me react bro I want to learn it too.",
    name: "Uday Bk",
    title: "A Friend and Fellow Coder",
  },
];
