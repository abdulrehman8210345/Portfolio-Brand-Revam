import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Specialities from "./components/Specialities";
import Details from "./components/Details";
import Resume from "./components/Resume";
import RecentWork from "./components/RecentWork";
import Testimonial from "./components/Testimonial";
import Blogs from "./components/Blogs";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Specialities />
      <Details />
      <Resume />
      <RecentWork />
      <Testimonial />
      <Blogs />
      <Pricing />
      <Footer />
    </div>
  );
};

export default App;
