import { Button } from '@material-tailwind/react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import DataProject from '../data/dataProject';
import SectionTitle from '../component/atom/SectionTitle';
import skeleton from '../assets/Project/skeleton.jpg';

const imgSrc = (item) => item.Gambar || skeleton;

export default function Project() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentYear = new Date().getFullYear();
  const projectCurrentYear = DataProject.filter(
    (project) => project.Tahun === currentYear.toString()
  ).length;
  const totalProjects = DataProject.length;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const renderCard = (item, idx) => (
    <motion.div
      key={idx}
      variants={cardVariants}
      className="glass rounded-2xl overflow-hidden flex flex-col hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300 border border-white/10 group"
      data-aos="fade-up"
    >
      <div className="h-52 overflow-hidden relative">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={imgSrc(item)}
          alt={item.Nama}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] to-transparent opacity-60"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-3">{item.Nama}</h3>
        <p className="text-sm text-slate-300 leading-relaxed mb-6 flex-grow">
          {item.Deskripsi}
        </p>
        <div className="flex justify-between items-end mt-auto pt-4 border-t border-white/10">
          <div className="flex-1">
            <p className="text-xs text-slate-400 mb-1">Tools</p>
            <p className="text-[10px] font-medium text-blue-300">{item.Tools}</p>
          </div>
          <div className="flex gap-2 shrink-0 ml-4">
            {item.Link && (
              <a
                href={item.Link}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-sm font-medium text-white glass border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
              >
                Live Demo
              </a>
            )}
            {item.Github && (
              <a
                href={item.Github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-sm font-medium text-white glass border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderHorizontalCard = (item, idx) => (
    <motion.div
      key={idx}
      variants={cardVariants}
      className="glass rounded-2xl overflow-hidden flex flex-col lg:flex-row hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300 border border-white/10 group"
      data-aos="fade-up"
    >
      <div className="w-full lg:w-[500px] h-56 lg:h-auto overflow-hidden shrink-0">
        {imgSrc(item) && (
          <img
            src={imgSrc(item)}
            alt={item.Nama}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
      </div>
      <div className="p-6 lg:p-8 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl font-bold text-white mb-3">{item.Nama}</h3>
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            {item.Deskripsi}
          </p>
        </div>
        <div className="flex justify-between items-end mt-auto pt-4 border-t border-white/10">
          <div className="flex-1">
            <p className="text-xs text-slate-400 mb-1">Tools</p>
            <p className="text-[10px] font-medium text-blue-300">{item.Tools}</p>
          </div>
          <div className="flex gap-2 shrink-0 ml-4">
            {item.Link && (
              <a
                href={item.Link}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-sm font-medium text-white glass border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
              >
                Live Demo
              </a>
            )}
            {item.Github && (
              <a
                href={item.Github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-sm font-medium text-white glass border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderEventCard = (item, idx) => (
    <motion.div
      key={idx}
      variants={cardVariants}
      className="glass rounded-2xl overflow-hidden flex flex-col hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300 border border-white/10 group"
      data-aos="fade-up"
    >
      <div className="relative">
        <div className="h-48 overflow-hidden">
          <img
            src={imgSrc(item)}
            alt={item.Nama}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="absolute top-3 right-3 bg-indigo-500/90 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
          EVENT
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-white mb-2">{item.Nama}</h3>
        <p className="text-sm text-slate-300 leading-relaxed mb-6 flex-grow">
          {item.Deskripsi}
        </p>
        <div className="flex justify-between items-end mt-auto pt-4 border-t border-white/10">
          <div className="flex-1">
            <p className="text-xs text-slate-400 mb-1">Tools</p>
            <p className="text-[10px] font-medium text-blue-300">{item.Tools}</p>
          </div>
          {item.Link && (
            <a
              href={item.Link}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 text-sm font-medium text-white glass border border-white/20 rounded-lg hover:bg-white/10 transition-colors shrink-0 ml-4"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="px-6 lg:px-16 py-12 min-h-screen max-w-7xl mx-auto">
      <div className="text-center mb-12" data-aos="fade-down">
        <SectionTitle title="All Projects" />
        <p className="text-slate-400 mt-2 text-sm">
          Kumpulan project yang telah saya kerjakan
        </p>
      </div>

      {/* Stats */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16"
        data-aos="fade-up"
      >
        <motion.div
          variants={cardVariants}
          className="glass border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300"
        >
          <p className="text-sm font-medium text-slate-400">Project {currentYear}</p>
          <p className="text-4xl font-extrabold text-white mt-1">{projectCurrentYear}</p>
        </motion.div>
        <motion.div
          variants={cardVariants}
          className="glass border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300"
        >
          <p className="text-sm font-medium text-slate-400">Total Projects</p>
          <p className="text-4xl font-extrabold text-white mt-1">{totalProjects}</p>
        </motion.div>
      </motion.div>

      {/* Organization Projects */}
      <div className="mb-16" data-aos="fade-up">
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8">
          🏢 Organization Projects
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {DataProject.filter((item) => item.Tipe === 'Organization').map(
            (item, idx) => renderHorizontalCard(item, idx)
          )}
        </motion.div>
      </div>

      {/* Internship Projects */}
      <div className="mb-16" data-aos="fade-up">
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8">
          💼 Internship Projects
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {DataProject.filter((item) => item.Tipe === 'Internship').map(
            (item, idx) => renderCard(item, idx)
          )}
        </motion.div>
      </div>

      {/* Recent Projects */}
      <div className="mb-16" data-aos="fade-up">
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8">
          🧩 Recent Projects
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {DataProject.filter((item) => item.Tipe === 'Recent').map(
            (item, idx) => renderCard(item, idx)
          )}
        </motion.div>
      </div>

      {/* Studi Independen & Trial Projects */}
      <div className="mb-16" data-aos="fade-up">
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8">
          📚 Other Projects
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {DataProject.filter((item) =>
            ['Studi Independen', 'Trial Project'].includes(item.Tipe)
          ).map((item, idx) => renderHorizontalCard(item, idx))}
        </motion.div>
      </div>

      {/* Event Projects */}
      {/* <div className="mb-16" data-aos="fade-up">
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8">
          📅 Event Projects
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {DataProject.filter((item) => item.Tipe === 'Event').map(
            (item, idx) => renderEventCard(item, idx)
          )}
        </motion.div>
      </div> */}

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mt-20 mb-10"
        data-aos="fade-up"
      >
        <div className="glass border border-white/10 rounded-2xl p-10 max-w-2xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
            Tertarik dengan hasil kerja saya?
          </h2>
          <p className="text-slate-300 mb-6">
            Hubungi saya untuk kolaborasi, proyek freelance, atau pertanyaan seputar teknologi!
          </p>
          <a href="mailto:zakifauzanrabb@gmail.com">
            <Button
              size="lg"
              className="bg-white text-black font-bold px-8 py-3 rounded-xl hover:bg-white/90 transition-all"
            >
              Let&apos;s Talk
            </Button>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
