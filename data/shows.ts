export type Venue = {
  name: string;
  city: string;
  stateProvince: string;
  country: string;
  url?: {
    facebook?: string;
    website?: string;
  };
};

export type Show = {
  datetime: string;
  notes?: string;
  venue: Venue;
  url: {
    facebook: string;
    image: string;
    ticket: string;
  };
};

export const shows: Show[] = [
  // {
  //   datetime: "2022-06-24T20:00:00",
  //   notes: "with The Claws LA",
  //   venue: {
  //     name: "Reggies w/ The Claws",
  //     city: "Chicago",
  //     stateProvince: "IL",
  //     country: "USA",
  //     url: {
  //       facebook: "",
  //     },
  //   },
  //   url: {
  //     facebook: "",
  //     image: "",
  //     ticket: "",
  //   },
  // },
  // {
  //   datetime: "2022-10-16T20:00:00",
  //   notes: "with The Supersuckers and Handcuffs",
  //   venue: {
  //     name: "Reggies w/ Supersuckers",
  //     city: "Chicago",
  //     stateProvince: "IL",
  //     country: "USA",
  //     url: {
  //       facebook: "",
  //     },
  //   },
  //   url: {
  //     facebook: "",
  //     image: "",
  //     ticket: "",
  //   },
  // },
  // {
  //   datetime: "2022-12-31T20:00:00",
  //   notes: "New Years Eve!",
  //   venue: {
  //     name: "Reggies",
  //     city: "Chicago",
  //     stateProvince: "IL",
  //     country: "USA",
  //     url: {
  //       facebook: "",
  //     },
  //   },
  //   url: {
  //     facebook: "",
  //     image: "",
  //     ticket: "",
  //   },
  // },
  // {
  //   datetime: "2023-02-08T20:00:00",
  //   notes: "With Jason Kane and the Jive",
  //   venue: {
  //     name: "Reggies",
  //     city: "Chicago",
  //     stateProvince: "IL",
  //     country: "USA",
  //     url: {
  //       facebook: "",
  //     },
  //   },
  //   url: {
  //     facebook: "",
  //     image: "",
  //     ticket: "",
  //   },
  // },
  // {
  //   datetime: "2023-08-06T18:00:00",
  //   venue: {
  //     name: "The Forge",
  //     city: "Joliet",
  //     stateProvince: "IL",
  //     country: "USA",
  //     url: {
  //       facebook: "https://www.facebook.com/brauerhouse",
  //     },
  //   },
  //   url: {
  //     facebook: "",
  //     image: "",
  //     ticket:
  //       "https://www.ticketweb.com/event/-blacktop-mojo-yet-the-forge-tickets/13266278",
  //   },
  // },
  // {
  //   datetime: "2023-08-27T15:00:00",
  //   venue: {
  //     name: "The Thirsty Beaver",
  //     city: "Crestwood",
  //     stateProvince: "IL",
  //     country: "USA",
  //     url: {
  //       facebook: "",
  //       website: "",
  //     },
  //   },
  //   url: {
  //     facebook: "",
  //     image: "",
  //     ticket: "",
  //   },
  // },
  // {
  //   datetime: "2023-09-02T18:00:00",
  //   venue: {
  //     name: "The Northman Riverwalk",
  //     city: "Chicago",
  //     stateProvince: "IL",
  //     country: "USA",
  //     url: {},
  //   },
  //   url: {
  //     facebook: "",
  //     image: "",
  //     ticket: "",
  //   },
  // },
  // {
  //   datetime: "2023-09-09T23:00:00",
  //   venue: {
  //     name: "Reggies",
  //     city: "Chicago",
  //     stateProvince: "IL",
  //     country: "USA",
  //     url: {
  //       facebook: "",
  //       website: "https://www.reggieslive.com/",
  //     },
  //   },
  //   url: {
  //     facebook: "",
  //     image: "",
  //     ticket: "",
  //   },
  // },
  // {
  //   datetime: "2023-09-29T21:00:00",
  //   venue: {
  //     name: "Live Wire Lounge",
  //     city: "Chicago",
  //     stateProvince: "IL",
  //     country: "USA",
  //     url: {
  //       facebook: "",
  //       website: "https://www.livewireloungechicago.com/",
  //     },
  //   },
  //   url: {
  //     facebook: "https://www.facebook.com/events/1455762108550997",
  //     image: "",
  //     ticket: "",
  //   },
  // },
  // {
  //   datetime: "2023-10-13T20:00:00",
  //   venue: {
  //     name: "Brauerhaus",
  //     city: "Lombard",
  //     stateProvince: "IL",
  //     country: "USA",
  //     url: {
  //       facebook: "https://www.facebook.com/brauerhouse",
  //     },
  //   },
  //   url: {
  //     facebook: "https://www.facebook.com/events/791160879220768",
  //     image: "",
  //     ticket:
  //       "https://www.eventbrite.com/e/free-friday-the-13th-rock-show-pipe-death-pop-radio-the-midnight-calls-tickets-688117256237?aff=ebdsoporgprofile",
  //   },
  // },
  // {
  //   datetime: "2023-11-03T20:00:00",
  //   venue: {
  //     name: "Reggies w/ Steepwater Band",
  //     city: "Chicago",
  //     stateProvince: "IL",
  //     country: "USA",
  //     url: {
  //       facebook: "",
  //       website: "https://www.reggieslive.com/",
  //     },
  //   },
  //   url: {
  //     facebook: "https://www.facebook.com/events/261198586242307",
  //     image: "https://www.reggieslive.com/",
  //     ticket:
  //       "https://www.ticketweb.com/event/the-steepwater-band-the-reggies-banannas-shack-tickets/13622988",
  //   },
  // },
  // {
  //   datetime: "2023-11-30T20:00:00",
  //   venue: {
  //     name: "Rochaus",
  //     city: "West Dundee",
  //     stateProvince: "IL",
  //     country: "USA",
  //     url: {
  //       facebook: "",
  //       website: "https://rochaus.com/",
  //     },
  //   },
  //   url: {
  //     facebook: "",
  //     image: "",
  //     ticket: "",
  //   },
  // },
  // {
  //   datetime: "2024-02-02T21:00:00",
  //   venue: {
  //     name: "115 Bourbon Street",
  //     city: "Merrionette Park",
  //     stateProvince: "IL",
  //     country: "USA",
  //     url: {
  //       facebook: "https://www.facebook.com/115BourbonStreet/",
  //       website: "https://www.115bourbonstreet.com/",
  //     },
  //   },
  //   url: {
  //     facebook: "",
  //     image: "",
  //     ticket: "",
  //   },
  // },
  {
    datetime: "2023-12-09T19:00:00",
    venue: {
      name: "Rockhause West Dundee",
      city: "West Dundee",
      stateProvince: "IL",
      country: "USA",
      url: {
        facebook: "https://www.facebook.com/rochauswd/",
        website: "https://rochaus.com/",
      },
    },
    url: {
      facebook: "https://www.facebook.com/events/714821100504164",
      image: "",
      ticket:
        "https://www.seetickets.us/event/rookies-rochaus-presents-blackened-the-metallica-tribute/576176",
    },
  },
];
