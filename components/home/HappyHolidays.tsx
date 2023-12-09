"use client";

import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Container from "@/components/Container";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import xMasPhoto from "public/images/hob-2019-ANIMATION.gif";

const MotionImage = motion(Image);

const HappyHolidays = () => {
  return (
    <>
      <Banner className="">
        <BannerHeadline>Happy Holidays</BannerHeadline>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Wishing all the best to you and yours this holiday season.
        </motion.p>
      </Banner>
      <Container>
        <MotionImage
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          src={xMasPhoto}
          alt="Black Angus at House of Blues Chicago"
        />
      </Container>
    </>
  );
};

export default HappyHolidays;