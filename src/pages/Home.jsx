import React from "react";

import Hero from "../components/Hero";

import Creations from "../components/Creations";
import Story from "../components/Story";
import CraftedMenu from "../components/MenuSection";
import PassionSection from "../components/PassionSection";
import DealsSection from "../components/DealsSection";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Stats from "../components/Stats";
import FloatingActions from "../components/FloatingActions";
import TypedText from "../components/TypedText";

const Home = () => {
  return (
    <div>
      <Hero />
      <Creations />
      <TypedText />
      <Story />
      <Stats />
      <CraftedMenu />
      <PassionSection />
      <DealsSection />
      <Testimonials />
      <Contact />
      <FloatingActions phone="+2348108996071" whatsapp="2348108996071" />
    </div>
  );
};

export default Home;
