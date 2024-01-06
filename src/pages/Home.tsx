import EscapeRoomsIntro from "@/features/home/components/EscapeRoomsIntro";
import Hero from "@/features/home/components/Hero";
import HeroImage from "@/features/home/components/HeroImage";
import Subscribe from "@/features/home/components/Subscribe";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <HeroImage />
      <EscapeRoomsIntro />
      {/* <FollowUs /> */}
      <Subscribe />
    </Fragment>
  );
};

export default Home;
