import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
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
export const Hero = () => {

  return (
    <div>
       <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Image */}
        {/* <div className="absolute inset-0 z-0">
         
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div> */}

        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="gold-text">We Build Smart Solutions</span>
              <br />
              <span className="text-offwhite">for Your Business</span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-offwhite/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            >
              Elevating brands with sophisticated design and innovative
              technology solutions that drive growth and enhance customer
              experience.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 justify-center "
            >
              <Link
                href="/contact">
              
                <p className="px-8 py-3 bg-transparent border border-gold text-gold hover:bg-white transition-colors duration-300 font-medium tracking-wide flex items-center justify-center"
             > Get a Quote</p>
              </Link>
              <Link
                href="https://nazneen.info" 
                className="px-8 py-3 bg-transparent border border-gold text-gold hover:bg-gold/10 transition-colors duration-300 font-medium tracking-wide flex items-center justify-center"
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Our Work <ChevronRight size={16} className="ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="w-1.5 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}


