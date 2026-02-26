import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences = [
  {
    role: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    period: "2022 — Present",
    achievements: [
      "Led migration to microservices, reducing latency by 40%",
      "Built real-time analytics dashboard serving 100K+ users",
      "Mentored team of 5 junior developers",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "StartupX",
    period: "2020 — 2022",
    achievements: [
      "Developed core SaaS platform from scratch to 10K users",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Integrated payment processing handling $2M+ monthly",
    ],
  },
  {
    role: "Frontend Developer",
    company: "DigitalAgency",
    period: "2019 — 2020",
    achievements: [
      "Built responsive web apps for Fortune 500 clients",
      "Achieved 95+ Lighthouse scores across all projects",
      "Introduced component library reducing dev time by 30%",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ExperienceSection = () => {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="experience" className="py-24 relative mesh-gradient">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}>
          <motion.p variants={fadeUp} className="retro-label mb-2">
            CAREER.LOG
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl retro-heading mb-16">
            Experience & Work
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[7px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 timeline-line opacity-40" />

            <div className="space-y-12">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot - diamond shape */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-2">
                    <div className="timeline-dot" />
                  </div>

                  <div className={`md:w-1/2 pl-10 md:pl-0 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <div className="glass-card gradient-border retro-corners p-6">
                      <span className="font-pixel text-[10px] text-primary">{exp.period}</span>
                      <h3 className="text-lg font-heading font-bold text-foreground mt-2 uppercase tracking-wider">{exp.role}</h3>
                      <p className="text-secondary font-heading text-xs uppercase tracking-wider mb-4">{exp.company}</p>
                      <ul className={`space-y-2 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                        {exp.achievements.map((a, j) => (
                          <li key={j} className="text-sm text-muted-foreground font-retro text-base">
                            <span className="text-primary/50 mr-1">{">"}</span>{a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
