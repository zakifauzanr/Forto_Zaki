import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../component/atom/SectionTitle";

export default function ExperiencePage() {
  const [selectedId, setSelectedId] = useState(null);

  const experiences = [
    {
      id: 1,
      role: "IT Software Developer Intern",
      company: "PT UPSENSE Teknologi Indonesia",
      period: "Oct 2025 - Present",
      description: [
        "Mengelola dan memelihara aplikasi web berbasis Laravel, mengembangkan fitur baru dan peningkatan sesuai kebutuhan klien.",
        "Berpartisipasi aktif dalam rapat proyek dan memberikan rekomendasi teknis untuk meningkatkan performa dan UX sistem.",
      ],
      media: ["/images/upsense-1.jpg", "/images/upsense-2.jpg"],
    },
    {
      id: 2,
      role: "Full-stack Developer Intern",
      company: "Telkom Indonesia",
      period: "Feb - Aug 2025",
      description: [
        "Mengembangkan dan memelihara dashboard internal untuk memonitor data kontrak perusahaan.",
        "Menangani dua proyek full-stack website dan satu bot Telegram pengingat kontrak.",
        "Melakukan migrasi lebih dari 10.000 data ke MySQL dengan menjaga integritas dan konsistensi.",
      ],
      media: ["/images/telkom-1.jpg", "/images/telkom-2.jpg"],
    },
    {
      id: 3,
      role: "IT Support",
      company: "UPTD DISPORA Provinsi Kalimantan Timur",
      period: "Feb - Apr 2024",
      description: [
        "Melakukan audit inventaris dan registrasi surat internal.",
        "Merancang dan mengembangkan sistem arsip berbasis web untuk digitalisasi dokumen organisasi.",
        "Melakukan analisis regulasi terbaru dan menyampaikan hasilnya kepada staf terkait.",
      ],
      media: ["/images/dispora-1.jpg"],
    },
    {
      id: 4,
      role: "Web Programming Laboratory Assistant",
      company: "Mulawarman University",
      period: "Feb - May 2024",
      description: [
        "Mengembangkan dan menyampaikan kurikulum praktikum Web Programming untuk 40+ mahasiswa.",
        "Mengajarkan HTML, CSS, JavaScript, PHP, dan Bootstrap dengan pendekatan real-world.",
        "Merancang proyek akhir yang melatih problem-solving dan teamwork.",
      ],
      media: ["/images/lab-web-1.jpg", "/images/lab-web-2.jpg"],
    },
    {
      id: 5,
      role: "Introduction to IT Laboratory Assistant",
      company: "Mulawarman University",
      period: "Aug - Dec 2024",
      description: [
        "Membimbing mahasiswa baru dalam 8 sesi praktikum pengantar teknologi informasi.",
        "Mengajarkan Microsoft Word, Excel, dan Canva sebagai dasar keterampilan digital.",
        "Mendesain proyek akhir yang menggabungkan pengolahan data dan desain visual.",
      ],
      media: ["/images/lab-it-1.jpg"],
    },
  ];

  return (
    <section className="px-6 lg:px-20 py-12 min-h-screen">
      <div className="text-center mb-12">
        <SectionTitle title="Professional Experience" />
        <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
          Menampilkan pengalaman kerja dan kontribusi profesional dalam bidang teknologi
        </p>
      </div>

      {/* Grid layout */}
      <motion.div
        layout
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
      >
        {experiences.map((exp) => (
          <motion.div
            layoutId={exp.id}
            key={exp.id}
            onClick={() => setSelectedId(exp.id)}
            className="cursor-pointer bg-white/70 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200 dark:border-gray-700 
                       rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {exp.role}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                  {exp.company}
                </p>
                <p className="text-xs text-gray-500 italic">{exp.period}</p>
              </div>
              <p className="mt-3 text-gray-700 dark:text-gray-400 text-sm line-clamp-3">
                {exp.description[0]}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Expanded card */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-900 rounded-3xl max-w-3xl w-full p-8 shadow-2xl border border-gray-200 dark:border-gray-700 overflow-y-auto max-h-[90vh]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.4 }}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {experiences.find((e) => e.id === selectedId)?.role}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">
                    {experiences.find((e) => e.id === selectedId)?.company}
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    {experiences.find((e) => e.id === selectedId)?.period}
                  </p>
                </div>
                <button
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-xl"
                  onClick={() => setSelectedId(null)}
                >
                  ✕
                </button>
              </div>

              {/* Description */}
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {experiences
                  .find((e) => e.id === selectedId)
                  ?.description.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
              </ul>

              {/* Media */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {experiences
                  .find((e) => e.id === selectedId)
                  ?.media.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`media-${i}`}
                      className="rounded-lg object-cover w-full h-48 hover:scale-105 transition-transform duration-300 shadow-md"
                    />
                  ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}