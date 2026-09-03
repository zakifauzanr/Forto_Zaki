import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Layers } from 'lucide-react';
import DataProject from '../data/dataProject';
import skeleton from '../assets/Project/skeleton.jpg';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const project = DataProject.find((p) => p.id === id);

  if (!project) {
    return (
      <section className="px-6 lg:px-16 py-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-slate-400 mb-8">Project yang kamu cari tidak ditemukan.</p>
          <Link
            to="/all-project"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  const relatedProjects = DataProject.filter(
    (p) => p.Tipe === project.Tipe && p.id !== project.id
  ).slice(0, 3);

  const imgSrc = project.Gambar || skeleton;

  return (
    <section className="px-6 lg:px-16 py-8 min-h-screen max-w-[1200px] mx-auto">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="text-sm font-medium">Kembali</span>
        </button>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass rounded-2xl overflow-hidden border border-white/10 mb-8"
      >
        <div className="h-64 sm:h-80 lg:h-[450px] overflow-hidden relative">
          <img
            src={imgSrc}
            alt={project.Nama}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 text-xs font-semibold bg-blue-600/90 text-white rounded-full backdrop-blur-sm">
                {project.Tipe}
              </span>
              <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full backdrop-blur-sm border border-white/10">
                {project.Tahun}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              {project.Nama}
            </h1>
          </div>
        </div>
      </motion.div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-2 space-y-6"
        >
          {/* Description */}
          <div className="glass rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-400" />
              Deskripsi Project
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm lg:text-base">
              {project.Deskripsi}
            </p>
          </div>

          {/* Tools & Tech Stack */}
          <div className="glass rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-blue-400 text-lg">{'</>'}</span>
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.Tools.split(',').map((tool, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 text-xs font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-lg hover:bg-blue-500/20 transition-colors"
                >
                  {tool.trim()}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Project Info */}
          <div className="glass rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
            <h2 className="text-lg font-bold text-white mb-5">Info Project</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-slate-400">Tahun</p>
                  <p className="text-sm text-white font-medium">{project.Tahun}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-slate-400">Mitra</p>
                  <p className="text-sm text-white font-medium">{project.Mitra || 'Personal Project'}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Layers className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-slate-400">Kategori</p>
                  <p className="text-sm text-white font-medium">{project.Tipe}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="glass rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
            <h2 className="text-lg font-bold text-white mb-4">Links</h2>
            <div className="space-y-3">
              {project.Link ? (
                <a
                  href={project.Link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-500 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              ) : (
                <div className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium text-slate-500 bg-white/5 rounded-xl border border-white/10 cursor-not-allowed">
                  <ExternalLink className="w-4 h-4" />
                  Demo Tidak Tersedia
                </div>
              )}
              {project.Github ? (
                <a
                  href={project.Github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium text-white glass border border-white/20 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub Repo
                </a>
              ) : (
                <div className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium text-slate-500 bg-white/5 rounded-xl border border-white/10 cursor-not-allowed">
                  <Github className="w-4 h-4" />
                  Repo Tidak Publik
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-white mb-8">
            Project Serupa
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProjects.map((item) => (
              <Link
                key={item.id}
                to={`/project/${item.id}`}
                className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300 group"
              >
                <div className="h-40 overflow-hidden relative">
                  <img
                    src={item.Gambar || skeleton}
                    alt={item.Nama}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] to-transparent opacity-60" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {item.Nama}
                  </h3>
                  <p className="text-xs text-slate-400">{item.Mitra || 'Personal Project'} &middot; {item.Tahun}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
}
