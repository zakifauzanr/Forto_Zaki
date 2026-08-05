import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faFigma, faHtml5, faJava, faPhp, faPython, faWordpress, faReact, faLaravel, faBootstrap, faJs, faSvelte, faTailwindCss } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faFileExcel, faFilePowerpoint, faFileWord } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Web  Library and Framework",
    level: "Advanced",
    projects: "8 Projects",
    tools: [
      { name: "React", icon: faReact, color: "text-[#61DAFB]" },
      { name: "Laravel", icon: faLaravel, color: "text-[#FF2D20]" },
      { name: "Svelte", icon: faSvelte, color: "text-[#E34F26]" },
      { name: "Bootstrap", icon: faBootstrap, color: "text-[#7952B3]" },
      { name: "Tailwind CSS", icon: faTailwindCss, color: "text-[#7952B3]" },
      { name: "Fast API", icon: '', color: "text-[#7952B3]" },
      { name: "NestJs", icon: '', color: "text-[#7952B3]" },
      { name: "NextJs", icon: '', color: "text-[#7952B3]" },
    ],
  },
  {
    title: "Web Native",
    level: "Advanced",
    projects: "8 Projects",
    tools: [
      { name: "HTML5", icon: faHtml5, color: "text-[#E34F26]" },
      { name: "PHP", icon: faPhp, color: "text-[#777BB4]" },
      { name: "CSS3", icon: faCss3, color: "text-[#1572B6]" },
      { name: "Javascript", icon: faJs, color: "text-yellow-400" },
    ]
  },
  {
    title: "IT Skills",
    level: "Beginner",
    projects: null,
    tools: [
      { name: "Python", icon: faPython, color: "text-[#3776AB]" },
      { name: "Java", icon: faJava, color: "text-[#007396]" },
      { name: "Database", icon: faDatabase, color: "text-slate-300" },
      { name: "WordPress", icon: faWordpress, color: "text-[#21759B]" },
    ]
  },
  {
    title: "Other Skills",
    level: "Intermediate",
    projects: null,
    tools: [
      { name: "Figma", icon: faFigma, color: "text-[#F24E1E]" },
      { name: "Excel", icon: faFileExcel, color: "text-[#217346]" },
      { name: "Word", icon: faFileWord, color: "text-[#2B579A]" },
      { name: "Power Point", icon: faFilePowerpoint, color: "text-red-500" },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function Skills() {
    return (
        <section id="Skills" className="mt-20 px-6 lg:px-16 max-w-[1500px] md:w-[1500px] mx-auto" data-aos="fade-up">
            <div className="mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">Skills & Tools</h2>
                
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className='grid grid-cols-1 md:grid-cols-2 gap-6'
                >
                    {skillCategories.map((category, idx) => (
                        <motion.div 
                            key={idx} 
                            variants={itemVariants}
                            className="glass p-6 lg:p-8 rounded-2xl flex flex-col gap-6 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300 border border-white/10"
                        >
                            {/* Header */}
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">{category.title}</h3>
                                    {category.projects && (
                                        <p className="text-sm text-slate-400 font-medium">{category.projects}</p>
                                    )}
                                </div>
                                <span className="px-3 py-1.5 text-xs font-medium text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/20">
                                    {category.level}
                                </span>
                            </div>

                            {/* Tools Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-auto h-full">
                                {category.tools.map((tool, i) => (
                                    <div 
                                        key={i} 
                                        className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                                    >
                                        <FontAwesomeIcon icon={tool.icon} className={`text-3xl ${tool.color}`} />
                                        <span className="text-xs font-medium text-slate-300 mt-1">{tool.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}