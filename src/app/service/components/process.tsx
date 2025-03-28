import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import { workprocess } from '../../../../data';
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
export const Process = () => {
  return (
    <div>
       <section className="py-20 bg-black/95">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeIn} className="inline-block mb-4">
              <span className="text-gold border-b border-gold pb-1 uppercase text-sm tracking-wider">Our Process</span>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6">
              How We <span className="gold-text">Work</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-offwhite/80 max-w-2xl mx-auto">
              Our structured approach ensures that every project is delivered with excellence, on time, and within
              budget.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[15px] md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gold/30"></div>

              {/* Process Steps */}
              {workprocess.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className={`relative flex flex-col md:flex-row items-start mb-16 last:mb-0 ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Number */}
                  <div
                    className={`absolute left-0 md:static flex items-center justify-center w-8 h-8 rounded-full bg-gold text-black font-bold z-10 ${
                      index % 2 === 1 ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    {step.id.split("")[1]}
                  </div>

                  {/* Content */}
                  <div
                    className={`pl-12 md:pl-0 md:w-[calc(50%-2rem)] ${
                      index % 2 === 1 ? "md:pr-12 md:text-right md:order-2" : "md:pl-12 md:text-left md:order-1"
                    }`}
                  >
                    <span className="text-gold text-sm font-bold">{step.id}</span>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-offwhite/70">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

