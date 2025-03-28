import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react'
import React, { useState } from 'react'
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
export const Contact = () => {
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
        alert("Thank you for your message. Well get back to you soon!")
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      }
  return (
    <div>
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
    </div>
  )
}

