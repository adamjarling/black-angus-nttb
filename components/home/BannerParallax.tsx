"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import Image from "next/image";
import logo from "public/images/black-angus-font-logo-white.png";

const MotionImage = motion(Image);

const BannerParallax: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0", "10%"]);

  return (
    <div className="relative w-full overflow-hidden h-[100vh]">
      <div className="absolute z-10 w-full h-32 bg-transparent opacity-50 bg-gradient-to-t from-transparent to-black" />
      <MotionImage
        style={{ y }}
        src={`/photos/DSC08744.JPG`}
        alt={`Black Angus rockin`}
        fill
        className="z-0 object-cover"
      />
      <div className="container relative flex items-center justify-center w-full h-screen mx-auto">
        <div className="max-w-4xl">
          <h1 className="sr-only">Black Angus Chicago</h1>
          <MotionImage
            initial={{ opacity: 0, y: -1000 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            src={logo}
            alt="Black Angus Logo"
          />
          <motion.p
            className="pt-4 text-base text-center text-gray-300 md:text-xl"
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          >
            Bon Scott era AC/DC tribute act, rocking hard since 2008
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default BannerParallax;
