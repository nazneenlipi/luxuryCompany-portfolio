import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
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
export const Cta = () => {
  return (
    <div>
         <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="CTA Background"
            fill
            className="object-cover brightness-25"
          />
          <div className="absolute inset-0 bg-black/80 z-10"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to <span className="gold-text">Transform</span> Your
              Business?
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-offwhite/90 text-lg mb-8"
            >
              Lets collaborate to create exceptional digital experiences that
              elevate your brand and drive results.
            </motion.p>
            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="px-8 py-3 bg-gold text-black hover:bg-white transition-colors duration-300 font-medium tracking-wide"
              >
                Get Started
              </Link>
              <Link
                href="/service"
                className="px-8 py-3 bg-transparent border border-gold text-gold hover:bg-gold/10 transition-colors duration-300 font-medium tracking-wide"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


