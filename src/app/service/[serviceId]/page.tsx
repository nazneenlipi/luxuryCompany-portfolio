"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, ArrowLeft } from "lucide-react"

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

// Service data (in a real app, this would come from a database or API)
const services = [
  {
    id: "web-development",
    title: "Web Development",
    shortDesc: "Custom websites with elegant design and powerful functionality",
    longDesc:
      "Our web development services focus on creating custom, high-performance websites that align with your brand identity and business goals. We combine cutting-edge technologies with creative design to deliver websites that not only look stunning but also provide exceptional user experiences.",
    icon: "/placeholder.svg?height=40&width=40",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Responsive design for all devices",
      "Custom CMS integration",
      "E-commerce functionality",
      "Performance optimization",
      "SEO-friendly structure",
    ],
    process: [
      {
        title: "Discovery & Planning",
        description:
          "We begin by understanding your business, target audience, and goals to create a strategic plan for your website.",
      },
      {
        title: "Design & Prototyping",
        description:
          "Our designers create wireframes and visual designs that align with your brand identity and user experience goals.",
      },
      {
        title: "Development",
        description:
          "Our developers bring the designs to life using the latest technologies and best practices for performance and security.",
      },
      {
        title: "Testing & Launch",
        description:
          "We rigorously test your website across devices and browsers before launching it to ensure a flawless user experience.",
      },
      {
        title: "Maintenance & Support",
        description:
          "We provide ongoing support and maintenance to keep your website secure, up-to-date, and performing optimally.",
      },
    ],
    technologies: ["React", "Next.js", "Vue.js", "Node.js", "WordPress", "Shopify", "Laravel", "Express"],
    relatedServices: ["ui-ux-design", "digital-marketing", "ecommerce-solutions"],
  },
  {
    id: "mobile-applications",
    title: "Mobile Applications",
    shortDesc: "Native and cross-platform apps with seamless user experience",
    longDesc:
      "Our mobile application development services help businesses create powerful, user-friendly apps for iOS and Android platforms. Whether you need a native app for maximum performance or a cross-platform solution for broader reach, our team delivers mobile experiences that engage users and drive results.",
    icon: "/placeholder.svg?height=40&width=40",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "iOS and Android development",
      "Cross-platform solutions",
      "UI/UX design for mobile",
      "App store optimization",
      "Ongoing maintenance and updates",
    ],
    process: [
      {
        title: "Strategy & Planning",
        description:
          "We define your app's purpose, target audience, and key features to create a comprehensive development roadmap.",
      },
      {
        title: "UI/UX Design",
        description:
          "Our designers create intuitive, engaging interfaces that align with platform guidelines and user expectations.",
      },
      {
        title: "Development",
        description:
          "Our developers build your app using the appropriate technologies for your requirements, ensuring quality and performance.",
      },
      {
        title: "Testing",
        description:
          "We conduct thorough testing across devices and scenarios to identify and resolve any issues before launch.",
      },
      {
        title: "Deployment & Marketing",
        description:
          "We handle the app store submission process and provide guidance on marketing strategies to maximize downloads.",
      },
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS Amplify", "GraphQL", "REST APIs"],
    relatedServices: ["ui-ux-design", "web-development", "digital-marketing"],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    shortDesc: "Intuitive interfaces that enhance user engagement and satisfaction",
    longDesc:
      "Our UI/UX design services focus on creating intuitive, engaging, and aesthetically pleasing digital experiences. We combine user research, interaction design, and visual design to create interfaces that not only look beautiful but also provide seamless user experiences that drive engagement and conversions.",
    icon: "/placeholder.svg?height=40&width=40",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "User research and personas",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Usability testing",
      "Interaction design",
    ],
    process: [
      {
        title: "Research & Discovery",
        description:
          "We conduct user research and analyze competitors to understand user needs and market opportunities.",
      },
      {
        title: "Information Architecture",
        description:
          "We organize content and features in a logical structure that aligns with user expectations and business goals.",
      },
      {
        title: "Wireframing & Prototyping",
        description: "We create wireframes and interactive prototypes to visualize the user flow and interface layout.",
      },
      {
        title: "Visual Design",
        description:
          "Our designers develop the visual language, including color schemes, typography, and UI components.",
      },
      {
        title: "Testing & Iteration",
        description:
          "We conduct usability testing and iterate on the design based on user feedback to optimize the experience.",
      },
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Zeplin", "Maze", "UsabilityHub"],
    relatedServices: ["web-development", "mobile-applications", "branding"],
  },
  {
    id: "branding",
    title: "Branding",
    shortDesc: "Distinctive brand identity that resonates with your target audience",
    longDesc:
      "Our branding services help businesses establish a strong, cohesive identity that resonates with their target audience. From logo design and visual identity to brand strategy and messaging, we create comprehensive branding solutions that differentiate your business and build lasting connections with your customers.",
    icon: "/placeholder.svg?height=40&width=40",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Logo design and visual identity",
      "Brand strategy and positioning",
      "Brand guidelines and assets",
      "Marketing collateral",
      "Brand voice and messaging",
    ],
    process: [
      {
        title: "Brand Discovery",
        description:
          "We explore your business values, mission, target audience, and competitive landscape to inform the brand strategy.",
      },
      {
        title: "Brand Strategy",
        description:
          "We develop a strategic framework that defines your brand positioning, personality, and key messaging.",
      },
      {
        title: "Visual Identity",
        description:
          "Our designers create a visual system including logo, color palette, typography, and graphic elements.",
      },
      {
        title: "Brand Guidelines",
        description:
          "We compile comprehensive guidelines that ensure consistent application of your brand across all touchpoints.",
      },
      {
        title: "Implementation",
        description: "We apply the brand identity to key materials and provide guidance for ongoing brand management.",
      },
    ],
    technologies: [
      "Adobe Creative Suite",
      "Figma",
      "Brand Strategy Frameworks",
      "Market Research Tools",
      "Color Theory",
      "Typography",
    ],
    relatedServices: ["ui-ux-design", "digital-marketing", "web-development"],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    shortDesc: "Strategic campaigns that drive traffic, engagement, and conversions",
    longDesc:
      "Our digital marketing services help businesses reach their target audience, drive traffic, and generate leads through strategic online campaigns. From SEO and content marketing to social media and paid advertising, we develop comprehensive marketing strategies that align with your business goals and deliver measurable results.",
    icon: "/placeholder.svg?height=40&width=40",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "SEO and content marketing",
      "Social media management",
      "PPC and display advertising",
      "Email marketing campaigns",
      "Analytics and reporting",
    ],
    process: [
      {
        title: "Strategy Development",
        description:
          "We analyze your business goals, target audience, and competitive landscape to develop a tailored marketing strategy.",
      },
      {
        title: "Channel Selection",
        description:
          "We identify the most effective marketing channels based on your audience behavior and campaign objectives.",
      },
      {
        title: "Content Creation",
        description:
          "Our team creates compelling content that resonates with your audience and aligns with your brand voice.",
      },
      {
        title: "Campaign Execution",
        description: "We implement marketing campaigns across selected channels, optimizing for performance as we go.",
      },
      {
        title: "Analysis & Optimization",
        description:
          "We continuously monitor campaign performance and make data-driven adjustments to maximize results.",
      },
    ],
    technologies: [
      "Google Analytics",
      "SEMrush",
      "Ahrefs",
      "Google Ads",
      "Facebook Ads Manager",
      "Mailchimp",
      "HubSpot",
      "Hootsuite",
    ],
    relatedServices: ["branding", "web-development", "ecommerce-solutions"],
  },
  {
    id: "ecommerce-solutions",
    title: "E-commerce Solutions",
    shortDesc: "Robust online stores that drive sales and enhance customer experience",
    longDesc:
      "Our e-commerce solutions help businesses establish and grow their online retail presence. From custom e-commerce development to platform migration and optimization, we create online stores that provide seamless shopping experiences, efficient operations, and maximum conversion rates.",
    icon: "/placeholder.svg?height=40&width=40",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Custom e-commerce development",
      "Shopping cart and checkout optimization",
      "Payment gateway integration",
      "Inventory management",
      "Customer account management",
    ],
    process: [
      {
        title: "Requirements Analysis",
        description:
          "We analyze your business model, product catalog, and operational requirements to determine the best e-commerce approach.",
      },
      {
        title: "Platform Selection",
        description:
          "We help you select the most appropriate e-commerce platform based on your specific needs and growth plans.",
      },
      {
        title: "Design & Development",
        description:
          "Our team designs and develops your online store with a focus on user experience, brand consistency, and conversion optimization.",
      },
      {
        title: "Integration & Testing",
        description:
          "We integrate payment gateways, shipping methods, and other necessary systems, then thoroughly test the entire purchasing process.",
      },
      {
        title: "Launch & Optimization",
        description:
          "After launch, we monitor performance and user behavior to identify and implement optimizations that increase sales.",
      },
    ],
    technologies: [
      "Shopify",
      "WooCommerce",
      "Magento",
      "BigCommerce",
      "Stripe",
      "PayPal",
      "Inventory Management Systems",
      "CRM Integration",
    ],
    relatedServices: ["web-development", "digital-marketing", "ui-ux-design"],
  },
]

