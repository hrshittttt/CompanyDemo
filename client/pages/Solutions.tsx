import { motion } from "framer-motion";
import {
  Train,
  Zap,
  Construction,
  Settings,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Solutions() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-light text-foreground mb-6"
            >
              Comprehensive <span className="text-accent">Solutions</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              From planning to completion, we provide end-to-end railway
              construction solutions for government projects.
            </motion.p>
          </motion.div>

          {/* Core Services */}
          <motion.section
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-light text-foreground text-center mb-12"
            >
              Core Services
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  icon: Train,
                  title: "Railway Track Construction",
                  description:
                    "Complete track laying services including ballast preparation, sleeper installation, and rail welding for new railway lines.",
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
                    "Advanced railway electrification including overhead equipment, power supply systems, and electrical infrastructure.",
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
                    "Specialized construction of railway bridges, viaducts, and tunnels for challenging terrain and water crossings.",
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
                    "Modern signaling systems and communication networks ensuring safe and efficient railway operations.",
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
                      <h3 className="text-xl font-medium text-foreground mb-2">
                        {service.title}
                      </h3>
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
          </motion.section>

          {/* Project Process */}
          <motion.section
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-light text-foreground text-center mb-12"
            >
              Our Project Process
            </motion.h2>

            <div className="space-y-8">
              {[
                {
                  phase: "01",
                  title: "Planning & Design",
                  description:
                    "Comprehensive project analysis, feasibility studies, and detailed engineering design.",
                  duration: "2-4 months",
                  deliverables: [
                    "Technical feasibility report",
                    "Detailed project drawings",
                    "Environmental impact assessment",
                    "Cost estimation and timeline",
                  ],
                },
                {
                  phase: "02",
                  title: "Procurement & Mobilization",
                  description:
                    "Material procurement, equipment deployment, and site preparation activities.",
                  duration: "1-2 months",
                  deliverables: [
                    "Material quality certification",
                    "Equipment deployment plan",
                    "Site safety protocols",
                    "Workforce mobilization",
                  ],
                },
                {
                  phase: "03",
                  title: "Construction Execution",
                  description:
                    "Systematic construction implementation with continuous quality monitoring and safety compliance.",
                  duration: "12-24 months",
                  deliverables: [
                    "Weekly progress reports",
                    "Quality assurance certificates",
                    "Safety compliance records",
                    "Milestone achievements",
                  ],
                },
                {
                  phase: "04",
                  title: "Testing & Commissioning",
                  description:
                    "Comprehensive testing, system commissioning, and performance validation before handover.",
                  duration: "1-3 months",
                  deliverables: [
                    "System testing reports",
                    "Performance validation",
                    "Training documentation",
                    "Maintenance guidelines",
                  ],
                },
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-card border border-border rounded-2xl p-8"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                    <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                      <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center flex-shrink-0">
                        <span className="text-accent-foreground font-bold text-lg">
                          {phase.phase}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-foreground">
                          {phase.title}
                        </h3>
                        <p className="text-accent font-medium">
                          {phase.duration}
                        </p>
                      </div>
                    </div>

                    <div className="flex-1 lg:max-w-2xl">
                      <p className="text-muted-foreground mb-4">
                        {phase.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {phase.deliverables.map((deliverable, delIndex) => (
                          <div
                            key={delIndex}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                            {deliverable}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Quality Assurance */}
          <motion.section
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-20"
          >
            <div className="bg-muted/30 rounded-3xl p-8 md:p-12">
              <motion.h2
                variants={fadeInUp}
                className="text-3xl font-light text-foreground text-center mb-8"
              >
                Quality Assurance & Safety
              </motion.h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Shield,
                    title: "Safety Standards",
                    description:
                      "Comprehensive safety protocols and regular training programs ensure zero-accident work environments.",
                    metrics: [
                      "Zero major accidents in 5 years",
                      "ISO 45001 certified",
                    ],
                  },
                  {
                    icon: CheckCircle,
                    title: "Quality Control",
                    description:
                      "Multi-level quality checks and international standard compliance for superior project delivery.",
                    metrics: [
                      "ISO 9001:2015 certified",
                      "99.8% quality compliance",
                    ],
                  },
                  {
                    icon: Clock,
                    title: "Timely Delivery",
                    description:
                      "Advanced project management and efficient resource allocation ensure on-time project completion.",
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
                    <h3 className="text-xl font-medium text-foreground mb-3">
                      {aspect.title}
                    </h3>
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
          </motion.section>

          {/* Call to Action */}
          <motion.section
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="bg-card border border-border rounded-3xl p-8 md:p-12 text-center"
            >
              <h2 className="text-3xl font-light text-foreground mb-4">
                Ready to Start Your Railway Project?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our team of experts is ready to discuss your railway
                infrastructure needs and provide customized solutions for your
                specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground rounded-xl font-medium hover:bg-accent/90 transition-all duration-200 group"
                >
                  Get Project Quote
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/clients"
                  className="inline-flex items-center px-8 py-4 border border-border text-foreground rounded-xl font-medium hover:bg-muted transition-all duration-200"
                >
                  View Our Projects
                </Link>
              </div>
            </motion.div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
