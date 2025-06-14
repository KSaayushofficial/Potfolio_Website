"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Cover } from "@/components/ui/cover";

export function Projects() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <div className="px-8 flex flex-col justify-center items-center">
        <h2 className="mx-auto text-xl md:text-4xl lg:text-5xl font-sans relative z-20 font-bold tracking-tight">
          <Cover>My Projects</Cover>
        </h2>
        <p className="max-w-xl text-[1rem] mb-[50px] mt-[20px] text-center md:text-lg text-neutral-500 dark:text-neutral-400">
          My So-called Projects
        </p>
      </div>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold dark:text-black text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-black dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-black text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 hover:text-black rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover hover:text-black object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium  hover:text-black dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-500 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-black text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Platform for question and answer",
    title: "Faith Answered",
    src: "https://faithanswered.com/build/assets/logo-CY90ruqA.svg",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return <p>I created the frontend of Faith Answered, a question-and-answer platform built using Next.js to provide fast performance through server-side rendering and static generation. The platform is designed with a clean, calming, and user-friendly interface that encourages thoughtful engagement and discussion. I implemented a responsive layout to ensure seamless usability across all devices, integrating React components for modular and reusable UI elements. For styling, I used Tailwind CSS, which allowed for rapid development and consistent design throughout the site. The frontend includes dynamic routing for individual question and answer pages, intuitive navigation, and smooth transitions to enhance the user experience. The codebase is structured and maintainable, focusing on accessibility and performance to support future scalability.</p>;
    },
  },
  {
    description: "Created with NextJs",
    title: "Apple website clone",
    src: "https://pbs.twimg.com/ext_tw_video_thumb/1797724517277806597/pu/img/TVpc8Y77wt6pMw7h.jpg",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          "I created an Apple website clone using Next.js, leveraging its
          server-side rendering and static site generation features to enhance
          performance. The clone mirrors the clean and minimalist design of the
          original Apple website, using a responsive layout to ensure a smooth
          user experience across devices. I used components from React, CSS
          modules for styling, and integrated dynamic routes to showcase
          products seamlessly. Additionally, I incorporated animations and
          transitions to give the site a modern and interactive feel, while
          keeping the code base optimized and clean."
        </p>
      );
    },
  },
  {
    description: "Created with Moviedb API,Next Js",
    title: "Movie App",
    src: "/dj",
    ctaText: "View",
    ctaLink: "https://github.com/KSaayushofficial/MovieApp",
    content: () => {
      return (
        <p>
          I created an e-commerce website using CoreJS, HTML, and CSS. The
          project involved designing a clean, user-friendly interface for an
          online store, showcasing product listings with detailed descriptions
          and images. I used CoreJS for functionality such as handling user
          interactions, managing state, and implementing essential features like
          product sorting, cart management, and checkout. HTML provided the
          structure, while CSS ensured the website was responsive and visually
          appealing across devices. The project helped me build a solid
          foundation in both front-end and JavaScript development for web
          applications.
        </p>
      );
    },
  },

  {
    description: "Created with Next Js and React Js",
    title: "AI_CoachApp- A platform for students",
    src: "/AI_CoachApp",
    ctaText: "View",
    ctaLink: "https://github.com/KSaayushofficial/AI_CoachApp",
    content: () => {
      return (
        <p>
          I developed the frontend of the AI Coach for Students app, an intelligent educational assistant designed to support students in their academic journey. Built with Next.js, the platform leverages server-side rendering for fast loading and improved SEO. The interface is clean, responsive, and student-friendly, with intuitive navigation that adapts seamlessly across devices. I used React components to build reusable UI blocks, and styled the app using Tailwind CSS for a consistent, modern look. The app features interactive input sections where students can ask questions or request study help, with dynamic routing to handle personalized feedback pages. I integrated animations and smooth transitions using Framer Motion to enhance the interactive learning experience. The codebase is modular and optimized for performance, enabling future integration with AI APIs for real-time guidance and personalized responses.
        </p>
      );
    },
  },
  {
    description: "Created with Next Js and React Js",
    title: "Blog App",
    src: "/blog app",
    ctaText: "View",
    ctaLink: "https://github.com/KSaayushofficial/blogapp",
    content: () => {
      return (
        <p>
        I built the frontend of my Blog App using Next.js, combining performance and simplicity to create a fast and responsive platform for sharing ideas. I focused on crafting a clean, minimal interface that feels easy and enjoyable to read—whether you're on a phone, tablet, or desktop. I used React for building modular components and Tailwind CSS for styling, which helped me keep the design consistent and development efficient.
One of my favorite parts was implementing dynamic routing to generate blog post pages on the fly, making it easy to scale and manage content. I added features like category filters, author info, and smooth page transitions to make the reading experience feel seamless and modern. The whole UI is built to be lightweight, accessible, and user-friendly. I kept the codebase well-organized so it's easy to maintain and expand later—possibly with Markdown support or a CMS integration. modern look. The app features interactive input sections where students can ask questions or request study help, with dynamic routing to handle personalized feedback pages. I integrated animations and smooth transitions using Framer Motion to enhance the interactive learning experience. The codebase is modular and optimized for performance, enabling future integration with AI APIs for real-time guidance and personalized responses.
        </p>
      );
    },
  },
  {
    description: "Created with Next Js and React Js",
    title: "E commerce App ",
    src: "/e-commerce",
    ctaText: "View",
    ctaLink: "http://github.com/KSaayushofficial/nextjs-commerce",
    content: () => {
      return (
        <p>
        I created the frontend of an eCommerce app with a strong focus on performance, responsiveness, and clean design. Built with Next.js, the app uses server-side rendering and static generation to ensure fast load times and a smooth shopping experience. I designed the layout to be intuitive and mobile-friendly, making sure users can easily browse, search, and interact with products across any device.

I used React to build dynamic, reusable components like product cards, category filters, and a cart system. For styling, I went with Tailwind CSS, which allowed me to build a consistent design system while keeping the codebase clean and manageable. I also implemented dynamic routing for product pages, hover effects, and subtle animations to make the UI feel more polished and engaging.
        </p>
      );
    },
  },
];
