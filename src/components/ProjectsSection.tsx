import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with real-time inventory management and Stripe integration.",
    tags: ["React", "Node.js", "Stripe"],
  },
  {
    title: "Social Media App",
    description: "Real-time messaging and social features with WebSocket connections and media sharing.",
    tags: ["React Native", "Firebase", "WebSocket"],
  },
  {
    title: "AI Content Generator",
    description: "GPT-powered content creation tool with custom fine-tuning and template management.",
    tags: ["Python", "OpenAI", "React"],
  },
  {
    title: "DevOps Dashboard",
    description: "Centralized monitoring for CI/CD pipelines, server health, and deployment tracking.",
    tags: ["Vue.js", "Docker", "Grafana"],
  },
  {
    title: "Fitness Tracker",
    description: "Cross-platform fitness app with workout planning, progress tracking, and social challenges.",
    tags: ["React Native", "Node.js", "MongoDB"],
  },
  {
    title: "Real Estate Platform",
    description: "Property listing platform with advanced search, virtual tours, and mortgage calculator.",
    tags: ["Next.js", "PostgreSQL", "MapBox"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ProjectsSection = () => {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="projects" className="py-24 relative mesh-gradient">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}>
          <motion.p variants={fadeUp} className="retro-label mb-2">
            PORTFOLIO.DIR
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl retro-heading mb-12">
            Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={fadeUp}
                className="glass-card gradient-border retro-corners overflow-hidden group transition-all duration-300"
              >
                {/* CRT-style image area */}
                <div className="h-44 relative flex items-center justify-center overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, hsl(180 100% 50% / 0.03), hsl(330 100% 60% / 0.03))' }}>
                  <span className="font-pixel text-xs text-primary/20 group-hover:text-primary/40 transition-all">{"[PREVIEW]"}</span>
                  <div className="absolute inset-0 pointer-events-none" style={{
                    background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(180 100% 50% / 0.015) 2px, hsl(180 100% 50% / 0.015) 4px)'
                  }} />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-foreground text-sm mb-2 uppercase tracking-wider">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed font-retro text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="retro-tag text-[10px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><ExternalLink size={16} /></a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github size={16} /></a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
