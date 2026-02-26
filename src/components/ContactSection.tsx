import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Github, Linkedin, Twitter, Send } from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactSection = () => {
  const { ref, controls } = useScrollReveal();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-24 relative mesh-gradient">
      <div className="container mx-auto px-6">
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
          <motion.p variants={fadeUp} className="retro-label mb-2">
            CONTACT.SH
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl retro-heading mb-12">
            Get In Touch
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.form variants={fadeUp} onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="> NAME"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 input-glow"
              />
              <input
                type="email"
                placeholder="> EMAIL"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 input-glow"
              />
              <textarea
                placeholder="> MESSAGE"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 input-glow resize-none"
              />
              <button type="submit" className="gradient-btn">
                <Send size={16} className="mr-2" /> TRANSMIT
              </button>
            </motion.form>

            <motion.div variants={fadeUp} className="flex flex-col justify-center space-y-8">
              <div>
                <h3 className="font-heading font-bold text-foreground text-lg mb-3 uppercase tracking-wider">
                  Let's Collaborate
                </h3>
                <p className="text-muted-foreground leading-relaxed font-retro text-lg">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision.
                </p>
              </div>

              <div className="flex gap-4">
                {[
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="glass w-12 h-12 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:neon-glow-cyan"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-24 pt-8">
        <div className="retro-divider mb-8" />
        <p className="text-center text-xs text-muted-foreground font-heading uppercase tracking-widest">
          © {new Date().getFullYear()} // DEV.PORTFOLIO // BUILT WITH {"<PASSION/>"}
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
