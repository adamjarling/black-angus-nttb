import { Show, shows } from "@/data/shows";

import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Container from "@/components/Container";
import Image from "next/image";
import LiveImageWrapper from "@/components/live/ImageWrapper";
import LiveListBig from "@/components/live/ListBig";
import Main from "@/components/Main";
import { Metadata } from "next";
import Posters from "@/components/live/PostersWrapper";
import useShows from "@/hooks/use-shows";

export const metadata: Metadata = {
  title: "Live",
};

const Live = () => {
  const { currentShows, pastShows } = useShows(shows);

  return (
    <Main flushTop={false}>
      <Banner>
        <BannerHeadline>Live</BannerHeadline>
      </Banner>

      <LiveImageWrapper />

      <div className="space-y-16">
        <LiveListBig shows={currentShows as Show[]} />
        {currentShows.length === 0 && (
          <LiveListBig shows={pastShows as Show[]} />
        )}

        {/* {images && <MasonryGallery dir={folder} images={images.reverse()} />} */}

        {currentShows.length > 0 && (
          <Container className="pb-20">
            <h3 className="mb-10 text-2xl font-bold text-center lg:text-4xl">
              Past Shows
            </h3>
            <p className="text-center">Coming soon...</p>
            <LiveListBig shows={pastShows as Show[]} />
          </Container>
        )}

        <Posters />
      </div>
    </Main>
  );
};

export default Live;
