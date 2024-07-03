"use client"
import { useEffect } from "react";
import Navbar from "../Components/Navbar"
import Service from "../Components/Service"
import About from "../Components/About"
import Client from "../Components/Clients"
import Call from "../Components/Call"
import Another from "../Components/Another"

import Portfolio from "../Components/Casestudy"
import Team from "../Components/Team"
import Blog from "../Components/Blog"
import Contact from "../Components/Contact"
import aos from "../public/assets/vendor/aos/aos";
import "../public/assets/css/main.css";
import "../public/assets/css/variables-blue.css"
import "../public/assets/css/variables-green.css"
import "../public/assets/css/variables-orange.css"
import "../public/assets/css/variables-pink.css"
import "../public/assets/css/variables-purple.css"
import "../public/assets/css/variables-red.css"
import "../public/assets/css/variables.css"
import Testimonial from "../Components/Testimonial";
export default function Home() {
  useEffect(() => {
    aos.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <>
     <Navbar/>
     <Service/>
     <About/>
     <Client/>
     <Call/>
     <Another/>
     <Testimonial/>
     <Portfolio/>
     <Team/>
     <Blog/>
     <Contact/>
     </>
  );
}
