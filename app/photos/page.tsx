import MasonryGallery, { MasonryImage } from "@/components/Masonry";

import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Image from "next/image";
import Main from "@/components/Main";
import { Metadata } from "next";
import { promises as fs } from "fs";
import path from "path";
import { shuffle } from "../utils/shuffle";

export const metadata: Metadata = {
  title: "Photos",
};

const sizeOf = require("image-size");

const folder = "photos";

const Photos = async () => {
  // Get filenames from a directory
  const imageDirectory = path.join(process.cwd(), `/public/${folder}`);
  const imageFilenames = (await fs.readdir(imageDirectory)).filter(
    (f) => f !== ".DS_Store"
  );
  const shuffled = shuffle(imageFilenames);

  const images = shuffled.map((ifn): MasonryImage => {
    const dimensions = sizeOf(`${imageDirectory}/${ifn}`);
    return {
      filename: `/${folder}/${ifn}`,
      ...dimensions,
    };
  });

  return (
    <Main flushTop={false}>
      <Banner>
        <BannerHeadline>Photos</BannerHeadline>
      </Banner>

      {images && (
        <MasonryGallery
          breakpointColumnsObj={{
            default: 2,
            640: 1,
          }}
          dir={folder}
          images={images}
        />
      )}
    </Main>
  );
};

export default Photos;
