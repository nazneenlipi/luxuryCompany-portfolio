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
export const Technologies = () => {
  return (
    <div>
         <section className="py-20 bg-black border-t border-gold/10">
              <div className="container mx-auto px-4 md:px-6">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={staggerContainer}
                  className="text-center mb-16"
                >
                  <motion.div variants={fadeIn} className="inline-block mb-4">
                    <span className="text-gold border-b border-gold pb-1 uppercase text-sm tracking-wider">
                      Our Technologies
                    </span>
                  </motion.div>
                  <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6">
                    Cutting-Edge <span className="gold-text">Technologies</span>
                  </motion.h2>
                  <motion.p variants={fadeIn} className="text-offwhite/80 max-w-2xl mx-auto">
                    We leverage the latest technologies and frameworks to deliver high-performance, scalable, and future-proof
                    solutions for our clients.
                  </motion.p>
                </motion.div>
      
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={staggerContainer}
                  className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                  {[
                    "React",
                    "Next.js",
                    "Vue.js",
                    "Angular",
                    "Node.js",
                    "Python",
                    "PHP",
                    "Ruby on Rails",
                    "AWS",
                    "Google Cloud",
                    "Azure",
                    "Vercel",
                    "MongoDB",
                    "PostgreSQL",
                    "MySQL",
                    "Firebase",
                  ].map((tech, index) => (
                    <motion.div
                      key={index}
                      variants={fadeIn}
                      className="bg-black/50 border border-gold/20 p-6 flex items-center justify-center hover:border-gold/50 transition-all duration-300"
                    >
                      <span className="text-offwhite font-medium">{tech}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>
    </div>
  )
}


