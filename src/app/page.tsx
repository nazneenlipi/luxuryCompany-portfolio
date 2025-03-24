"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronRight, Award, Clock, Users, CheckCircle, ArrowRight } from "lucide-react"

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

const services = [
  {
    icon: "/placeholder.svg?height=40&width=40",
    title: "Web Development",
    description: "Custom websites with elegant design and powerful functionality",
  },
  {
    icon: "/placeholder.svg?height=40&width=40",
    title: "Mobile Applications",
    description: "Native and cross-platform apps with seamless user experience",
  },
  {
    icon: "/placeholder.svg?height=40&width=40",
    title: "UI/UX Design",
    description: "Intuitive interfaces that enhance user engagement and satisfaction",
  },
  {
    icon: "/placeholder.svg?height=40&width=40",
    title: "Branding",
    description: "Distinctive brand identity that resonates with your target audience",
  },
]

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "1200+", label: "Projects Completed" },
  { value: "15+", label: "Years Experience" },
  { value: "25+", label: "Industry Awards" },
]

const clients = [
  "/placeholder.svg?height=60&width=120",
  "/placeholder.svg?height=60&width=120",
  "/placeholder.svg?height=60&width=120",
  "/placeholder.svg?height=60&width=120",
  "/placeholder.svg?height=60&width=120",
]

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0])

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Luxury Background"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="gold-text">We Build Smart Solutions</span>
              <br />
              <span className="text-offwhite">for Your Business</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-offwhite/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Elevating brands with sophisticated design and innovative technology solutions that drive growth and
              enhance customer experience.
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
                className="px-8 py-3 bg-transparent border border-gold text-gold hover:bg-gold/10 transition-colors duration-300 font-medium tracking-wide flex items-center justify-center"
              >
                View Our Work <ChevronRight size={16} className="ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="w-1.5 h-3 bg-gold rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* About Company Section */}
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
                <span className="text-gold border-b border-gold pb-1 uppercase text-sm tracking-wider">About Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Crafting <span className="gold-text">Exceptional Digital</span> Experiences Since 2008
              </h2>
              <p className="text-offwhite/80 mb-6 leading-relaxed">
                We are a premium digital agency specializing in creating sophisticated solutions for businesses across
                various industries. Our team of experts combines creativity with technical expertise to deliver results
                that exceed expectations.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-gold mr-3 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Innovation</h4>
                    <p className="text-offwhite/70 text-sm">Cutting-edge solutions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-gold mr-3 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Quality</h4>
                    <p className="text-offwhite/70 text-sm">Attention to detail</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-gold mr-3 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Reliability</h4>
                    <p className="text-offwhite/70 text-sm">Consistent performance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-gold mr-3 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Support</h4>
                    <p className="text-offwhite/70 text-sm">24/7 client assistance</p>
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
            <motion.div variants={fadeIn} className="order-1 md:order-2 relative">
              <div className="relative h-[500px] w-full">
                <Image src="/placeholder.svg?height=600&width=500" alt="About Us" fill className="object-cover" />
                <div className="absolute -bottom-6 -left-6 bg-black p-6 border border-gold/30">
                  <p className="text-4xl font-bold gold-text">15+</p>
                  <p className="text-offwhite/80 text-sm">Years of Experience</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
              <span className="text-gold border-b border-gold pb-1 uppercase text-sm tracking-wider">Our Services</span>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6">
              Premium <span className="gold-text">Solutions</span> for Your Business
            </motion.h2>
            <motion.p variants={fadeIn} className="text-offwhite/80 max-w-2xl mx-auto">
              We offer a comprehensive range of services designed to help your business thrive in the digital landscape.
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
                  href="/services"
                  className="inline-flex items-center text-gold group-hover:text-gold-light transition-colors"
                >
                  Learn More <ArrowRight size={16} className="ml-2 group-hover:ml-3 transition-all" />
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
              href="/services"
              className="px-8 py-3 bg-gold text-black hover:bg-gold-light transition-colors duration-300 font-medium tracking-wide inline-flex items-center"
            >
              View All Services <ChevronRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-black" ref={targetRef}>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div style={{ opacity, y }} className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-[500px] w-full">
                <Image src="/placeholder.svg?height=600&width=500" alt="Why Choose Us" fill className="object-cover" />
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
                The <span className="gold-text">Perfect Blend</span> of Creativity and Technology
              </h2>
              <p className="text-offwhite/80 mb-8 leading-relaxed">
                We combine artistic vision with technical expertise to create solutions that are not only visually
                stunning but also functionally superior.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gold/10 p-3 rounded-sm mr-4">
                    <Award size={24} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Award-Winning Design</h4>
                    <p className="text-offwhite/70">
                      Our designs have been recognized by industry leaders for their excellence and innovation.
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
                      We understand the importance of deadlines and ensure timely completion of all projects.
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
                      Our support team is available 24/7 to address any concerns or questions you may have.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-black/90 border-y border-gold/10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeIn} className="text-center">
                <p className="text-4xl md:text-5xl font-bold gold-text mb-2">{stat.value}</p>
                <p className="text-offwhite/70 uppercase text-sm tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-20 bg-black">
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
                Our Portfolio
              </span>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="gold-text">Recent Projects</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-offwhite/80 max-w-2xl mx-auto">
              Explore our latest work and see how we've helped businesses achieve their goals through innovative
              solutions.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <motion.div key={index} variants={fadeIn} className="group relative overflow-hidden">
                <div className="relative h-[300px] w-full">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=Project+${item}`}
                    alt={`Project ${item}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold mb-2">Project Title {item}</h3>
                  <p className="text-offwhite/80 mb-4">Web Design / Development</p>
                  <Link
                    href={`/portfolio/project-${item}`}
                    className="text-gold hover:text-gold-light transition-colors inline-flex items-center"
                  >
                    View Details <ArrowRight size={16} className="ml-2" />
                  </Link>
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
              href="/portfolio"
              className="px-8 py-3 bg-transparent border border-gold text-gold hover:bg-gold/10 transition-colors duration-300 font-medium tracking-wide inline-flex items-center"
            >
              View All Projects <ChevronRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Preview */}
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
              <span className="text-gold border-b border-gold pb-1 uppercase text-sm tracking-wider">Testimonials</span>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6">
              What Our <span className="gold-text">Clients Say</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-offwhite/80 max-w-2xl mx-auto">
              Don't just take our word for it. Hear what our clients have to say about working with us.
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
                Working with Luxury Brand has been an exceptional experience. Their team's attention to detail and
                commitment to excellence resulted in a website that perfectly captures our brand's essence. The project
                was delivered on time and exceeded our expectations.
              </p>
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
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
              href="/testimonials"
              className="text-gold hover:text-gold-light transition-colors inline-flex items-center"
            >
              Read More Testimonials <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-black border-t border-gold/10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-10"
          >
            <h3 className="text-2xl font-bold mb-4">Trusted By</h3>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
          >
            {clients.map((client, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={client || "/placeholder.svg"}
                  alt={`Client ${index + 1}`}
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="CTA Background"
            fill
            className="object-cover brightness-25"
          />
          <div className="absolute inset-0 bg-black/80 z-10"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="gold-text">Transform</span> Your Business?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-offwhite/90 text-lg mb-8">
              Let's collaborate to create exceptional digital experiences that elevate your brand and drive results.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-gold text-black hover:bg-gold-light transition-colors duration-300 font-medium tracking-wide"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="px-8 py-3 bg-transparent border border-gold text-gold hover:bg-gold/10 transition-colors duration-300 font-medium tracking-wide"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

