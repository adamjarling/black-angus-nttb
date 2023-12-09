"use client";

import BannerHeadline from "../banner/Headline";
import { Container } from "zuma-blocks";
import Image from "next/image";
import React from "react";
import baPhoto from "public/images/DSC09515_.jpg";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

const ContentWrapper = () => {
  return (
    <Container>
      <div className="space-y-10 md:space-y-16">
        <MotionImage src={baPhoto} alt="Black Angus Family Photo" />

        <section>
          <p>
            BLACK ANGUS is the premier North American AC/DC tribute band
            re-creating the sound, energy and rhythms of AC/DC.
          </p>

          <p>
            Far beyond your average wig-wearing cover band, BLACK ANGUS consists
            of veteran Chicago rock & blues touring and recording musicians from
            the likes of Loudmouth, Cathedral, Urge Overkill, Skinwalker, The
            Last Vegas, Frank Bang&apos;s Secret Stash, Thunderwing, Maiden
            Chicago, Head On, Fierce Atmospheres, The Cynics and more.
          </p>

          <p>
            &quot;Our current line-up are just great players&quot; says Taran De
            Pablos, singer of BLACK ANGUS. &quot;Our guys have toured the world,
            released hit albums, done stadium tours, you name it we&quot;ve done
            it. When performing with Black Angus, it&quot;s a band having fun,
            breathing some life into some of the best rock songs of all time.
            The bull has found the unmistakable, AC/DC boogie. People love
            it.&quot;
          </p>

          <p>
            Since 2008 BLACK ANGUS has been touring the club and festival
            circuit, building out a Grade A set list. They&quot;ve released 2
            promo videos, and recently recorded studio versions of three classic
            AC/DC jams; &quot;Girls Got Rhythm&quot;, &quot;Shot Down in
            Flames&quot;, and &quot;Walk All Over You&quot;.
          </p>

          <p>AC/DC rules. BLACK ANGUS aims to rule, almost as much.</p>

          <p>Book the best AC/DC tribute act of the pack today.</p>
        </section>

        <BannerHeadline>Photos</BannerHeadline>

        <section>
          <BannerHeadline>Sample Audio</BannerHeadline>
          {/* <figure>
            <figcaption>Black Angus - Girls Got Rhythm</figcaption>
            <audio
              controls
              src="assets/audio/Girls got Rhythm.ref1.mp3"
              className=""
            >
              Your browser does not support the<code>audio</code> element.
            </audio>
          </figure> */}
        </section>

        <section>
          <BannerHeadline>Video</BannerHeadline>
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/WYGFRIrze4c?si=PCsz1Air48mhXvhs"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </section>

        <BannerHeadline>Logos</BannerHeadline>

        <BannerHeadline>Social Media</BannerHeadline>
      </div>
    </Container>
  );
};

export default ContentWrapper;
