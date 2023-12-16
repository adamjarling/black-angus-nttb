"use client";

import Container from "@/components/Container";
import Image from "next/image";
import liveShot from "public/photos/DSC05870.jpg";
import { motion } from "framer-motion";

const MotionImage = motion(Image);
const LiveImageWrapper = () => {
  return (
    <Container>
      <MotionImage
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        src={liveShot}
        alt="Black Angus Live"
      />
    </Container>
  );
};

export default LiveImageWrapper;
