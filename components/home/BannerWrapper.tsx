"use client";

import { HeroImage } from "zuma-blocks";
import React from "react";

const BannerWrapper = () => {
  return (
    <HeroImage
      images={[
        {
          mediaQuery: `(max-width: 640px)`,
          src: "../images/DSC08744.JPG",
          srcSet: "../images/DSC08744.JPG",
        },
        {
          mediaQuery: "(min-width: 641px)",
          src: "../images/DSC08744.JPG",
          srcSet: "../images/DSC08744.JPG",
        },
        // {
        //   mediaQuery: "",
        //   src: "/images/the-midnight-calls_promo-pic.jpg",
        //   srcSet: "/images/the-midnight-calls_promo-pic.jpg",
        // },
      ]}
    />
  );
};

export default BannerWrapper;
