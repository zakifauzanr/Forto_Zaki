import CompanyALogo from "../assets/logo/figma.png";

const DataExperiences = [
    {
      id: 1,
      role: "Fullstack Developer",
      company: "Telkom Indonesia",
      companyLogo: CompanyALogo,
      location: "Samarinda, Indonesia",
      period: "Jan 2024 - Sekarang",
      description: [
        "Developed and maintained core components of internal dashboard web applications used by internal teams to monitor and manage contract data.",
        "Successfully handled two full-stack website projects and one Telegram bot to reminder contracts and notifications.",
        "Performed data migration of over 10,000 records from legacy sources into a structured MySQL database, ensuring data integrity, consistency, and optimal indexing.",
        "Designed and implemented dynamic data visualizations using Laravel Blade and chart.",
        "Created Docker containers for the Laravel projects to simplify local development and ensure consistent environments for future developers.",
        "Actively solved real world technical issues such as session handling bugs, database relationship conflicts, and performance optimization challenges."
    ],
      media: [
        "/assets/telkom-dashboard.png",
        "/assets/telkom-team.jpg",
      ],
      companyLink: "",
    },
    {
      id: 2,
      role: "Web Developer Intern",
      company: "Startup Digital",
      companyLogo: null, // kalau gak ada logo
      location: "Balikpapan, Indonesia",
      period: "Jun 2023 - Dec 2023",
      description: [
        "Membangun dashboard internal menggunakan React, Express, dan MongoDB.",
        "Melaksanakan unit testing & QA.",
      ],
      media: [
        "/assets/startup-dashboard.png",
      ],
      companyLink: "",
    },
    // Tambahkan pengalaman lainnya
  ];

export default DataExperiences;