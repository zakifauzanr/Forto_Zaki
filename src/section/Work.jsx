// import { Link } from "react-router-dom";
import SectionTitle from "../component/atom/SectionTitle";

export default function Work() {
  const experiences = [
    {
      id: 1,
      role: "IT Software Developer Intern",
      company: "PT UPSENSE Teknologi Indonesia",
      period: "Oct 2025 - Present",
      description:
        "Mengelola dan memelihara aplikasi web berbasis Laravel, mengembangkan fitur baru sesuai kebutuhan klien, serta memberikan rekomendasi teknis untuk meningkatkan fungsionalitas dan pengalaman pengguna.",
    },
    {
      id: 2,
      role: "Full-stack Developer Intern",
      company: "Telkom Indonesia",
      period: "Feb - Aug 2025",
      description:
        "Mengembangkan dan memelihara komponen inti dashboard internal berbasis web untuk memonitor dan mengelola data kontrak. Menangani dua proyek website full-stack dan satu bot Telegram untuk pengingat kontrak. Melakukan migrasi data lebih dari 10.000 entri ke MySQL dengan menjaga integritas dan konsistensi data.",
    },
    {
      id: 3,
      role: "IT Support",
      company: "UPTD DISPORA Provinsi Kalimantan Timur",
      period: "Feb - Apr 2024",
      description:
        "Melakukan audit inventaris dan pendaftaran surat internal, serta menjadi konseptor dan pengembang sistem arsip berbasis web untuk digitalisasi dokumen organisasi. Juga menyusun dan menyampaikan hasil analisis regulasi daerah terbaru kepada staf dan stakeholder.",
    },
  ];

  return (
    <section className="mt-10 px-6 lg:px-16 relative" data-aos="fade-up">
      {/* Section Title */}
      <div className="text-center mb-8">
        <SectionTitle title="Work Experience" />
        <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
          Pengalaman saya pada bidang teknologi
        </p>
      </div>

      {/* Link */}
      {/* <div className="flex justify-end mb-6">
        <Link
          to="/experience"
          className="text-blue-500 dark:text-blue-400 font-medium hover:underline hover:translate-x-1 transition-all"
        >
          See More →
        </Link>
      </div> */}

      {/* Timeline */}
      <div className="relative border-l border-gray-300 dark:border-gray-700 ml-4 space-y-10">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative pl-8 group">
            {/* Dot indicator */}
            <div className="absolute -left-4 top-2 w-3.5 h-3.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-white dark:border-gray-900 shadow-md group-hover:scale-125 transition-transform" />

            {/* Card */}
            <div className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {exp.role}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-medium">
                {exp.company} •{" "}
                <span className="italic text-sm">{exp.period}</span>
              </p>
              <p className="mt-3 text-gray-700 dark:text-gray-400 text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}