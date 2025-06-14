import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import { div } from "framer-motion/client";
import { Cover } from "../cover";

export function Services() {
  const features = [
    {
      title: "1. 🧩 Frontend Development",
      description:
        "Developing responsive and interactive user interfaces using React.js and modern web technologies.",
      icon: <IconTerminal2 />,
    },
    {
      title: "2. ⚛️ React Component Design",
      description:
        "Creating reusable, optimized components for scalable web applications using React and JSX.",
      icon: <IconEaseInOut />,
    },
    {
      title: "3. 🌐 Next.js Integration",
      description:
        "Building fast, SEO-friendly applications with server-side rendering and routing using Next.js.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "4. 🎨 UI/UX Implementation",
      description:
        "Translating Figma or design mockups into clean, pixel-perfect React interfaces with Tailwind CSS.",
      icon: <IconCloud />,
    },
    {
      title: "5. 🚀 Performance Optimization",
      description:
        "Improving app speed and efficiency through code-splitting, lazy loading, and performance best practices.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "6. 🛠️ State Management",
      description:
        "Managing component and global state effectively using hooks like useState, useEffect, and Context API.",
      icon: <IconHelp />,
    },
    {
      title: "7. 🔗 API Integration",
      description:
        "Fetching and displaying dynamic data from REST APIs with React and Axios or Fetch.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "8. 📱 Responsive Design",
      description:
        "Ensuring smooth, mobile-first experiences across all screen sizes using Tailwind and Flex/Grid layouts.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="mt-[150px] flex flex-col" id="services">
        <div className="px-8 flex flex-col justify-center items-center">
            <h2 className="mx-auto text-xl md:text-4xl lg:text-5xl font-sans relative z-20 font-bold tracking-tight">
                        <Cover>Our Services</Cover>
                      </h2>
                      <p className="max-w-xl text-[1rem] mt-[20px] text-center md:text-lg text-neutral-700 dark:text-neutral-400">
                        We Provide You Quality Of Services
                      </p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
