"use client";

import { About } from "./homeComponents/about";
import { Choose } from "./homeComponents/choose";
import { Clients } from "./homeComponents/clients";
import { Cta } from "../components/cta";
import { Services } from "./homeComponents/services";
import { Statistics } from "./homeComponents/statistics";
import { Testimonials } from "./homeComponents/testimonials";
import { Hero } from "./homeComponents/hero";

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
