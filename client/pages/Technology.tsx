import { motion } from "framer-motion";
import {
  Cpu,
  Zap,
  Shield,
  Monitor,
  Cog,
  Satellite,
  Bot,
  Wrench,
} from "lucide-react";
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

export default function Technology() {
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
              Advanced <span className="text-accent">Technology</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Cutting-edge construction technology and innovative engineering
              solutions for modern railway infrastructure.
            </motion.p>
          </motion.div>

          {/* Technology Overview */}
          <motion.section
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-20"
          >
            <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
              <motion.h2
                variants={fadeInUp}
                className="text-3xl font-light text-foreground mb-6 text-center"
              >
                Innovation at Every Level
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-muted-foreground text-center max-w-4xl mx-auto mb-8"
              >
                We leverage the latest technological advancements to deliver
                superior railway infrastructure projects. Our commitment to
                innovation ensures efficiency, safety, and sustainability in
                every aspect of construction.
              </motion.p>

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
                    <h3 className="text-lg font-medium text-foreground mb-2">
                      {tech.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {tech.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Core Technologies */}
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
              Core Technologies
            </motion.h2>

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
                {
                  icon: Cog,
                  title: "Precision Engineering",
                  description:
                    "High-precision construction techniques for superior infrastructure.",
                  features: [
                    "Computer-aided design (CAD)",
                    "3D modeling and simulation",
                    "Laser-guided construction",
                    "Quality assurance systems",
                  ],
                },
                {
                  icon: Wrench,
                  title: "Modern Construction Equipment",
                  description:
                    "Latest machinery and tools for efficient project execution.",
                  features: [
                    "Automated track laying machines",
                    "Heavy-duty construction vehicles",
                    "Digital surveying equipment",
                    "Environmental monitoring tools",
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
                      <h3 className="text-xl font-medium text-foreground mb-2">
                        {technology.title}
                      </h3>
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
          </motion.section>

          {/* Innovation Lab */}
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
                Innovation Laboratory
              </motion.h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div variants={fadeInUp} className="space-y-6">
                  <h3 className="text-2xl font-medium text-foreground">
                    Research & Development
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Our dedicated R&D facility focuses on developing
                    next-generation railway construction technologies. We
                    collaborate with leading technical institutions and
                    international experts to stay at the forefront of
                    innovation.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-foreground">
                        Smart materials testing
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-foreground">
                        Environmental impact analysis
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-foreground">
                        Construction automation research
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-foreground">
                        Safety protocol development
                      </span>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-card border border-border rounded-xl p-4 text-center">
                      <div className="text-2xl font-semibold text-accent mb-1">
                        15+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Research Projects
                      </div>
                    </div>
                    <div className="bg-card border border-border rounded-xl p-4 text-center">
                      <div className="text-2xl font-semibold text-accent mb-1">
                        8
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Patents Filed
                      </div>
                    </div>
                    <div className="bg-card border border-border rounded-xl p-4 text-center">
                      <div className="text-2xl font-semibold text-accent mb-1">
                        25+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        R&D Engineers
                      </div>
                    </div>
                    <div className="bg-card border border-border rounded-xl p-4 text-center">
                      <div className="text-2xl font-semibold text-accent mb-1">
                        5
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Lab Facilities
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Sustainability Technology */}
          <motion.section
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-light text-foreground text-center mb-12"
            >
              Sustainable Technology Solutions
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Green Construction",
                  description:
                    "Eco-friendly materials and processes that minimize environmental impact while maintaining structural integrity.",
                  stats: "40% reduction in carbon footprint",
                },
                {
                  title: "Renewable Energy",
                  description:
                    "Solar and wind power integration for railway operations, reducing dependency on traditional energy sources.",
                  stats: "60% renewable energy usage",
                },
                {
                  title: "Waste Management",
                  description:
                    "Advanced recycling and waste reduction technologies for construction materials and operational efficiency.",
                  stats: "85% material recycling rate",
                },
              ].map((solution, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-green-500 rounded-lg"></div>
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <span className="text-green-800 font-medium text-sm">
                      {solution.stats}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
