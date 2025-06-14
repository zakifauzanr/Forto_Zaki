import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import zaki from '../assets/zaki-main.jpg';
import { TypeAnimation } from 'react-type-animation';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Skills from '../section/Skills';
import Know from '../section/Know';
import Achieve from '../section/Achieve';
import Project from '../section/Project';

export default function Main(){
    return(
        <div className="w-full min-h-screen  text-white" data-aos="fade-down">
            <div className="mx-7 lg:mx-10 lg:py-16 py-7 flex justify-between items-center flex-col gap-5 lg:flex-row glass">
                <div className='w-full px-5 lg:px-7'>
                    <h1 className='text-lg lg:text-2xl font-bold'>
                        <TypeAnimation
                            sequence={[
                                'Hi! Im Zaki.',
                                1000, 
                                'Hi! Im Zaki Fauzan.',
                                1000,
                                'Hi! Im Zaki Fauzan Rabbani.',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            />
                    </h1>
                    <h2 className='text-md lg:text-xl font-semibold'>A Front-End Web Developer</h2>
                    <p className='text-sm lg:text-md text-slate-400 font-thin my-1 text-justify'>
                        Im a passionate Front-end Web Developer based in Samarinda, East Borneo, 
                        Currently, I am a 4th year student of the Information Systems Study Program at Mulawarman University.
                    </p>
                    <a href="https://github.com/zackoflonely">
                        <FontAwesomeIcon style={{ fontSize: '2em' }} className='mr-3' icon={faGithub}/>
                    </a>
                    <a href="https://www.linkedin.com/in/zaki-fauzan-rabbani-65b36921a/">
                        <FontAwesomeIcon style={{ fontSize: '2em' }} icon={faLinkedin}/>
                    </a>
                </div>
                <div className='w-full flex justify-center'>
                    <img className='w-72 h-72 object-cover rounded-full border-4 border-white shadow-lg' src={zaki} alt="" />
                </div>
            </div>
            <Know/>
            <Skills/>
            <Achieve/>
            <Project/>
        </div>
    )
}