import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Zap,
  Shield,
  Users,
  Cpu,
  Monitor,
  Satellite,
  Bot,
  Train,
  Construction,
  Settings,
  Clock,
  CheckCircle,
  Award,
  Globe,
  Target,
  Calendar,
  Briefcase,
  MapPin,
  DollarSign,
  Star,
  Quote,
  Phone,
  Mail,
  MessageCircle,
  Send,
  Cog,
  Wrench,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { ContactFormRequest, ContactFormResponse } from "@shared/api";

const fadeInUp = {
  initial: { opacity: 0, y: 80 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Index() {
  const [formData, setFormData] = useState<ContactFormRequest>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result: ContactFormResponse = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
  };

  const handleWhatsApp = () => {
    const message =
      "Hello! I'm interested in learning more about your railway construction services.";
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-light text-foreground mb-6 tracking-tight"
            >
              Building the
              <br />
              <span className="text-accent font-medium">Future</span> of Rail
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Precision engineering meets innovative construction. We deliver
              world-class railway infrastructure projects for government
              contracts.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={() => scrollToSection("#contact")}
                className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground rounded-xl font-medium hover:bg-accent/90 transition-all duration-200 group"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection("#company")}
                className="inline-flex items-center px-8 py-4 border border-border text-foreground rounded-xl font-medium hover:bg-muted transition-all duration-200"
              >
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/3 rounded-full blur-2xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-light text-foreground mb-4"
            >
              Excellence in Every Detail
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Our comprehensive approach ensures railway projects that exceed
              expectations
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Building2,
                title: "Infrastructure",
                description:
                  "Advanced railway construction and modernization projects",
              },
              {
                icon: Zap,
                title: "Innovation",
                description:
                  "Cutting-edge technology and sustainable building practices",
              },
              {
                icon: Shield,
                title: "Safety First",
                description:
                  "Uncompromising safety standards and quality assurance",
              },
              {
                icon: Users,
                title: "Expert Team",
                description:
                  "Experienced professionals dedicated to excellence",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Section */}
      <section id="company" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-light text-foreground mb-6"
            >
              About Our <span className="text-accent">Company</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Leading railway construction specialists with decades of
              experience in government infrastructure projects.
            </motion.p>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInUp} className="space-y-6">
                <h3 className="text-3xl font-light text-foreground">
                  Our Mission
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To revolutionize India's railway infrastructure through
                  innovative construction solutions, uncompromising safety
                  standards, and sustainable engineering practices.
                </p>
                <div className="bg-accent/10 rounded-2xl p-6">
                  <p className="text-foreground font-medium">
                    "Building the backbone of India's transportation future, one
                    railway at a time."
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-6">
                <h3 className="text-3xl font-light text-foreground">
                  Our Vision
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become India's most trusted and innovative railway
                  construction partner, setting new standards in infrastructure
                  development.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-accent">
                      25+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-accent">
                      150+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Projects Completed
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Company Values */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h3
              variants={fadeInUp}
              className="text-3xl font-light text-foreground text-center mb-12"
            >
              Our Core Values
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "Excellence",
                  description:
                    "Striving for perfection in every project, from initial planning to final delivery.",
                },
                {
                  icon: Users,
                  title: "Collaboration",
                  description:
                    "Working closely with government agencies, local communities, and stakeholders.",
                },
                {
                  icon: Globe,
                  title: "Sustainability",
                  description:
                    "Implementing eco-friendly construction practices and sustainable materials.",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="text-xl font-medium text-foreground mb-3">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-light text-foreground mb-6"
            >
              Advanced <span className="text-accent">Technology</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Cutting-edge construction technology and innovative engineering
              solutions for modern railway infrastructure.
            </motion.p>
          </motion.div>

          {/* Technology Overview */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-20"
          >
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
              <motion.h3
                variants={fadeInUp}
                className="text-3xl font-light text-foreground mb-6 text-center"
              >
                Innovation at Every Level
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: Cpu,
                    title: "AI-Powered Planning",
                    description:
                      "Machine learning for optimal project planning",
                  },
                  {
                    icon: Monitor,
                    title: "Digital Monitoring",
                    description: "Real-time project tracking and analytics",
                  },
                  {
                    icon: Satellite,
                    title: "GPS Precision",
                    description: "Satellite-guided construction accuracy",
                  },
                  {
                    icon: Bot,
                    title: "Automated Systems",
                    description: "Robotic assistance for complex tasks",
                  },
                ].map((tech, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <tech.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="text-lg font-medium text-foreground mb-2">
                      {tech.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {tech.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Core Technologies */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h3
              variants={fadeInUp}
              className="text-3xl font-light text-foreground text-center mb-12"
            >
              Core Technologies
            </motion.h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Advanced Electrification Systems",
                  description:
                    "State-of-the-art electrical infrastructure for modern railway networks.",
                  features: [
                    "25kV AC overhead electrification",
                    "Smart grid integration",
                    "Energy-efficient power distribution",
                    "Automated switching systems",
                  ],
                },
                {
                  icon: Shield,
                  title: "Safety & Monitoring Systems",
                  description:
                    "Comprehensive safety solutions ensuring secure railway operations.",
                  features: [
                    "Advanced signaling systems",
                    "Real-time track monitoring",
                    "Predictive maintenance alerts",
                    "Emergency response protocols",
                  ],
                },
              ].map((technology, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-card border border-border rounded-2xl p-8"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <technology.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-medium text-foreground mb-2">
                        {technology.title}
                      </h4>
                      <p className="text-muted-foreground mb-4">
                        {technology.description}
                      </p>
                      <ul className="space-y-2">
                        {technology.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-light text-foreground mb-6"
            >
              Comprehensive <span className="text-accent">Solutions</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              From planning to completion, we provide end-to-end railway
              construction solutions for government projects.
            </motion.p>
          </motion.div>

          {/* Core Services */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-20"
          >
            <motion.h3
              variants={fadeInUp}
              className="text-3xl font-light text-foreground text-center mb-12"
            >
              Core Services
            </motion.h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  icon: Train,
                  title: "Railway Track Construction",
                  description:
                    "Complete track laying services including ballast preparation, sleeper installation, and rail welding.",
                  features: [
                    "High-speed rail infrastructure",
                    "Conventional railway tracks",
                    "Metro and urban transit systems",
                    "Freight corridor development",
                  ],
                  scope: "500+ km of tracks laid annually",
                },
                {
                  icon: Zap,
                  title: "Electrification Systems",
                  description:
                    "Advanced railway electrification including overhead equipment and power supply systems.",
                  features: [
                    "25kV AC electrification",
                    "Traction substations",
                    "Overhead catenary systems",
                    "Power distribution networks",
                  ],
                  scope: "1000+ km electrified yearly",
                },
                {
                  icon: Construction,
                  title: "Bridge & Tunnel Construction",
                  description:
                    "Specialized construction of railway bridges, viaducts, and tunnels for challenging terrain.",
                  features: [
                    "Concrete and steel bridges",
                    "Underground tunneling",
                    "Viaduct construction",
                    "Foundation engineering",
                  ],
                  scope: "50+ major structures completed",
                },
                {
                  icon: Settings,
                  title: "Signaling & Communication",
                  description:
                    "Modern signaling systems and communication networks ensuring safe railway operations.",
                  features: [
                    "Electronic interlocking systems",
                    "Train control systems",
                    "Fiber optic communication",
                    "Station automation",
                  ],
                  scope: "200+ stations equipped",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-foreground mb-2">
                        {service.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="bg-muted/50 rounded-lg p-3">
                    <span className="text-accent font-medium text-sm">
                      {service.scope}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quality Assurance */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="bg-muted/30 rounded-3xl p-8 md:p-12">
              <motion.h3
                variants={fadeInUp}
                className="text-3xl font-light text-foreground text-center mb-8"
              >
                Quality Assurance & Safety
              </motion.h3>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Shield,
                    title: "Safety Standards",
                    description:
                      "Comprehensive safety protocols ensuring zero-accident work environments.",
                    metrics: [
                      "Zero major accidents in 5 years",
                      "ISO 45001 certified",
                    ],
                  },
                  {
                    icon: CheckCircle,
                    title: "Quality Control",
                    description:
                      "Multi-level quality checks and international standard compliance.",
                    metrics: [
                      "ISO 9001:2015 certified",
                      "99.8% quality compliance",
                    ],
                  },
                  {
                    icon: Clock,
                    title: "Timely Delivery",
                    description:
                      "Advanced project management ensuring on-time completion.",
                    metrics: [
                      "95% on-time delivery",
                      "Average 10% ahead of schedule",
                    ],
                  },
                ].map((aspect, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-card border border-border rounded-2xl p-6 text-center"
                  >
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <aspect.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="text-xl font-medium text-foreground mb-3">
                      {aspect.title}
                    </h4>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {aspect.description}
                    </p>
                    <div className="space-y-2">
                      {aspect.metrics.map((metric, metricIndex) => (
                        <div
                          key={metricIndex}
                          className="bg-accent/10 rounded-lg px-3 py-2"
                        >
                          <span className="text-accent font-medium text-sm">
                            {metric}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-light text-foreground mb-6"
            >
              Trusted by <span className="text-accent">Government</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Proud partners with government agencies and railway authorities
              across major infrastructure projects.
            </motion.p>
          </motion.div>

          {/* Key Statistics */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-20"
          >
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
              <motion.h3
                variants={fadeInUp}
                className="text-3xl font-light text-foreground text-center mb-12"
              >
                Our Track Record
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: Building2,
                    value: "150+",
                    label: "Projects Completed",
                    description: "Successfully delivered railway projects",
                  },
                  {
                    icon: MapPin,
                    value: "28",
                    label: "States Covered",
                    description: "Pan-India project presence",
                  },
                  {
                    icon: DollarSign,
                    value: "₹5000+",
                    label: "Crores Value",
                    description: "Total project value delivered",
                  },
                  {
                    icon: Calendar,
                    value: "25+",
                    label: "Years Experience",
                    description: "Decades of railway expertise",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-accent" />
                    </div>
                    <div className="text-3xl font-bold text-accent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-lg font-medium text-foreground mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h3
              variants={fadeInUp}
              className="text-3xl font-light text-foreground text-center mb-12"
            >
              Client Testimonials
            </motion.h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    "RailConstruct has been instrumental in delivering our high-speed rail projects with exceptional quality and precision.",
                  author: "Sh. Rajesh Kumar Verma",
                  position: "Chief Project Manager",
                  organization: "National High Speed Rail Corporation",
                  rating: 5,
                },
                {
                  quote:
                    "Their innovative approach to electrification and adherence to safety protocols have consistently exceeded our expectations.",
                  author: "Dr. Priya Malhotra",
                  position: "Director of Engineering",
                  organization: "Rail Vikas Nigam Limited",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-card border border-border rounded-2xl p-8"
                >
                  <Quote className="w-8 h-8 text-accent mb-4" />
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-accent fill-current"
                      />
                    ))}
                  </div>

                  <div>
                    <div className="font-medium text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-accent">
                      {testimonial.position}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.organization}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-light text-foreground mb-6"
            >
              Let's Build <span className="text-accent">Together</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Ready to start your railway infrastructure project? Get in touch
              with our expert team today.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl font-medium text-foreground mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">
                        Phone
                      </h4>
                      <p className="text-muted-foreground">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">
                        Email
                      </h4>
                      <p className="text-muted-foreground">
                        info@railconstruct.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">
                        Office
                      </h4>
                      <p className="text-muted-foreground">
                        New Delhi, India
                        <br />
                        Government Contractor ID: RC2024
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-center justify-center space-x-3 bg-green-500 text-white px-6 py-4 rounded-xl font-medium hover:bg-green-600 transition-colors duration-200"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </button>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-card border border-border rounded-3xl p-8"
            >
              <h3 className="text-2xl font-medium text-foreground mb-6">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    Thank you! We'll get back to you within 24 hours.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    Something went wrong. Please try again or call us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 bg-accent text-accent-foreground px-6 py-4 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center bg-card border border-border rounded-3xl p-12 md:p-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-light text-foreground mb-4"
            >
              Ready to Build the Future?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Partner with us for your next railway infrastructure project.
              Government contracts welcomed.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <button
                onClick={() => scrollToSection("#contact")}
                className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground rounded-xl font-medium hover:bg-accent/90 transition-all duration-200 group"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
