import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin } from 'lucide-react';
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
export const Map = () => {
  return (
    <div>
         <section className="py-10 bg-black/95">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="w-full h-[400px] md:h-[500px] relative"
          >
            {/* This is a placeholder for the Google Map. In a real implementation, you would use the Google Maps API */}
            <div className="w-full h-full bg-black/50 border border-gold/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Our Location</h3>
                <p className="text-offwhite/70">123 Luxury Avenue, Suite 456, New York, NY 10001</p>
                <p className="mt-4 text-sm text-offwhite/50">
                  (This is a placeholder for Google Maps. In a real implementation, you would integrate the Google Maps
                  API here.)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

