import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
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
            variants={fadeInUp}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-light text-foreground mb-6">
              Comprehensive <span className="text-accent">Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              From planning to completion, we provide end-to-end railway
              construction solutions for government projects.
            </p>
            <div className="bg-muted/30 rounded-3xl p-12 text-center">
              <p className="text-lg text-muted-foreground">
                Detailed service offerings, project types, and solution
                categories coming soon.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
