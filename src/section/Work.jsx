import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../component/atom/SectionTitle";
import DataExperience from "../data/dataExperience";
import PropTypes from "prop-types";

const CARD_WIDTH = 384;
const GAP = 40;
const OFFSET = CARD_WIDTH + GAP;

const positions = {
  left: {
    x: -OFFSET,
    rotateY: 30,
    scale: 0.9,
    z: -160,
    opacity: 0.8,
  },
  center: {
    x: 0,
    rotateY: 0,
    scale: 1,
    z: 0,
    opacity: 1,
  },
  right: {
    x: OFFSET,
    rotateY: -30,
    scale: 0.9,
    z: -160,
    opacity: 0.8,
  },
};

ExperienceCard.propTypes = {
  active: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isCurrent: PropTypes.bool,
  }).isRequired,
};

export default function Work() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = DataExperience.length;

  const leftIndex = (activeIndex - 1 + total) % total;
  const rightIndex = (activeIndex + 1) % total;

  const cards = [
    { slot: "left", data: DataExperience[leftIndex] },
    { slot: "center", data: DataExperience[activeIndex] },
    { slot: "right", data: DataExperience[rightIndex] },
  ];

  return (
    <section id="Work" className="mt-20 px-6 lg:px-16">
      <div className="text-center mb-12">
        <SectionTitle title="Work Experience" />
        <p className="text-gray-500 text-sm">
          Pengalaman saya pada bidang teknologi
        </p>
      </div>

      <div
        className="relative flex justify-center items-center h-[420px] overflow-hidden"
        style={{ perspective: 1200 }}
      >
        <AnimatePresence mode="popLayout">
          {cards.map(({ slot, data }) => (
            <motion.div
              key={data.id}
              className="absolute w-[320px]"
              style={{ transformStyle: "preserve-3d" }}
              initial={positions[slot]}
              animate={positions[slot]}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
            >
              <ExperienceCard data={data} active={slot === "center"} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={() => setActiveIndex((i) => (i - 1 + total) % total)}
          className="px-4 py-2 rounded-full border hover:bg-white/10"
        >
          ← Prev
        </button>
        <button
          onClick={() => setActiveIndex((i) => (i + 1) % total)}
          className="px-4 py-2 rounded-full border hover:bg-white/10"
        >
          Next →
        </button>
      </div>
    </section>
  );
}

function ExperienceCard({ data, active }) {
  return (
    <div
      className={`p-6 rounded-2xl w-96 backdrop-blur-md transition
      ${
        active
          ? "bg-white/90 dark:bg-gray-800/80 shadow-2xl ring-2 ring-blue-500/40"
          : "bg-white/60 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
      }`}
    >
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold">{data.role}</h3>
        {data.isCurrent && (
          <span className="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-500">
            Current
          </span>
        )}
      </div>

      <p className="mt-1 text-sm text-gray-500">
        <span className="font-medium">{data.company}</span> •{" "}
        <span className="italic">{data.period}</span>
      </p>

      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        {data.description}
      </p>
    </div>
  );
}