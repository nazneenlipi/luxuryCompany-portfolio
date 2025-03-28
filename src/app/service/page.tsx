"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Cta } from "@/components/cta";
import { Faq } from "@/components/faq";
import { Services } from "./components/services";
import { Process } from "./components/process";
import { Technologies } from "./components/technologies";
import { Testimonials } from "./components/testimonials";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg.jpg"
            alt="Services Background"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-black/70 z-10"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeIn} className="inline-block mb-4">
              <span className="text-gold border-b border-gold pb-1 uppercase text-sm tracking-wider">
                Our Services
              </span>
            </motion.div>
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Premium <span className="gold-text">Solutions</span> for Your
              Business
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-offwhite/90 text-lg md:text-xl mb-8"
            >
              We offer a comprehensive range of services designed to help your
              business thrive in the digital landscape, combining creativity
              with technical expertise.
            </motion.p>
          </motion.div>
        </div>
      </section>
      <Services />
      <Process />
      <Technologies />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}
