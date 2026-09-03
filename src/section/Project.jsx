import { Button } from '@material-tailwind/react';
import skeleton from '../assets/Project/skeleton.jpg';
import DataProject from '../data/dataProject';
import { Link } from 'react-router-dom';

export default function Project(){
    return(
        <section id="Project" className="mt-20 px-6 lg:px-16 max-w-[1500px] md:w-[1500px] mx-auto" data-aos="fade-up">
            <div className="mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">Recent Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {DataProject.slice(0, 3).map((item, idx) => (
                        <Link to={`/project/${item.id}`} key={idx} className="glass rounded-2xl overflow-hidden flex flex-col hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300 border border-white/10">
                            {/* Image Container */}
                            <div className="h-48 overflow-hidden relative">
                                <img 
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                                    src={item.Gambar || skeleton} 
                                    alt={item.Nama} 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] to-transparent opacity-60"></div>
                            </div>
                            
                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-white mb-3">{item.Nama}</h3>
                                <p className="text-sm text-slate-300 leading-relaxed mb-6 flex-grow">
                                    {item.Deskripsi}
                                </p>
                                
                                {/* Footer: Tools & Button */}
                                <div className="flex justify-between items-end mt-auto pt-4 border-t border-white/10">
                                    <div className="flex-1">
                                        <p className="text-xs text-slate-400 mb-1">Tools</p>
                                        <p className="text-[10px] font-medium text-blue-300">{item.Tools}</p>
                                    </div>
                                    <span 
                                        className="px-4 py-2 text-sm font-medium text-white glass border border-white/20 rounded-lg hover:bg-white/10 transition-colors shrink-0 ml-4"
                                    >
                                        Live Demo
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            
            <div className="flex justify-center mt-10">
                <Link to='/all-project'>
                    <button className="px-6 py-3 rounded-xl border border-white/20 glass hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center gap-2 font-medium text-white shadow-lg">
                        View More Projects
                    </button>
                </Link>
            </div>
        </section>
    )
}