import zaki from '../assets/me-new-2.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Connect() {
    return (
        <section id="Connect" className="mt-20 px-6 lg:px-16 max-w-7xl mx-auto mb-20" data-aos="fade-up">
            <div className="mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">Connect & Collaborate</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* LinkedIn Card */}
                    <div className="glass p-6 lg:p-8 rounded-2xl flex flex-col gap-6 border border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300">
                        <div className="flex items-center gap-6">
                            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-500 shrink-0">
                                <img src={zaki} alt="Zaki Fauzan Rabbani" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    Zaki Fauzan Rabbani <span className="text-sm font-normal text-slate-400">(He/Him)</span>
                                </h3>
                                <p className="text-sm text-slate-300 mt-1 line-clamp-2">
                                    Fullstack Developer | Frontend Developer | Organization Enthusiast
                                </p>
                                <p className="text-xs text-slate-400 mt-2">Balikpapan, East Kalimantan, Indonesia</p>
                            </div>
                        </div>
                        
                        <div>
                            <p className="text-sm font-medium text-blue-400">1,832 followers <span className="text-slate-500">•</span> 500+ connections</p>
                        </div>

                        <div className="mt-auto pt-2">
                            <a 
                                href="https://www.linkedin.com/in/zaki-fauzan-rabbani/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#0A66C2] hover:bg-[#084e96] transition-colors text-white font-medium text-sm w-full sm:w-auto"
                            >
                                <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
                                Connect on LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Collaboration/Email Card */}
                    <div className="glass p-6 lg:p-8 rounded-2xl flex flex-col justify-center border border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300">
                        <h3 className="text-2xl font-bold text-white mb-4">Let's Work Together!</h3>
                        <p className="text-slate-300 leading-relaxed mb-8">
                            I'm always open to discussing product design work or partnership opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                        
                        <div>
                            <a 
                                href="mailto:zakifauzanrabb@gmail.com"
                                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl border border-white/20 glass hover:bg-white/10 hover:border-white/40 transition-all duration-300 font-medium text-white shadow-lg w-full sm:w-auto"
                            >
                                <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
                                Send an Email
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
