import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutSection = () => {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="about" className="py-24 relative">
      {/* Ambient glow orb */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-neon-cyan/5 blur-[100px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-neon-pink/3 blur-[80px] animate-pulse-glow pointer-events-none" />

      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}>
          <motion.p variants={fadeUp} className="retro-label mb-2">
            ABOUT.ME
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl retro-heading mb-12">
            Who I Am
          </motion.h2>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            <motion.div variants={fadeUp} className="md:col-span-3 space-y-6">
              <p className="text-muted-foreground leading-relaxed font-retro text-xl">
                I'm a passionate Full Stack Developer with 5+ years of experience building
                high-performance web applications. I specialize in React, Node.js, and cloud
                architecture, with a keen eye for creating pixel-perfect user experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed font-retro text-lg">
                When I'm not coding, you'll find me exploring new technologies, contributing to
                open-source projects, or writing technical articles. I believe in writing clean,
                maintainable code that scales.
              </p>
              <p className="text-muted-foreground leading-relaxed font-retro text-lg">
                I thrive in fast-paced environments where I can solve complex problems and
                deliver impactful solutions. Let's build something extraordinary together.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="md:col-span-2">
              <div className="glass-card gradient-border retro-corners p-6 space-y-4">
                {[
                  { label: "EXPERIENCE", value: "5+ YRS" },
                  { label: "PROJECTS", value: "50+" },
                  { label: "CLIENTS", value: "30+" },
                  { label: "OPEN_SRC", value: "15+" },
                ].map((stat) => (
                  <div key={stat.label} className="flex justify-between items-center py-2 border-b border-primary/10 last:border-0">
                    <span className="text-muted-foreground text-xs font-heading uppercase tracking-wider">{stat.label}</span>
                    <span className="font-pixel text-xs text-primary">{stat.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
