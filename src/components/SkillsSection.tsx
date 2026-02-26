import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Code2, Database, Globe, Server, Smartphone, Cloud,
  GitBranch, Terminal, Palette, Zap, Shield, Layers,
} from "lucide-react";

const skills = [
  { name: "React / Next.js", icon: Code2 },
  { name: "TypeScript", icon: Terminal },
  { name: "Node.js", icon: Server },
  { name: "PostgreSQL", icon: Database },
  { name: "REST & GraphQL", icon: Globe },
  { name: "React Native", icon: Smartphone },
  { name: "AWS / Cloud", icon: Cloud },
  { name: "Git & CI/CD", icon: GitBranch },
  { name: "UI/UX Design", icon: Palette },
  { name: "Performance", icon: Zap },
  { name: "Security", icon: Shield },
  { name: "Architecture", icon: Layers },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SkillsSection = () => {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}>
          <motion.p variants={fadeUp} className="retro-label mb-2">
            TECH.STACK
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl retro-heading mb-12">
            Skills & Tech
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill) => (
              <motion.div key={skill.name} variants={fadeUp} className="skill-card flex flex-col items-center text-center gap-3">
                <skill.icon className="text-primary" size={28} strokeWidth={1.5} />
                <span className="text-xs text-muted-foreground font-heading uppercase tracking-wider">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
