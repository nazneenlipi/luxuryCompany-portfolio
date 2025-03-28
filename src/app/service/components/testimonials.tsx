import React from 'react'
import { motion, } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
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
                Client Feedback
              </span>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6">
              What Our <span className="gold-text">Clients Say</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                quote:
                  "Working with Luxury Brand has been an exceptional experience. Their teams attention to detail and commitment to excellence resulted in a website that perfectly captures our brands essence.",
                name: "John Smith",
                position: "CEO, Global Enterprises",
                image: "/men.jpg",
              },
              {
                quote:
                  "The mobile application developed by Luxury Brand has significantly improved our customer engagement and sales. Their innovative approach and technical expertise are truly impressive.",
                name: "Sarah Johnson",
                position: "Marketing Director, Tech Solutions",
                image: "/men.jpg",
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeIn} className="bg-black border border-gold/20 p-8 relative">
                <div className="text-5xl text-gold/20 absolute top-6 left-6">"</div>
                <div className="relative z-10">
                  <p className="text-offwhite/90 italic mb-8 leading-relaxed">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-gold text-sm">{testimonial.position}</p>
                    </div>
                  </div>
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
              href="/testimonials"
              className="text-gold hover:text-gold-light transition-colors inline-flex items-center"
            >
              View All Testimonials <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


