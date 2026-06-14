import { motion } from 'framer-motion';

const achievements = [
  {
    title: "Delegates of Istanbul Youth Summit",
    date: "21 Apr 2021 – 23 Apr 2021",
    points: [
      "Lolos seleksi dari 600 pendaftar",
      "Membuat Project",
      "Menjalankan projek kelompok bersama tim",
      "Mempresentasikan projek didepan stakeholder dan pejabat"
    ]
  },
  {
    title: "Delegates of International Wonderfull Education",
    date: "23 Apr 2021 – 24 Apr 2021",
    points: [
      "Menjadi delegasi dalam agenda konfrensi international pemuda.",
      "Membawakan isu pendidikan ke ajang international",
      "Menganalisis tentang kekurangan dan masalah yang terjadi pada sistem pendidikan di Indonesia"
    ]
  }
];

export default function Achieve() {
    return (
        <section id="Award" className="mt-20 px-6 lg:px-16 max-w-7xl mx-auto" data-aos="fade-up">
            <div className="mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">Achievements</h2>
                <div className="flex flex-col gap-6">
                    {achievements.map((item, idx) => (
                        <div key={idx} className="glass p-6 lg:p-8 rounded-2xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300 border border-white/10">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                <ul className="space-y-2">
                                    {item.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-300">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                                            <span className="text-[15px] leading-relaxed">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="lg:text-right shrink-0">
                                <span className="px-4 py-2 text-sm font-medium text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/20 inline-block">
                                    {item.date}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="flex justify-center mt-10">
                <a 
                    href="cv/CV_ATS.pdf" 
                    download="CV_ATS.pdf"
                    className="px-6 py-3 rounded-xl border border-white/20 glass hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center gap-2 font-medium text-white shadow-lg"
                >
                    Download CV
                </a>
            </div>
        </section>
    );
}