import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
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
            variants={fadeInUp}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-light text-foreground mb-6">
              About Our <span className="text-accent">Company</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Leading railway construction specialists with decades of
              experience in government infrastructure projects.
            </p>
            <div className="bg-muted/30 rounded-3xl p-12 text-center">
              <p className="text-lg text-muted-foreground">
                Detailed company information, history, mission, and values
                coming soon.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
