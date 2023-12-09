const siteTitle = "Black Angus (Chicago) AC/DC Tribute Act";
const ogImage = "/images/DSC08744.JPG";
const url = "https://blackangusrock.com";

const description =
  "Black Angus (Chicago) is the official AC/DC Tribute Act since 2008 delivering the Bon Scott era 1970s AC/DC experience you love and deserve.";

const config = {
  OPEN_GRAPH: {
    description,
    images: [
      {
        url: `${
          process.env.NEXT_PUBLIC_BASE_URL
        }/api/og?cover=${encodeURIComponent(ogImage)}`,
      },
    ],
    locale: "en-US",
    siteName: siteTitle,
    title: siteTitle,
    type: "website",
    url,
  },
  SITE: {
    description,
    name: "Black Angus",
    title: siteTitle,
    url,
  },
};

export type Nav = {
  href: string;
  name: string;
};

const nav: Array<Nav> = [
  // {
  //   href: "/about",
  //   name: "About",
  // },
  {
    href: "/live",
    name: "Live",
  },
  {
    href: "/photos",
    name: "Photos",
  },
  {
    href: "/press-pack",
    name: "Press Pack",
  },
  {
    href: "/contact",
    name: "Contact",
  },
];

const socialMedia = {
  facebook: {
    handle: "blackangusrock",
    url: "https://www.facebook.com/blackangusrock",
  },
  instagram: {
    handle: "blackangusrock",
    url: "https://www.instagram.com/blackangusrock/",
  },
  twitter: {
    handle: "blackangusrock",
    url: "https://twitter.com/blackangusrock",
  },
  youtube: {
    handle: "UCGzpFZEvHz1iHQ1B9ScB8rg",
    url: "https://www.youtube.com/channel/UCGzpFZEvHz1iHQ1B9ScB8rg",
  },
};

export { config, nav, socialMedia };
