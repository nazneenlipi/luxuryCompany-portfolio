import { ArrowRight, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
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
export const About = () => {
  return (
    <div>
           <section className="py-20 bg-black">
              <div className="container mx-auto px-4 md:px-6">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={staggerContainer}
                  className="grid md:grid-cols-2 gap-12 items-center"
                >
                  <motion.div variants={fadeIn} className="order-2 md:order-1">
                    <div className="inline-block mb-4">
                      <span className="text-gold border-b border-gold pb-1 uppercase text-sm tracking-wider">
                        About Us
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                      Crafting <span className="gold-text">Exceptional Digital</span>{" "}
                      Experiences Since 2008
                    </h2>
                    <p className="text-offwhite/80 mb-6 leading-relaxed">
                      We are a premium digital agency specializing in creating
                      sophisticated solutions for businesses across various
                      industries. Our team of experts combines creativity with
                      technical expertise to deliver results that exceed expectations.
                    </p>
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="flex items-start">
                        <CheckCircle
                          size={20}
                          className="text-gold mr-3 mt-1 shrink-0"
                        />
                        <div>
                          <h4 className="font-bold mb-1">Innovation</h4>
                          <p className="text-offwhite/70 text-sm">
                            Cutting-edge solutions
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle
                          size={20}
                          className="text-gold mr-3 mt-1 shrink-0"
                        />
                        <div>
                          <h4 className="font-bold mb-1">Quality</h4>
                          <p className="text-offwhite/70 text-sm">
                            Attention to detail
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle
                          size={20}
                          className="text-gold mr-3 mt-1 shrink-0"
                        />
                        <div>
                          <h4 className="font-bold mb-1">Reliability</h4>
                          <p className="text-offwhite/70 text-sm">
                            Consistent performance
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle
                          size={20}
                          className="text-gold mr-3 mt-1 shrink-0"
                        />
                        <div>
                          <h4 className="font-bold mb-1">Support</h4>
                          <p className="text-offwhite/70 text-sm">
                            24/7 client assistance
                          </p>
                        </div>
                      </div>
                    </div>
                    <Link
                      href="/about"
                      className="inline-flex items-center text-gold hover:text-gold-light transition-colors"
                    >
                      Learn More About Us <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </motion.div>
                  <motion.div
                    variants={fadeIn}
                    className="order-1 md:order-2 relative"
                  >
                    <div className="relative h-[500px] w-full">
                      <Image
                        src="/about.jpg"
                        alt="About Us"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute -bottom-6 -left-6 bg-black p-6 border border-gold/30">
                        <p className="text-4xl font-bold gold-text">15+</p>
                        <p className="text-offwhite/80 text-sm">
                          Years of Experience
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </section>
    </div>
  )
}


