import React from 'react'
import { clients } from '../../../data'
import Image from 'next/image'
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
export const Clients = () => {
  return (
    <div>
        <section className="py-16 bg-black border-t border-gold/10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-10"
          >
            <h3 className="text-2xl font-bold mb-4">Trusted By</h3>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
          >
            {clients.map((client, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={client || "/placeholder.svg"}
                  alt={`Client ${index + 1}`}
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}


