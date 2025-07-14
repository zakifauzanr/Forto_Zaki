// components/SectionTitle.jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// eslint-disable-next-line react/prop-types
export default function SectionTitle({ title }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5, // Muncul saat 50% terlihat
  });

  return (
    <div ref={ref} className="flex justify-center mt-10 h-20">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-2xl lg:text-3xl font-bold text-center"
      >
        {title}
      </motion.h2>
    </div>
  );
}