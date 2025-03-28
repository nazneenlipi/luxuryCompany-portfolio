import { Award, Clock, Users } from 'lucide-react'
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
export const Choose = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
      });
      const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
      const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
        
  return (
    <div>
       <section className="py-20 bg-black" ref={targetRef}>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            style={{ opacity, y }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative">
              <div className="relative h-[500px] w-full">
                <Image
                  src="/choose.png"
                  alt="Why Choose Us"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
              </div>
            </div>
            <div>
              <div className="inline-block mb-4">
                <span className="text-gold border-b border-gold pb-1 uppercase text-sm tracking-wider">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                The <span className="gold-text">Perfect Blend</span> of
                Creativity and Technology
              </h2>
              <p className="text-offwhite/80 mb-8 leading-relaxed">
                We combine artistic vision with technical expertise to create
                solutions that are not only visually stunning but also
                functionally superior.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gold/10 p-3 rounded-sm mr-4">
                    <Award size={24} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Award-Winning Design</h4>
                    <p className="text-offwhite/70">
                      Our designs have been recognized by industry leaders for
                      their excellence and innovation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gold/10 p-3 rounded-sm mr-4">
                    <Clock size={24} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">On-Time Delivery</h4>
                    <p className="text-offwhite/70">
                      We understand the importance of deadlines and ensure
                      timely completion of all projects.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gold/10 p-3 rounded-sm mr-4">
                    <Users size={24} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Dedicated Support Team</h4>
                    <p className="text-offwhite/70">
                      Our support team is available 24/7 to address any concerns
                      or questions you may have.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}