export default function ServiceDetailPage() {
  const params = useParams()
  const [service, setService] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would be an API call
    const serviceId = params.serviceId as string
    const foundService = services.find((s) => s.id === serviceId)

    if (foundService) {
      setService(foundService)
    }

    setLoading(false)
  }, [params])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-gold">Loading...</div>
      </div>
    )
  }

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <p className="text-offwhite/80 mb-8">The service you're looking for doesn't exist or has been moved.</p>
        <Link
          href="/services"
          className="px-8 py-3 bg-gold text-black hover:bg-gold-light transition-colors duration-300 font-medium tracking-wide"
        >
          View All Services
        </Link>
      </div>
    )
  }

  // Find related services
  const relatedServicesData = service.relatedServices
    ? service.relatedServices.map((id: string) => services.find((s) => s.id === id)).filter(Boolean)
    : []

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image || "/placeholder.svg"}
            alt={service.title}
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
              <Link
                href="/services"
                className="text-gold border-b border-gold pb-1 uppercase text-sm tracking-wider flex items-center"
              >
                <ArrowLeft size={14} className="mr-2" /> Back to Services
              </Link>
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {service.title}
            </motion.h1>

            <motion.p variants={fadeIn} className="text-offwhite/90 text-lg md:text-xl mb-8">
              {service.longDesc}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
                  Key Features
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                What Our <span className="gold-text">{service.title}</span> Service Includes
              </h2>
              <p className="text-offwhite/80 mb-8 leading-relaxed">
                Our comprehensive {service.title.toLowerCase()} service is designed to meet your specific needs and help
                your business achieve its goals.
              </p>

              <div className="space-y-4">
                {service.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-gold mr-3 mt-1 shrink-0" />
                    <p className="text-offwhite/80">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeIn}>
              <div className="relative h-[400px] w-full">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt={`${service.title} Features`}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
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
              How We Approach <span className="gold-text">{service.title}</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-offwhite/80 max-w-2xl mx-auto">
              Our structured methodology ensures that every {service.title.toLowerCase()} project is delivered with
              excellence, on time, and within budget.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {service.process.map((step: any, index: number) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-black border border-gold/20 p-6 hover:border-gold/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <span className="text-gold font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-offwhite/70">{step.description}</p>
              </motion.div>
            ))}
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
              <span className="text-gold border-b border-gold pb-1 uppercase text-sm tracking-wider">Technologies</span>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6">
              Tools & <span className="gold-text">Technologies</span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-offwhite/80 max-w-2xl mx-auto">
              We leverage the latest technologies and tools to deliver high-quality {service.title.toLowerCase()}{" "}
              solutions.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {service.technologies.map((tech: string, index: number) => (
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

      {/* Related Services */}
      {relatedServicesData.length > 0 && (
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
                  Explore More
                </span>
              </motion.div>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6">
                Related <span className="gold-text">Services</span>
              </motion.h2>
              <motion.p variants={fadeIn} className="text-offwhite/80 max-w-2xl mx-auto">
                Discover other services that complement {service.title.toLowerCase()} and can help enhance your digital
                presence.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              {relatedServicesData.map((relatedService: any, index: number) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-black border border-gold/20 p-8 hover:border-gold/50 transition-all duration-300 group"
                >
                  <div className="mb-6">
                    <Image
                      src={relatedService.icon || "/placeholder.svg"}
                      alt={relatedService.title}
                      width={40}
                      height={40}
                      className="text-gold"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{relatedService.title}</h3>
                  <p className="text-offwhite/70 mb-6">{relatedService.shortDesc}</p>
                  <Link
                    href={`/services/${relatedService.id}`}
                    className="inline-flex items-center text-gold group-hover:text-gold-light transition-colors"
                  >
                    Learn More <ArrowRight size={16} className="ml-2 group-hover:ml-3 transition-all" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-black border-t border-gold/10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Elevate Your <span className="gold-text">{service.title}</span>?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-offwhite/90 text-lg mb-8">
              Contact us today to discuss your {service.title.toLowerCase()} needs and how we can help bring your vision
              to life.
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

