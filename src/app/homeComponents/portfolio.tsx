import Image from 'next/image'
import React from 'react'
import { projects } from '../../../data'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { motion } from "framer-motion";
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
export const Portfolio = () => {
  return (
    <div>
      <section className="py-20 bg-black">
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
                Our Portfolio
              </span>
            </motion.div>
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Our <span className="gold-text">Recent Projects</span>
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-offwhite/80 max-w-2xl mx-auto"
            >
              Explore our latest work and see how we have helped businesses
              achieve their goals through innovative solutions.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeIn}
                className="group relative overflow-hidden"
              >
                <div className="relative h-[300px] w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-offwhite/80 mb-4">{project.category}</p>
                  <Link
                    href="/contact"
                    className="text-gold hover:text-gold-light transition-colors inline-flex items-center"
                  >
                    View Details <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mt-12"
          >
            <Link
              href="/portfolio"
              className="px-8 py-3 bg-transparent border border-gold text-gold hover:bg-gold/10 transition-colors duration-300 font-medium tracking-wide inline-flex items-center"
            >
              View All Projects <ChevronRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


