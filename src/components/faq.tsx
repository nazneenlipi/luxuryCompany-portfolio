import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import Link from 'next/link';
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
export const Faq = () => {
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
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked <span className="gold-text">Questions</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-offwhite/80 max-w-2xl mx-auto">
              Find answers to common questions about our services and process.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto space-y-6"
          >
            {[
              {
                question: "What services do you offer?",
                answer:
                  "We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, branding, and digital marketing. Each service is tailored to meet the specific needs of our clients.",
              },
              {
                question: "How much does a typical project cost?",
                answer:
                  "Project costs vary depending on the scope, complexity, and specific requirements. We provide detailed quotes after an initial consultation to understand your needs. Contact us to discuss your project and get a personalized estimate.",
              },
              {
                question: "What is your typical project timeline?",
                answer:
                  "Project timelines depend on the scope and complexity. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. We provide detailed timelines during the proposal phase.",
              },
              {
                question: "Do you offer ongoing support after project completion?",
                answer:
                  "Yes, we offer various support and maintenance packages to ensure your digital assets continue to perform optimally. Our team is available for updates, troubleshooting, and enhancements as needed.",
              },
            ].map((faq, index) => (
              <motion.div key={index} variants={fadeIn} className="bg-black border border-gold/20 p-6">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-offwhite/70">{faq.answer}</p>
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
            <Link href="/faq" className="text-gold hover:text-gold-light transition-colors">
              View all FAQs
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
