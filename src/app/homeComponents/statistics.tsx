import React from 'react'
import { stats } from '../../../data'
import { motion} from "framer-motion";
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
export const Statistics = () => {
  return (
    <div>
         <section className="py-16 bg-black/90 border-y border-gold/10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeIn} className="text-center">
                <p className="text-4xl md:text-5xl font-bold gold-text mb-2">
                  {stat.value}
                </p>
                <p className="text-offwhite/70 uppercase text-sm tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}


