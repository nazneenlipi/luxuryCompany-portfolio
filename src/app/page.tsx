"use client";

import { About } from "./homeComponents/about";
import { Choose } from "./homeComponents/choose";
import { Clients } from "./homeComponents/clients";
import { Cta } from "./homeComponents/cta";
import { Hero } from "./homeComponents/Hero";
import { Services } from "./homeComponents/services";
import { Statistics } from "./homeComponents/statistics";
import { Testimonials } from "./homeComponents/testimonials";

export default function Home() {


  
  return (
    <>
    <Hero/>
    <About/>
    <Services/>
    <Choose/>
    <Statistics/>
    <Testimonials/>
    <Clients/>
    <Cta/>
    </>
  );
}
