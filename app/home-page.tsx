import MasonryGallery, { MasonryImage } from "@/components/Masonry";

import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import BannerParallax from "@/components/home/BannerParallax";
import BannerWrapper from "@/components/home/BannerWrapper";
import Button from "@/components/Button";
import Container from "@/components/Container";
import HeroImage from "@/components/Hero";
import Image from "next/image";
import Main from "@/components/Main";
import ParallaxHero from "@/components/ParallaxHero";
import { promises as fs } from "fs";
import { motion } from "framer-motion";
import path from "path";
import { shows, type Show } from "@/data/shows";
import { shuffle } from "./utils/shuffle";
import useShows from "@/hooks/use-shows";
import xMasPhoto from "public/images/hob-2019-ANIMATION.gif";
import LiveListItem from "@/components/live/ListItem";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import HappyHolidays from "@/components/home/HappyHolidays";

const sizeOf = require("image-size");

const folder = "masonry-images";

export default async function Home() {
  // Get filenames from a directory
  const imageDirectory = path.join(process.cwd(), `/public/${folder}`);
  const imageFilenames = (await fs.readdir(imageDirectory)).filter(
    (f) => f !== ".DS_Store"
  );

  const images = imageFilenames.map((ifn): MasonryImage => {
    const dimensions = sizeOf(`${imageDirectory}/${ifn}`);
    return {
      filename: `/${folder}/${ifn}`,
      ...dimensions,
    };
  });

  const shuffledImages = shuffle(images);

  const { currentShows } = useShows(shows);

  return (
    <>
      <Main flushTop>
        {/* <BannerWrapper /> */}
        <BannerParallax />

        <div className="space-y-10 md:space-y-16">
          <HappyHolidays />

          <Container>
            <Banner className="relative z-20">
              <BannerHeadline>Upcoming Shows</BannerHeadline>
            </Banner>

            <ul>
              {currentShows.length > 0 &&
                currentShows.slice(0, 2).map((show) => (
                  <li key={show.datetime}>
                    <LiveListItem show={show as Show}></LiveListItem>
                  </li>
                ))}
              {currentShows.length === 0 && (
                <p className="text-center">
                  Check back soon for 2024 show announcments!
                </p>
              )}
            </ul>
            <div className="flex justify-end mb-20">
              <Link href="/live" className="button">
                View All Shows
                <ArrowRightIcon className="inline-block w-5 h-5 ml-2" />
              </Link>
            </div>
          </Container>

          {images && <MasonryGallery dir={folder} images={shuffledImages} />}

          {/* <Banner className="text-white bg-black">
  <BannerHeadline>Another Banner Headline</BannerHeadline>
  <p>Some subhead content here</p>
</Banner> */}
        </div>
      </Main>
    </>
  );
}
