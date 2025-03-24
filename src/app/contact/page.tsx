"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    alert("Thank you for your message. We'll get back to you soon!")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Contact Us Background"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-black/70 z-10"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.div variants={fadeIn} className="inline-block mb-4">
              <span className="text-gold border-b border-gold pb-1 uppercase text-sm tracking-wider">Get In Touch</span>
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Let's <span className="gold-text">Connect</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-offwhite/90 text-lg md:text-xl mb-8">
              Have a project in mind or want to learn more about our services? We'd love to hear from you. Reach out to
              us and let's start a conversation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12"
          >
            {/* Contact Form */}
            <motion.div variants={fadeIn} className="order-2 lg:order-1">
              <div className="bg-black/80 border border-gold/20 p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-black/50 border border-gold/30 text-offwhite px-4 py-3 focus:outline-none focus:border-gold"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-black/50 border border-gold/30 text-offwhite px-4 py-3 focus:outline-none focus:border-gold"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-gold/30 text-offwhite px-4 py-3 focus:outline-none focus:border-gold"
                        placeholder="Your phone (optional)"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-black/50 border border-gold/30 text-offwhite px-4 py-3 focus:outline-none focus:border-gold"
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Project Quote">Project Quote</option>
                        <option value="Support">Support</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-black/50 border border-gold/30 text-offwhite px-4 py-3 focus:outline-none focus:border-gold"
                      placeholder="Tell us about your project or inquiry"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full md:w-auto px-8 py-3 bg-gold text-black hover:bg-gold-light transition-colors duration-300 font-medium tracking-wide flex items-center justify-center"
                    >
                      Send Message <Send size={16} className="ml-2" />
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={fadeIn} className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-offwhite/80 mb-8">
                Feel free to reach out to us through any of the following channels. Our team is ready to assist you with
                any questions or inquiries you may have.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="bg-gold/10 p-3 rounded-sm mr-4">
                    <MapPin size={24} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Our Location</h4>
                    <p className="text-offwhite/70">123 Luxury Avenue, Suite 456, New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gold/10 p-3 rounded-sm mr-4">
                    <Phone size={24} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone Number</h4>
                    <p className="text-offwhite/70">+1 (555) 123-4567</p>
                    <p className="text-offwhite/70">+1 (555) 987-6543</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gold/10 p-3 rounded-sm mr-4">
                    <Mail size={24} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email Address</h4>
                    <p className="text-offwhite/70">info@luxurybrand.com</p>
                    <p className="text-offwhite/70">support@luxurybrand.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gold/10 p-3 rounded-sm mr-4">
                    <Clock size={24} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Working Hours</h4>
                    <p className="text-offwhite/70">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-offwhite/70">Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-gold/10 p-3 hover:bg-gold/20 transition-colors">
                  <Facebook size={24} className="text-gold" />
                </a>
                <a href="#" className="bg-gold/10 p-3 hover:bg-gold/20 transition-colors">
                  <Twitter size={24} className="text-gold" />
                </a>
                <a href="#" className="bg-gold/10 p-3 hover:bg-gold/20 transition-colors">
                  <Instagram size={24} className="text-gold" />
                </a>
                <a href="#" className="bg-gold/10 p-3 hover:bg-gold/20 transition-colors">
                  <Linkedin size={24} className="text-gold" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
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

      {/* FAQ Section */}
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

      {/* CTA Section */}
      <section className="py-20 bg-black/95 border-t border-gold/10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="gold-text">Start</span> Your Project?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-offwhite/90 text-lg mb-8">
              Contact us today to discuss your project requirements and how we can help bring your vision to life.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-gold text-black hover:bg-gold-light transition-colors duration-300 font-medium tracking-wide"
              >
                Get a Quote
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-3 bg-transparent border border-gold text-gold hover:bg-gold/10 transition-colors duration-300 font-medium tracking-wide"
              >
                View Our Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

