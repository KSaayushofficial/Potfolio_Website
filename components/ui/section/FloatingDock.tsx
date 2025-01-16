"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IoSettingsOutline } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { FaFileAlt } from "react-icons/fa";
import { MdOutlineCloud } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

export function Dock() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-50 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Services",
      icon: (
        <IoSettingsOutline className="h-full w-full text-neutral-50 dark:text-neutral-300" />
      ),
      href: "#services",
    },
    {
      title: "Projects",
      icon: (
        <GrProjects className="h-full w-full text-neutral-50 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Resume",
      icon: (
        <FaFileAlt className="h-full w-full text-neutral-50 dark:text-neutral-300" />
      ),
      href: "#resume",
    },
    {
      title: "Testimonials",
      icon: (
        <MdOutlineCloud className="h-full w-full text-neutral-50 dark:text-neutral-300" />
      ),
      href: "#testimonials",
    },

    {
      title: "Facebook",
      icon: (
        <FaFacebook className="h-full w-full text-neutral-50 dark:text-neutral-300" />
      ),
      href: "https://www.facebook.com/profile.php?id=100057168914802" ,
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-50 dark:text-neutral-300" />
      ),
      href: "https://github.com/KSaayushofficial",
    },
    {
      title: "LinkedIn",
      icon: (
        <FaLinkedin className="h-full w-full text-neutral-50 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/aayush-kumar-008174297/",
    },
  ];
  return (
    <div className="fixed flex left-[90%] translate-x-[-90%] md:left-[50%] md:translate-x-[-50%] bottom-[15px] z-[101]">
      <FloatingDock desktopClassName="bg-neutral-900"
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
