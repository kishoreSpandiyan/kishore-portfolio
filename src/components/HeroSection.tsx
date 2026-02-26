import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import HeroScene from "./HeroScene";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mesh-gradient retro-horizon">
      {/* 3D Background */}
      <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-60 md:opacity-100">
        <HeroScene />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="retro-label mb-6"
          >
            SYSTEM.INIT<span className="blink">_</span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight"
          >
            <span className="retro-heading retro-flicker">Full Stack</span>
            <br />
            <span className="text-foreground">Developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed font-retro text-xl"
          >
            I craft high-performance digital experiences with modern technologies.
            Turning complex problems into elegant, scalable solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-4 flex-wrap"
          >
            <a href="#" className="gradient-btn">
              <Download className="mr-2" size={16} />
              Resume
            </a>
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="retro-btn-outline"
            >
              Explore
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="text-primary/50" size={24} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
