import BandsCardList from "@/components/bands/CardList";
import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import ContentWrapper from "@/components/press-pack/ContentWrapper";
import Image from "next/image";
import Main from "@/components/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press Pack",
};

const PressPack = () => {
  return (
    <Main flushTop={false}>
      <Banner>
        <BannerHeadline>Press Pack</BannerHeadline>
      </Banner>

      <ContentWrapper />

      {/* <BandsCardList /> */}
    </Main>
  );
};

export default PressPack;
