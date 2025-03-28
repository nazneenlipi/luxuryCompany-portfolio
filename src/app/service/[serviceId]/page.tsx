"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, ArrowLeft } from "lucide-react";
import { Cta } from "@/components/cta";
import { services1 } from "../../../../data";

// Animation variants
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

export default function ServiceDetailPage() {
  const params = useParams();
  const [service, setService] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    const serviceId = params.serviceId as string;
    const foundService = services1.find((s) => s.id === serviceId);

    if (foundService) {
      setService(foundService);
    }

    setLoading(false);
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-gold">Loading...</div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <p className="text-offwhite/80 mb-8">
          The service youre looking for doesnt exist or has been moved.
        </p>
        <Link
          href="/service"
          className="px-8 py-3 bg-gold text-black hover:bg-gold-light transition-colors duration-300 font-medium tracking-wide"
        >
          View All Services
        </Link>
      </div>
    );
  }

  // Find related services
  const relatedServicesData = service.relatedServices
    ? service.relatedServices
        .map((id: string) => services1.find((s) => s.id === id))
        .filter(Boolean)
    : [];

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
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeIn} className="inline-block mb-4">
              <Link
                href="/service"
                className="text-gold border-b border-gold pb-1 uppercase text-sm tracking-wider flex items-center"
              >
                <ArrowLeft size={14} className="mr-2" /> Back to Services
              </Link>
            </motion.div>
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              {service.title}
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-offwhite/90 text-lg md:text-xl mb-8"
            >
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
                What Our <span className="gold-text">{service.title}</span>{" "}
                Service Includes
              </h2>
              <p className="text-offwhite/80 mb-8 leading-relaxed">
                Our comprehensive {service.title.toLowerCase()} service is
                designed to meet your specific needs and help your business
                achieve its goals.
              </p>

              <div className="space-y-4">
                {service.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle
                      size={20}
                      className="text-gold mr-3 mt-1 shrink-0"
                    />
                    <p className="text-offwhite/80">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeIn}>
              <div className="relative h-[400px] w-full">
                <Image
                  src={service.image}
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
              <span className="text-gold border-b border-gold pb-1 uppercase text-sm tracking-wider">
                Our Process
              </span>
            </motion.div>
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              How We Approach <span className="gold-text">{service.title}</span>
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-offwhite/80 max-w-2xl mx-auto"
            >
              Our structured methodology ensures that every{" "}
              {service.title.toLowerCase()} project is delivered with
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
              <span className="text-gold border-b border-gold pb-1 uppercase text-sm tracking-wider">
                Technologies
              </span>
            </motion.div>
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Tools & <span className="gold-text">Technologies</span>
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-offwhite/80 max-w-2xl mx-auto"
            >
              We leverage the latest technologies and tools to deliver
              high-quality {service.title.toLowerCase()} solutions.
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
              <motion.h2
                variants={fadeIn}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Related <span className="gold-text">Services</span>
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="text-offwhite/80 max-w-2xl mx-auto"
              >
                Discover other services that complement{" "}
                {service.title.toLowerCase()} and can help enhance your digital
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
                  <h3 className="text-xl font-bold mb-3">
                    {relatedService.title}
                  </h3>
                  <p className="text-offwhite/70 mb-6">
                    {relatedService.shortDesc}
                  </p>
                  <Link
                    href={`/service/${relatedService.id}`}
                    className="inline-flex items-center text-gold group-hover:text-gold-light transition-colors"
                  >
                    Learn More{" "}
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover:ml-3 transition-all"
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      <Cta />
    </>
  );
}
