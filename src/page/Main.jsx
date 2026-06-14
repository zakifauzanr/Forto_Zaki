import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import zaki from '../assets/me-new-2.jpeg';
import { TypeAnimation } from 'react-type-animation';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Skills from '../section/Skills';
import Achieve from '../section/Achieve';
import Project from '../section/Project';
import Work from '../section/Work';
import Connect from '../section/Connect';
import { useEffect } from 'react';

export default function Main(){

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    
    return(
        <div className="w-full min-h-screen text-white" data-aos="fade-down">
            <div id='Hero' className="relative mx-7 lg:mx-10 lg:py-20 py-10 mt-5 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center glass">
                <div className='w-full px-5 lg:px-7'>
                    <h1 className="text-2xl lg:text-4xl font-bold leading-tight">
                    <TypeAnimation
                        sequence={[
                        'Hi! I’m Zaki.',
                        1000,
                        'Hi! I’m Zaki Fauzan.',
                        1000,
                        'Hi! I’m Zaki Fauzan Rabbani.',
                        1000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                    />
                    </h1>

                    <h2 className="mt-2 text-lg lg:text-xl text-blue-400 font-semibold">Junior Fullstack Developer</h2>
                    <p className='text-sm lg:text-md text-slate-400 font-thin my-1 text-justify'>
                        Programmer based in Balikpapan, East Borneo, 
                        Currently. Information Systems graduate with hands-on experience in building
                        and optimizing systems. Proven ability to develop web-based
                        applications, automation tools, and AI driven.
                    </p>
                    <div className="mt-6 flex gap-8">
                        <div>
                            <h3 className="text-3xl font-bold text-white">1+</h3>
                            <p className="text-sm text-slate-400">Years Experience</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white">10+</h3>
                            <p className="text-sm text-slate-400">Finished Projects</p>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="https://github.com/zackoflonely"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-xl border border-white/20 
                            hover:bg-white/10 
                            transition-all duration-300"
                            >
                            <button className='flex items-center gap-2 px-4 py-2'>
                                <FontAwesomeIcon icon={faGithub} />
                                <span className="text-sm">GitHub</span>
                            </button>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/zaki-fauzan-rabbani-65b36921a/"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-xl border border-white/20 
                            hover:bg-white/10 
                            transition-all duration-300"
                            >
                            <button className='flex items-center gap-2 px-4 py-2'>
                                <FontAwesomeIcon icon={faLinkedin} />
                                <span className="text-sm">LinkedIn</span>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="relative flex justify-center">
                    <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-3xl"></div>

                    <img
                        src={zaki}
                        alt="Zaki Fauzan"
                        className="relative w-72 h-72 lg:w-80 lg:h-80 
                        object-cover rounded-full 
                        border-4 border-white/30 shadow-2xl"
                    />
                </div>
            </div>
            <Work/>
            <Skills/>
            <Achieve/>
            <Project/>
            <Connect/>
        </div>
    )
}