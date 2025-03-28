import { ArrowRight } from 'lucide-react'
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
export const Testimonials = () => {
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
                Testimonials
              </span>
            </motion.div>
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              What Our <span className="gold-text">Clients Say</span>
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-offwhite/80 max-w-2xl mx-auto"
            >
              Donot just take our word for it. Hear what our clients have to say
              about working with us.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeIn}
            className="max-w-4xl mx-auto bg-black border border-gold/20 p-10 relative"
          >
            <div className="text-5xl text-gold/20 absolute top-6 left-6">"</div>
            <div className="relative z-10">
              <p className="text-offwhite/90 text-lg italic mb-8 leading-relaxed">
                Working with Luxury Brand has been an exceptional experience.
                Their teams attention to detail and commitment to excellence
                resulted in a website that perfectly captures our brands
                essence. The project was delivered on time and exceeded our
                expectations.
              </p>
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/men.jpg"
                    alt="Client"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">John Smith</h4>
                  <p className="text-gold text-sm">CEO, Global Enterprises</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mt-12"
          >
            <Link
              href="/contact"
              className="text-gold hover:text-gold-light transition-colors inline-flex items-center"
            >
              Read More Testimonials <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


