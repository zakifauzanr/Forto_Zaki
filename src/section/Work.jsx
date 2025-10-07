import { Link } from "react-router-dom";
import SectionTitle from "../component/atom/SectionTitle";

export default function Work() {
  const experiences = [
    {
      id: 1,
      role: "Frontend Developer",
      company: "Telkom Indonesia",
      period: "Jan 2024 - Sekarang",
      description:
        "Mengembangkan aplikasi web berbasis React dan Tailwind, berfokus pada optimisasi UI/UX serta integrasi API backend.",
    },
    {
      id: 2,
      role: "Web Developer Intern",
      company: "Startup Digital",
      period: "Jun 2023 - Dec 2023",
      description:
        "Membangun dashboard internal menggunakan React, Express, dan MongoDB. Membantu tim QA dalam testing fitur.",
    },
    {
      id: 3,
      role: "Freelance Web Designer",
      company: "Self-employed",
      period: "2022 - 2023",
      description:
        "Mendesain landing page modern menggunakan Figma, kemudian implementasi ke React dengan animasi AOS.js.",
    },
  ];

  return (
    <section className="mt-3 px-6 lg:px-12" data-aos="fade-up">
      <h2 className="text-3xl font-bold flex items-center justify-center gap-2 text-gray-800 dark:text-gray-100">
        <SectionTitle title="Work Experience" />
      </h2>
      <div className="flex justify-end">
        <Link
          to="/experience"
          className="mb-2 hover:border-b hover:border-white text-white shadow transition"
        >
          See More →
        </Link>
      </div>
      <div className="space-y-6">
        {experiences.slice(0, 2).map((exp) => (
          <div
            key={exp.id}
            className="relative glass p-6 rounded-2xl shadow-md border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {exp.role}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 font-medium">
              {exp.company} • <span className="italic">{exp.period}</span>
            </p>
            <p className="mt-3 text-gray-700 dark:text-gray-400 text-sm leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}