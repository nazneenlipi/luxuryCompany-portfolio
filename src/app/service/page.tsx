"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

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
    id: "web-development",
    title: "Web Development",
    shortDesc: "Custom websites with elegant design and powerful functionality",
    icon: "/logo.jpg",
    image: "/19.jpg",
    features: [
      "Responsive design for all devices",
      "Custom CMS integration",
      "E-commerce functionality",
      "Performance optimization",
      "SEO-friendly structure",
    ],
  },
  {
    id: "mobile-applications",
    title: "Mobile Applications",
    shortDesc: "Native and cross-platform apps with seamless user experience",
    icon: "/logo.jpg",
    image: "/25.jpg",
    features: [
      "iOS and Android development",
      "Cross-platform solutions",
      "UI/UX design for mobile",
      "App store optimization",
      "Ongoing maintenance and updates",
    ],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    shortDesc: "Intuitive interfaces that enhance user engagement and satisfaction",
    icon: "/logo.jpg",
    image: "/20.jpg",
    features: [
      "User research and personas",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Usability testing",
      "Interaction design",
    ],
  },
  {
    id: "branding",
    title: "Branding",
    shortDesc: "Distinctive brand identity that resonates with your target audience",
    icon: "/logo.jpg",
    image: "/22.jpg",
    features: [
      "Logo design and visual identity",
      "Brand strategy and positioning",
      "Brand guidelines and assets",
      "Marketing collateral",
      "Brand voice and messaging",
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    shortDesc: "Strategic campaigns that drive traffic, engagement, and conversions",
    icon: "/logo.jpg",
    image: "/23.jpg",
    features: [
      "SEO and content marketing",
      "Social media management",
      "PPC and display advertising",
      "Email marketing campaigns",
      "Analytics and reporting",
    ],
  },
  {
    id: "ecommerce-solutions",
    title: "E-commerce Solutions",
    shortDesc: "Robust online stores that drive sales and enhance customer experience",
    icon: "/logo.jpg",
    image: "/24.jpg",
    features: [
      "Custom e-commerce development",
      "Shopping cart and checkout optimization",
      "Payment gateway integration",
      "Inventory management",
      "Customer account management",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg.jpg"
            alt="Services Background"
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
              <span className="text-gold border-b border-gold pb-1 uppercase text-sm tracking-wider">Our Services</span>
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Premium <span className="gold-text">Solutions</span> for Your Business
            </motion.h1>

            <motion.p variants={fadeIn} className="text-offwhite/90 text-lg md:text-xl mb-8">
              We offer a comprehensive range of services designed to help your business thrive in the digital landscape,
              combining creativity with technical expertise.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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

      {/* Process Section */}
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
              <span className="text-gold border-b border-gold pb-1 uppercase text-sm tracking-wider">Our Process</span>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6">
              How We <span className="gold-text">Work</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-offwhite/80 max-w-2xl mx-auto">
              Our structured approach ensures that every project is delivered with excellence, on time, and within
              budget.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[15px] md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gold/30"></div>

              {/* Process Steps */}
              {[
                {
                  number: "01",
                  title: "Discovery & Research",
                  description:
                    "We begin by understanding your business, goals, target audience, and competition to establish a solid foundation for your project.",
                },
                {
                  number: "02",
                  title: "Strategy & Planning",
                  description:
                    "Based on our research, we develop a comprehensive strategy and detailed project plan to guide the development process.",
                },
                {
                  number: "03",
                  title: "Design & Development",
                  description:
                    "Our creative and technical teams work together to bring your project to life, with regular updates and feedback sessions.",
                },
                {
                  number: "04",
                  title: "Testing & Refinement",
                  description:
                    "We rigorously test all aspects of your project to ensure quality, performance, and user satisfaction.",
                },
                {
                  number: "05",
                  title: "Launch & Support",
                  description:
                    "After a successful launch, we provide ongoing support and maintenance to ensure your digital assets continue to perform optimally.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className={`relative flex flex-col md:flex-row items-start mb-16 last:mb-0 ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Number */}
                  <div
                    className={`absolute left-0 md:static flex items-center justify-center w-8 h-8 rounded-full bg-gold text-black font-bold z-10 ${
                      index % 2 === 1 ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    {step.number.split("")[1]}
                  </div>

                  {/* Content */}
                  <div
                    className={`pl-12 md:pl-0 md:w-[calc(50%-2rem)] ${
                      index % 2 === 1 ? "md:pr-12 md:text-right md:order-2" : "md:pl-12 md:text-left md:order-1"
                    }`}
                  >
                    <span className="text-gold text-sm font-bold">{step.number}</span>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-offwhite/70">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-black border-t border-gold/10">
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
                Our Technologies
              </span>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6">
              Cutting-Edge <span className="gold-text">Technologies</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-offwhite/80 max-w-2xl mx-auto">
              We leverage the latest technologies and frameworks to deliver high-performance, scalable, and future-proof
              solutions for our clients.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              "React",
              "Next.js",
              "Vue.js",
              "Angular",
              "Node.js",
              "Python",
              "PHP",
              "Ruby on Rails",
              "AWS",
              "Google Cloud",
              "Azure",
              "Vercel",
              "MongoDB",
              "PostgreSQL",
              "MySQL",
              "Firebase",
            ].map((tech, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-black/50 border border-gold/20 p-6 flex items-center justify-center hover:border-gold/50 transition-all duration-300"
              >
                <span className="text-offwhite font-medium">{tech}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
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
                  "Working with Luxury Brand has been an exceptional experience. Their team's attention to detail and commitment to excellence resulted in a website that perfectly captures our brand's essence.",
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
                question: "How long does it take to complete a project?",
                answer:
                  "Project timelines vary depending on the scope and complexity. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. We provide detailed timelines during the proposal phase.",
              },
              {
                question: "What is your pricing structure?",
                answer:
                  "We offer flexible pricing options including fixed-price quotes for well-defined projects and hourly rates for ongoing work. Each quote is tailored to the specific requirements of your project.",
              },
              {
                question: "Do you provide ongoing maintenance and support?",
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

