"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle, Users, Award, Clock, Shield, ArrowRight } from "lucide-react"

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

const team = [
  {
    name: "Alexander Smith",
    position: "Founder & CEO",
    image: "/men.jpg",
    bio: "With over 20 years of experience in the industry, Alexander founded Luxury Brand with a vision to create exceptional digital experiences.",
  },
  {
    name: "Sophia Johnson",
    position: "Creative Director",
    image: "/men.jpg",
    bio: "Sophia leads our creative team with her innovative approach to design and branding, ensuring each project exceeds client expectations.",
  },
  {
    name: "Michael Chen",
    position: "Technical Director",
    image: "/men.jpg",
    bio: "Michael oversees all technical aspects of our projects, bringing cutting-edge solutions and flawless implementation to every client.",
  },
  {
    name: "Emily Williams",
    position: "Client Relations Manager",
    image: "/men.jpg",
    bio: "Emily ensures seamless communication between our team and clients, making sure every project runs smoothly from start to finish.",
  },
]

const values = [
  {
    icon: <Users className="text-gold" size={24} />,
    title: "Client-Centric Approach",
    description:
      "We prioritize our clients' needs and goals, ensuring every solution is tailored to their specific requirements.",
  },
  {
    icon: <Award className="text-gold" size={24} />,
    title: "Excellence in Execution",
    description:
      "We strive for perfection in every aspect of our work, from design and development to delivery and support.",
  },
  {
    icon: <Clock className="text-gold" size={24} />,
    title: "Timely Delivery",
    description:
      "We understand the importance of deadlines and ensure all projects are completed on time without compromising quality.",
  },
  {
    icon: <Shield className="text-gold" size={24} />,
    title: "Integrity & Transparency",
    description:
      "We maintain the highest standards of integrity in all our dealings, with transparent communication throughout the project lifecycle.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg.jpg"
            alt="About Us Background"
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
              <span className="text-gold border-b border-gold pb-1 uppercase text-sm tracking-wider">About Us</span>
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our <span className="gold-text">Story</span> of Excellence
            </motion.h1>

            <motion.p variants={fadeIn} className="text-offwhite/90 text-lg md:text-xl mb-8">
              Founded in 2008, Luxury Brand has grown from a small design studio to a full-service digital agency,
              helping businesses transform their digital presence with sophisticated solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeIn}>
              <div className="relative h-[500px] w-full">
                <Image src="/about.jpg" alt="Our History" fill className="object-cover" />
                <div className="absolute -bottom-6 -right-6 bg-black p-6 border border-gold/30">
                  <p className="text-4xl font-bold gold-text">2008</p>
                  <p className="text-offwhite/80 text-sm">Year Founded</p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeIn}>
              <div className="inline-block mb-4">
                <span className="text-gold border-b border-gold pb-1 uppercase text-sm tracking-wider">
                  Our History
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                From <span className="gold-text">Vision</span> to Reality
              </h2>
              <p className="text-offwhite/80 mb-6 leading-relaxed">
                Luxury Brand was founded by Alexander Smith with a vision to create digital experiences that combine
                aesthetic excellence with technical innovation. What began as a small design studio has evolved into a
                comprehensive digital agency serving clients across various industries.
              </p>
              <p className="text-offwhite/80 mb-6 leading-relaxed">
                Over the years, we've expanded our services to include web development, mobile applications, branding,
                and digital marketing, always maintaining our commitment to quality and client satisfaction.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-24 text-right pr-4">
                    <span className="text-gold font-bold">2008</span>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-gold"></div>
                  <div className="pl-4">
                    <p className="text-offwhite/80">Founded as a design studio</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 text-right pr-4">
                    <span className="text-gold font-bold">2012</span>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-gold"></div>
                  <div className="pl-4">
                    <p className="text-offwhite/80">Expanded to web development services</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 text-right pr-4">
                    <span className="text-gold font-bold">2015</span>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-gold"></div>
                  <div className="pl-4">
                    <p className="text-offwhite/80">Added mobile app development</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 text-right pr-4">
                    <span className="text-gold font-bold">2018</span>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-gold"></div>
                  <div className="pl-4">
                    <p className="text-offwhite/80">Introduced digital marketing services</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 text-right pr-4">
                    <span className="text-gold font-bold">2020</span>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-gold"></div>
                  <div className="pl-4">
                    <p className="text-offwhite/80">Opened international offices</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
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
              <span className="text-gold border-b border-gold pb-1 uppercase text-sm tracking-wider">Our Purpose</span>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6">
              Mission & <span className="gold-text">Vision</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeIn} className="bg-black border border-gold/20 p-10">
              <h3 className="text-2xl font-bold mb-6 gold-text">Our Mission</h3>
              <p className="text-offwhite/80 mb-6 leading-relaxed">
                To empower businesses with innovative digital solutions that enhance their brand presence, improve
                customer engagement, and drive sustainable growth.
              </p>
              <p className="text-offwhite/80 leading-relaxed">
                We are committed to delivering excellence in every project, combining creativity with technical
                expertise to solve complex challenges and exceed client expectations.
              </p>
            </motion.div>
            <motion.div variants={fadeIn} className="bg-black border border-gold/20 p-10">
              <h3 className="text-2xl font-bold mb-6 gold-text">Our Vision</h3>
              <p className="text-offwhite/80 mb-6 leading-relaxed">
                To be the leading digital agency known for creating exceptional experiences that transform businesses
                and set new standards in the industry.
              </p>
              <p className="text-offwhite/80 leading-relaxed">
                We envision a future where our innovative solutions help businesses thrive in an increasingly digital
                world, making technology accessible and impactful for all.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
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
                What We Stand For
              </span>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6">
              Our Core <span className="gold-text">Values</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-offwhite/80 max-w-2xl mx-auto">
              These principles guide our work and define our culture, ensuring we deliver the highest quality service to
              our clients.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-black border border-gold/20 p-8 hover:border-gold/50 transition-all duration-300"
              >
                <div className="mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-offwhite/70">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
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
                The People Behind Our Success
              </span>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6">
              Meet Our <span className="gold-text">Team</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-offwhite/80 max-w-2xl mx-auto">
              Our talented team of professionals brings together diverse skills and expertise to deliver exceptional
              results.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div key={index} variants={fadeIn} className="group">
                <div className="relative overflow-hidden mb-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={400}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="flex space-x-3">
                      <a href="#" className="text-gold hover:text-gold-light">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                      <a href="#" className="text-gold hover:text-gold-light">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                      <a href="#" className="text-gold hover:text-gold-light">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gold text-sm mb-3">{member.position}</p>
                <p className="text-offwhite/70 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeIn}>
              <div className="inline-block mb-4">
                <span className="text-gold border-b border-gold pb-1 uppercase text-sm tracking-wider">
                  Our Culture
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Life at <span className="gold-text">Luxury Brand</span>
              </h2>
              <p className="text-offwhite/80 mb-6 leading-relaxed">
                At Luxury Brand, we foster a culture of creativity, collaboration, and continuous learning. Our team
                members are encouraged to think outside the box, share ideas, and push boundaries to deliver exceptional
                results.
              </p>
              <p className="text-offwhite/80 mb-8 leading-relaxed">
                We believe in maintaining a healthy work-life balance and provide a supportive environment where
                everyone can thrive professionally and personally.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-gold mr-3 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Collaborative Environment</h4>
                    <p className="text-offwhite/70 text-sm">
                      We work together across departments to achieve common goals
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-gold mr-3 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Continuous Learning</h4>
                    <p className="text-offwhite/70 text-sm">Regular training and development opportunities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={20} className="text-gold mr-3 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Work-Life Balance</h4>
                    <p className="text-offwhite/70 text-sm">
                      Flexible working arrangements to support personal wellbeing
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeIn} className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src="/28.jpg"
                  alt="Office Life"
                  width={250}
                  height={300}
                  className="w-full h-auto"
                />
                <Image
                  src="/29.jpg"
                  alt="Team Building"
                  width={250}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
              <div className="space-y-4 pt-8">
                <Image
                  src="/30.jpg"
                  alt="Brainstorming"
                  width={250}
                  height={200}
                  className="w-full h-auto"
                />
                <Image
                  src="/31.jpg"
                  alt="Company Event"
                  width={250}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
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
              Ready to <span className="gold-text">Work</span> With Us?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-offwhite/90 text-lg mb-8">
              Let's collaborate to create exceptional digital experiences that elevate your brand and drive results.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-gold text-black hover:bg-gold-light transition-colors duration-300 font-medium tracking-wide"
              >
                Contact Us
              </Link>
              <Link
                href="/service"
                className="px-8 py-3 bg-transparent border border-gold text-gold hover:bg-gold/10 transition-colors duration-300 font-medium tracking-wide flex items-center justify-center"
              >
                Our Services <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

