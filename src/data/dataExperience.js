import telkom from '../assets/logo/company/telkom.png';
import upsense from '../assets/logo/company/upsense.png';
import dispora from '../assets/logo/company/dispora.png';
import petrolog from '../assets/logo/company/petrolog.png';

const DataExperience = [
    {
      id: 1,
      role: "IT Programmer",
      company: "PT Petrolog Indah",
      period: "Mar 2026 - Sekarang",
      isCurrent: true,
      logo: petrolog,
      description: [
        "Membuat dan memaintenance sistem dashboard untuk support monitoring secara real time operasional alat berat dan matriks performa.",
        "Mengembangkan chatbot berbasis AI untuk kebutuhan automasi pengetahuan internal perusahaan khususnya SOP dan aturan.",
        "Mendesain dan implementasi sistem untuk integrasi antar sistem yang ada pada perusahaan terutama untuk meningkatkan alur data agar lebih efisien."
      ],
      skills: ["Svelte", "Laravel", "PostgreSQL", "TailwindCSS", "Web Development", "AI Chatbot", "React", "NestJS"]
    },
    {
      id: 2,
      role: "IT Software Developer Intern",
      company: "PT UPSENSE Teknologi Indonesia",
      period: "Oct - Des 2025",
      isCurrent: false,
      logo: upsense,
      description: [
        "Mengelola dan memelihara aplikasi web berbasis Laravel.",
        "Mengembangkan fitur baru sesuai kebutuhan klien.",
        "Memberikan rekomendasi teknis untuk meningkatkan fungsionalitas dan pengalaman pengguna."
      ],
      skills: ["Laravel", "PHP", "MySQL", "NestJS", "React", "Golang", "Web Development"]
    },
    {
      id: 3,
      role: "Full-stack Developer Intern",
      company: "Telkom Indonesia",
      period: "Feb - Aug 2025",
      isCurrent: false,
      logo: telkom,
      description: [
        "Mengembangkan dan memelihara komponen inti dashboard internal berbasis web untuk memonitor dan mengelola data kontrak.",
        "Menangani dua proyek website full-stack dan satu bot Telegram untuk pengingat kontrak.",
        "Melakukan migrasi data lebih dari 10.000 entri ke MySQL dengan menjaga integritas dan konsistensi data."
      ],
      skills: ["React", "Node.js", "MySQL", "Telegram API"]
    },
    {
      id: 4,
      role: "IT Support",
      company: "UPTD DISPORA Provinsi Kalimantan Timur",
      period: "Feb - Apr 2024",
      isCurrent: false,
      logo: dispora,
      description: [
        "Melakukan audit inventaris dan pendaftaran surat internal.",
        "Menjadi konseptor dan pengembang sistem arsip berbasis web untuk digitalisasi dokumen organisasi.",
        "Menyusun dan menyampaikan hasil analisis regulasi daerah terbaru kepada staf dan stakeholder."
      ],
      skills: ["IT Support", "Web Development", "Data Analysis"]
    },
  ];

export default DataExperience;