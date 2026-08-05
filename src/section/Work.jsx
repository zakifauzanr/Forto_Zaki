import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../component/atom/SectionTitle";
import DataExperience from "../data/dataExperience";

export default function Work() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExp = DataExperience[activeIndex];

  return (
    <section id="Work" className="mt-20 px-6 lg:px-16 max-w-[1500px] md:w-[1500px] mx-auto" data-aos="fade-up">
      <div className="mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">Experience</h2>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Side - List of Companies */}
          <div className="flex flex-col gap-3 lg:w-1/3">
            {DataExperience.map((exp, idx) => (
              <button
                key={exp.id}
                onClick={() => setActiveIndex(idx)}
                className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 text-left border ${
                  activeIndex === idx
                    ? "glass border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                    : "bg-transparent border-transparent hover:bg-white/5 hover:border-white/10"
                }`}
              >
                <div className="w-20 h-20 rounded-xl bg-white flex items-center justify-center shrink-0 overflow-hidden shadow-sm">
                  {/* Placeholder for Logo */}
                  {exp.logo ? (
                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                  ) : (
                    <span className="text-xl font-bold text-blue-600">{exp.company.charAt(0)}</span>
                  )}
                </div>
                <div>
                  <h3 className={`font-semibold ${activeIndex === idx ? "text-blue-400" : "text-slate-200"}`}>
                    {exp.company}
                  </h3>
                  <p className="text-sm text-slate-400">{exp.role}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Right Side - Details */}
          <div className="lg:w-2/3 lg:min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-6 glass p-6 lg:p-8"
              >
                {/* Header */}
                <div className="flex items-start gap-6">
                  <div className="hidden lg:flex w-16 h-16 rounded-xl bg-white items-center justify-center shrink-0 overflow-hidden shadow-md">
                    {activeExp.logo ? (
                      <img src={activeExp.logo} alt={activeExp.company} className="w-full h-full object-contain" />
                    ) : (
                      <span className="text-2xl font-bold text-blue-600">{activeExp.logo || activeExp.company.charAt(0)}</span>
                    )}
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1 font-medium tracking-wide uppercase">{activeExp.period}</p>
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">{activeExp.role}</h2>
                    <h3 className="text-blue-400 text-lg font-medium">{activeExp.company}</h3>
                  </div>
                </div>

                {/* Description List */}
                <ul className="space-y-4 mt-2">
                  {Array.isArray(activeExp.description) ? (
                    activeExp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-slate-300">
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                        <span className="leading-relaxed text-[15px]">{item}</span>
                      </li>
                    ))
                  ) : (
                    <li className="flex items-start gap-4 text-slate-300">
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                      <span className="leading-relaxed text-[15px]">{activeExp.description}</span>
                    </li>
                  )}
                </ul>

                {/* Skills/Tags */}
                {activeExp.skills && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {activeExp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 text-xs font-medium text-white glass border border-white/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}