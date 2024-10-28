"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link, { LinkProps } from "next/link";
import Image from "next/image";
import Profile from "../Profile";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  icon
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  icon?: React.ReactNode
}) => {
  const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // Or a loading spinner
    }

  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className={`cursor-pointer ${item=="Home" ?"text-black":"text-gray-500" }  hover:opacity-[0.9] dark:text-white gap-x-10`}
      >
        <p className="hidden sm:block">{item == "Home" ? <div><p>{item}</p><p> <svg width="50" height="5" viewBox="-1 -1 106 5" fill="none" id="svg-1423532814_339">
          <path d="M0 2.72237C24.2418 1.76576 48.412 0.526469 72.7351 0.164971C82.3943 0.0214119 92.1273 -0.0844867 101.79 0.0933197C102.78 0.111545 105.354 0.0798553 103.101 0.242132" stroke="#2A292E" stroke-width="2" stroke-linecap="round"></path>
        </svg></p></div> : item}</p>
        <p className={`block sm:hidden ${item=="Home" ?"text-black":"text-gray-500" }`}>{icon}</p>
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  const [blur, setBlur] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setBlur(window.scrollY > 0 ? 12 : 0); // Set blur to 12px if scrolled, otherwise 0px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className={`relative rounded-full border border-transparent flex justify-evenly lg:justify-between items-center px-6 h-14 ${blur > 0 ? "shadow-lg" : "shadow-none"
        }`}
      style={{ backdropFilter: `blur(${blur}px)`, transition: "backdrop-filter 0.3s ease, box-shadow 0.3s ease", }}
    >

      <Profile />
      <div className="flex space-x-4 px-8 py-6">
        {children}
      </div>
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};
interface HoveredLinkProps extends LinkProps {
  children: React.ReactNode;
}


export const HoveredLink = ({ children, ...rest }: HoveredLinkProps) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </Link>
  );
};
