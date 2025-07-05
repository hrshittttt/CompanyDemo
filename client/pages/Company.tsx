import { motion } from "framer-motion";
import { Award, Users, Globe, Target, Calendar, Briefcase } from "lucide-react";
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

export default function Company() {
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
              About Our <span className="text-accent">Company</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              Leading railway construction specialists with decades of
              experience in government infrastructure projects.
            </motion.p>
          </motion.div>

          {/* Mission & Vision */}
          <motion.section
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInUp} className="space-y-6">
                <h2 className="text-3xl font-light text-foreground">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To revolutionize India's railway infrastructure through
                  innovative construction solutions, uncompromising safety
                  standards, and sustainable engineering practices. We are
                  committed to delivering world-class projects that connect
                  communities and drive economic growth.
                </p>
                <div className="bg-accent/10 rounded-2xl p-6">
                  <p className="text-foreground font-medium">
                    "Building the backbone of India's transportation future, one
                    railway at a time."
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-6">
                <h2 className="text-3xl font-light text-foreground">
                  Our Vision
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become India's most trusted and innovative railway
                  construction partner, setting new standards in infrastructure
                  development while maintaining our commitment to environmental
                  sustainability and community development.
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
          </motion.section>

          {/* Company Values */}
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
              Our Core Values
            </motion.h2>

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
                {
                  icon: Target,
                  title: "Precision",
                  description:
                    "Delivering projects on time and within budget with meticulous attention to detail.",
                },
                {
                  icon: Calendar,
                  title: "Reliability",
                  description:
                    "Consistent performance and dependable service throughout project lifecycles.",
                },
                {
                  icon: Briefcase,
                  title: "Professionalism",
                  description:
                    "Maintaining the highest standards of business ethics and professional conduct.",
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
                  <h3 className="text-xl font-medium text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Company History */}
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
              Our Journey
            </motion.h2>

            <div className="space-y-8">
              {[
                {
                  year: "1998",
                  title: "Company Founded",
                  description:
                    "RailConstruct was established with a vision to transform India's railway infrastructure.",
                },
                {
                  year: "2005",
                  title: "First Major Government Contract",
                  description:
                    "Secured our first major railway electrification project with Indian Railways.",
                },
                {
                  year: "2012",
                  title: "Technology Innovation",
                  description:
                    "Introduced advanced construction technologies and digital project management systems.",
                },
                {
                  year: "2018",
                  title: "National Recognition",
                  description:
                    "Received the National Excellence Award for Infrastructure Development.",
                },
                {
                  year: "2024",
                  title: "Sustainable Future",
                  description:
                    "Leading the industry in green construction practices and renewable energy integration.",
                },
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start space-x-6"
                >
                  <div className="flex-shrink-0 w-20 h-20 bg-accent rounded-2xl flex items-center justify-center">
                    <span className="text-accent-foreground font-semibold">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Leadership Team */}
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
              Leadership Team
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Rajesh Kumar",
                  position: "Chief Executive Officer",
                  experience: "20+ years in railway infrastructure",
                  education: "M.Tech Civil Engineering, IIT Delhi",
                },
                {
                  name: "Priya Sharma",
                  position: "Chief Technology Officer",
                  experience: "15+ years in construction technology",
                  education: "PhD in Construction Management, IIT Bombay",
                },
                {
                  name: "Vikram Singh",
                  position: "Chief Operations Officer",
                  experience: "18+ years in project management",
                  education: "M.Tech Railway Engineering, IRSE",
                },
              ].map((leader, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-card border border-border rounded-2xl p-6 text-center"
                >
                  <div className="w-20 h-20 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-accent font-medium mb-3">
                    {leader.position}
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    {leader.experience}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {leader.education}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
