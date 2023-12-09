import Banner from "@/components/banner/Banner";
import BannerHeadline from "@/components/banner/Headline";
import Container from "@/components/Container";
import Image from "next/image";
import Main from "@/components/Main";
import promoPhoto from "public/images/web-banner-cutup.jpg";

const Contact = () => {
  return (
    <Main flushTop={false}>
      <Banner>
        <BannerHeadline>Contact</BannerHeadline>
      </Banner>

      <Container className="text-center">
        <p className="pb-10">
          For North American and European booking, contact:
          underthewirebooking@gmail.com
        </p>

        <Image src={promoPhoto} alt="Black Angus promo" />
      </Container>
    </Main>
  );
};

export default Contact;
