import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import type { ContactForm } from "../../types";

const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate sending
    await new Promise((r) => setTimeout(r, 1800));
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  const contactInfo = [
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: "grgprajal01@gmail.com",
      href: "mailto:grgprajal01@gmail.com",
    },
    {
      icon: <Phone size={18} />,
      label: "Phone",
      value: "+977 980 584 5973",
      href: "tel:+9779805845973",
    },
    {
      icon: <MapPin size={18} />,
      label: "Location",
      value: "Pokhara, Nepal",
      href: "https://maps.google.com/?q=Pokhara,Nepal",
    },
  ];

  const socials = [
    { icon: <Github size={16} />, href: "https://github.com", label: "GitHub" },
    {
      icon: <Linkedin size={16} />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <ExternalLink size={16} />,
      href: "https://behance.net",
      label: "Behance",
    },
  ];

  return (
    <SectionWrapper id="contact">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-3">
            — Get In Touch
          </p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            Let's <span className="text-gradient">Work Together</span>
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="glass-card p-6">
              <h3 className="text-white font-semibold mb-5">Contact Info</h3>
              <div className="space-y-5">
                {contactInfo.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                    initial={{ opacity: 0, x: -15 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ x: 4 }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{
                        background: "rgba(168,85,247,0.1)",
                        border: "1px solid rgba(168,85,247,0.2)",
                        color: "rgb(196,181,253)",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-white text-sm font-medium group-hover:text-purple-400 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <motion.div
              className="glass-card p-5"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white font-medium text-sm">
                  Available for work
                </span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                Open to freelance projects, collaborations, and full-time
                opportunities. Response time: within 24 hours.
              </p>
            </motion.div>

            {/* Socials */}
            <div>
              <p className="text-gray-500 text-xs mb-3 uppercase tracking-wider">
                Find me on
              </p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    whileHover={{
                      scale: 1.1,
                      y: -3,
                      boxShadow: "0 10px 25px rgba(168,85,247,0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass-card p-8">
              <h3 className="text-white font-semibold mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <motion.div
                  animate={focused === "name" ? { scale: 1.005 } : { scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-gray-400 text-xs mb-2 ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    placeholder="Prajal Gurung"
                    className="input-field"
                    required
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  animate={
                    focused === "email" ? { scale: 1.005 } : { scale: 1 }
                  }
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-gray-400 text-xs mb-2 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    placeholder="hello@example.com"
                    className="input-field"
                    required
                  />
                </motion.div>

                {/* Message */}
                <motion.div
                  animate={
                    focused === "message" ? { scale: 1.005 } : { scale: 1 }
                  }
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-gray-400 text-xs mb-2 ml-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="input-field resize-none"
                    required
                  />
                </motion.div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={sending || sent}
                  className="w-full btn-primary justify-center"
                  whileHover={!sending && !sent ? { scale: 1.01 } : {}}
                  whileTap={!sending && !sent ? { scale: 0.98 } : {}}
                >
                  {sent ? (
                    <>
                      <CheckCircle size={16} className="text-green-400" />
                      <span className="text-green-400">Message Sent!</span>
                    </>
                  ) : sending ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
