import { ArrowRight, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { services } from '../../../data'
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
export const Services = () => {
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
              <span className="text-gold border-b border-gold pb-1 uppercase text-sm tracking-wider">
                Our Services
              </span>
            </motion.div>
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Premium <span className="gold-text">Solutions</span> for Your
              Business
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-offwhite/80 max-w-2xl mx-auto"
            >
              We offer a comprehensive range of services designed to help your
              business thrive in the digital landscape.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-black border border-gold/20 p-8 hover:border-gold/50 transition-all duration-300 group"
              >
                <div className="mb-6">
                  <Image
                    src={service.icon || "/placeholder.svg"}
                    alt={service.title}
                    width={40}
                    height={40}
                    className="text-gold"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-offwhite/70 mb-6">{service.description}</p>
                <Link
                  href="/service"
                  className="inline-flex items-center text-gold group-hover:text-gold-light transition-colors"
                >
                  Learn More{" "}
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:ml-3 transition-all"
                  />
                </Link>
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
              href="/service"
              className="px-8 py-3 bg-gold text-black hover:bg-gold-light transition-colors duration-300 font-medium tracking-wide inline-flex items-center"
            >
              View All Services <ChevronRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


