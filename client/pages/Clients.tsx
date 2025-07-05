import { motion } from "framer-motion";
import {
  Building2,
  MapPin,
  Calendar,
  DollarSign,
  Star,
  Quote,
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

export default function Clients() {
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
              Trusted by <span className="text-accent">Government</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Proud partners with government agencies and railway authorities
              across major infrastructure projects.
            </motion.p>
          </motion.div>

          {/* Key Statistics */}
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
                className="text-3xl font-light text-foreground text-center mb-12"
              >
                Our Track Record
              </motion.h2>

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
          </motion.section>

          {/* Major Clients */}
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
              Our Valued Partners
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Indian Railways",
                  department: "Railway Board, Ministry of Railways",
                  projects: "85+ Projects",
                  relationship: "Primary Government Partner",
                  focus: "National railway infrastructure development",
                },
                {
                  name: "RVNL",
                  department: "Rail Vikas Nigam Limited",
                  projects: "40+ Projects",
                  relationship: "Strategic Implementation Partner",
                  focus: "High-speed rail and electrification",
                },
                {
                  name: "IRCON International",
                  department: "Public Sector Enterprise",
                  projects: "25+ Projects",
                  relationship: "Joint Venture Partner",
                  focus: "International railway projects",
                },
                {
                  name: "DMRC",
                  department: "Delhi Metro Rail Corporation",
                  projects: "15+ Projects",
                  relationship: "Metro Infrastructure Partner",
                  focus: "Urban transit systems",
                },
                {
                  name: "MMRC",
                  department: "Mumbai Metro Rail Corporation",
                  projects: "12+ Projects",
                  relationship: "Metro Development Partner",
                  focus: "Underground metro construction",
                },
                {
                  name: "State Railway Boards",
                  department: "Various State Governments",
                  projects: "30+ Projects",
                  relationship: "Regional Development Partner",
                  focus: "State railway connectivity",
                },
              ].map((client, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-medium text-foreground mb-2">
                      {client.name}
                    </h3>
                    <p className="text-sm text-accent font-medium mb-3">
                      {client.department}
                    </p>
                    <p className="text-muted-foreground text-sm mb-4">
                      {client.focus}
                    </p>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Projects Completed
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {client.projects}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Partnership Type
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {client.relationship}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center text-accent">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    <span className="text-sm text-muted-foreground ml-2">
                      Excellent
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Featured Projects */}
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
              Featured Projects
            </motion.h2>

            <div className="space-y-8">
              {[
                {
                  title: "Delhi-Mumbai High-Speed Rail Corridor",
                  client: "National High Speed Rail Corporation Limited",
                  location: "Maharashtra, Gujarat",
                  value: "₹850 Crores",
                  status: "Completed",
                  year: "2023",
                  description:
                    "Complete electrification and signaling systems for 508 km high-speed rail corridor including advanced traction substations and modern signaling infrastructure.",
                  highlights: [
                    "508 km of high-speed electrification",
                    "15 traction substations",
                    "Advanced signaling systems",
                    "Completed 3 months ahead of schedule",
                  ],
                },
                {
                  title: "Eastern Dedicated Freight Corridor",
                  client: "Dedicated Freight Corridor Corporation of India",
                  location: "Uttar Pradesh, Bihar, Jharkhand, West Bengal",
                  value: "₹1,200 Crores",
                  status: "Ongoing",
                  year: "2024",
                  description:
                    "Construction of 729 km freight corridor including track laying, electrification, and freight terminal development for enhanced cargo transportation.",
                  highlights: [
                    "729 km of new freight tracks",
                    "25 kV AC electrification",
                    "8 freight terminals",
                    "Expected completion by Dec 2024",
                  ],
                },
                {
                  title: "Mumbai Metro Line 3 (Colaba-Bandra-SEEPZ)",
                  client: "Mumbai Metro Rail Corporation Limited",
                  location: "Mumbai, Maharashtra",
                  value: "₹650 Crores",
                  status: "Completed",
                  year: "2022",
                  description:
                    "Underground metro construction including tunnel electrification, station electrical systems, and advanced train control systems for 33.5 km underground line.",
                  highlights: [
                    "33.5 km underground electrification",
                    "27 underground stations",
                    "Advanced train control systems",
                    "Zero safety incidents",
                  ],
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-card border border-border rounded-2xl p-8"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h3 className="text-xl font-medium text-foreground">
                          {project.title}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            project.status === "Completed"
                              ? "bg-green-100 text-green-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>

                      <p className="text-accent font-medium mb-2">
                        {project.client}
                      </p>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <div
                            key={highlightIndex}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="space-y-3">
                          <div>
                            <div className="text-xs text-muted-foreground mb-1">
                              Location
                            </div>
                            <div className="text-sm font-medium text-foreground">
                              {project.location}
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground mb-1">
                              Project Value
                            </div>
                            <div className="text-sm font-medium text-foreground">
                              {project.value}
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground mb-1">
                              Year
                            </div>
                            <div className="text-sm font-medium text-foreground">
                              {project.year}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Testimonials */}
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
              Client Testimonials
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    "RailConstruct has been instrumental in delivering our high-speed rail projects with exceptional quality and precision. Their technical expertise and commitment to deadlines make them our preferred construction partner.",
                  author: "Sh. Rajesh Kumar Verma",
                  position: "Chief Project Manager",
                  organization: "National High Speed Rail Corporation",
                  rating: 5,
                },
                {
                  quote:
                    "The team's innovative approach to electrification and their adherence to safety protocols have consistently exceeded our expectations. They have successfully completed multiple complex projects within budget and timeline.",
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
                Join Our Satisfied Clients
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Experience the same level of excellence and professionalism that
                has made us the trusted choice for government railway projects
                across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground rounded-xl font-medium hover:bg-accent/90 transition-all duration-200 group"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/solutions"
                  className="inline-flex items-center px-8 py-4 border border-border text-foreground rounded-xl font-medium hover:bg-muted transition-all duration-200"
                >
                  View Our Solutions
                </Link>
              </div>
            </motion.div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
