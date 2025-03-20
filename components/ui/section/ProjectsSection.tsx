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
    description: "Basically contributed nothing😑🙄🥱💀",
    title: "Faith Answered",
    src: "https://faithanswered.com/build/assets/logo-CY90ruqA.svg",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return <p>Awkward hehe😁😐🥴🤡</p>;
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
    description: "Created with Html,Css and JS",
    title: "E-commerce Website",
    src: "https://logocreator.io/wp-content/uploads/2023/11/BlogThumbnail_755ead76-44e0-4627-bc93-55b0ad9c6722.jpg",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
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
    description: "Created with Html,Css and CoreJs",
    title: "Hackial-Social media app",
    src: "https://static.vecteezy.com/system/resources/previews/023/986/939/non_2x/tiktok-logo-tiktok-logo-transparent-tiktok-icon-transparent-free-free-png.png",
    ctaText: "View",
    ctaLink: "https://github.com/KSaayushofficial/Stop-Watch",
    content: () => {
      return (
        <p>
          I created a social media website named "Hackial" using CoreJS, HTML,
          and CSS. The platform is designed to offer users an engaging
          experience with features typical of modern social media sites, such as
          user profiles, interactive posts, and real-time communication
          elements. I utilized CoreJS for the website’s logic and interactivity,
          ensuring a smooth and dynamic experience. The design was made
          responsive and accessible, with CSS handling the layout, animations,
          and styling. This project allowed me to combine fundamental web
          technologies to build a complete, functional social media platform.
        </p>
      );
    },
  },

  {
    description: "I am not a machine bro.It's ongoing...",
    title: "Direkty- A business directory platform",
    src: "https://www.shutterstock.com/image-vector/pixel-location-point-sign-symbol-600nw-1977711641.jpg",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Suspense..Development in progress! Stay Back🚫🙅‍♂️
        </p>
      );
    },
  },
];
