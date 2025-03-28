import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import { services1 } from '../../../../data';
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
         <section className="py-20 bg-black">
              <div className="container mx-auto px-4 md:px-6">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={staggerContainer}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {services1.map((service, index) => (
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
                      <p className="text-offwhite/70 mb-6">{service.shortDesc}</p>
                      <Link
                        href={`/service/${service.id}`}
                        className="inline-flex items-center text-gold group-hover:text-gold-light transition-colors"
                      >
                        Learn More <ArrowRight size={16} className="ml-2 group-hover:ml-3 transition-all" />
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>
    </div>
  )
}


