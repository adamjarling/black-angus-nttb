import MasonryGallery, { MasonryImage } from "@/components/Masonry";

import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Image from "next/image";
import Main from "@/components/Main";
import { promises as fs } from "fs";
import path from "path";
import { shuffle } from "@/app/utils/shuffle";

const sizeOf = require("image-size");

const folder = "posters";

const Posters = async () => {
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
        <BannerHeadline>Past</BannerHeadline>
      </Banner>

      {images && (
        <MasonryGallery
          breakpointColumnsObj={{
            default: 3,
            768: 2,
          }}
          dir={folder}
          images={images}
        />
      )}
    </Main>
  );
};

export default Posters;
