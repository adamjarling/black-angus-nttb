import BandsCardList from "@/components/bands/CardList";
import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Image from "next/image";
import Main from "@/components/Main";

const PressPack = () => {
  return (
    <Main flushTop={false}>
      <Banner>
        <BannerHeadline>Press Pack</BannerHeadline>
      </Banner>

      {/* <BandsCardList /> */}
    </Main>
  );
};

export default PressPack;
