import { Fragment } from "react";
import { Hero } from "../../components/Home/Hero";
import { Features } from "../../components/Home/Features";

const Homepage = () => {
  return (
    <Fragment>
      <Hero />
      <Features />
    </Fragment>
  );
};

export default Homepage;
