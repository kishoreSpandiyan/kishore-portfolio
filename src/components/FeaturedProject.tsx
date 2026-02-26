import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const techStack = ["React", "Node.js", "PostgreSQL", "TypeScript", "Docker", "AWS"];

const FeaturedProject = () => {
  const { ref, controls } = useScrollReveal();

  return (
    <section className="py-24 relative mesh-gradient">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}>
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="retro-label mb-2">
            FEATURED_PROJECT
          </motion.p>
          <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="text-3xl md:text-4xl retro-heading mb-12">
            The Masterpiece
          </motion.h2>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="glass-card gradient-border retro-corners overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="h-64 md:h-auto relative overflow-hidden flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, hsl(180 100% 50% / 0.05), hsl(280 100% 65% / 0.05), hsl(330 100% 60% / 0.05))' }}>
                <div className="font-pixel text-4xl text-primary/20">{"[SCREEN]"}</div>
                {/* Scanline effect on the project image area */}
                <div className="absolute inset-0 pointer-events-none" style={{
                  background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, hsl(180 100% 50% / 0.02) 3px, hsl(180 100% 50% / 0.02) 6px)'
                }} />
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-xl font-heading font-bold text-foreground mb-4 uppercase tracking-wider">
                  Enterprise Dashboard Platform
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed font-retro text-lg">
                  A comprehensive real-time analytics dashboard handling millions of data points
                  with sub-second response times. Features include live data streaming,
                  interactive visualizations, and role-based access control.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {techStack.map((tech) => (
                    <span key={tech} className="retro-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href="#" className="gradient-btn text-xs py-2 px-6">
                    <ExternalLink size={14} className="mr-2" /> Live
                  </a>
                  <a href="#" className="retro-btn-outline text-xs py-2 px-6 inline-flex items-center gap-2">
                    <Github size={14} /> Code
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProject;
