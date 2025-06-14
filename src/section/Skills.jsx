import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faFigma, faHtml5, faJava, faPhp, faPython, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faFileExcel, faFileWord } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons/faReact';

export default function Skills() {
    return (
        <div className='my-5'>
        <div className="w-full px-5 lg:px-10">
            <h1 className='text-2xl font-mono font-bold text-center'>Skills</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-3'>
                <div className='glass h-full shadow-lg p-5 relative group hover:bg-white/15 transition-colors duration-300 overflow-hidden'>
                    <div className='flex justify-between'>
                        <h1 className='text-xl font-bold font-mono'>Web Framework</h1>
                        <h1 className='text-md font-thin'>Advanced</h1>
                    </div>
                    <h2 className='text-lg'>Total Projects = 8</h2>
                    <p className='text-md font-thin my-1'>Tools</p>
                    <div className='flex flex-row gap-3 my-2'>
                        <FontAwesomeIcon style={{ fontSize: '2em' }} icon={faReact}/>
                        <FontAwesomeIcon style={{ fontSize: '2em' }} icon={faDatabase}/>
                        <FontAwesomeIcon style={{ fontSize: '2em' }} icon={faBootstrap}/>
                    </div>
                </div>
                <div className='glass h-full shadow-lg p-5 relative group hover:bg-white/15 transition-colors duration-300 overflow-hidden'>
                    <div className='flex justify-between'>
                        <h1 className='text-xl font-bold font-mono'>Web Native</h1>
                        <h1 className='text-md font-thin'>Intermediate</h1>
                    </div>
                    <h2 className='text-lg'>Total Projects = 8</h2>
                    <p className='text-md font-thin my-1'>Tools</p>
                    <div className='flex flex-row gap-3 my-2'>
                        <FontAwesomeIcon style={{ fontSize: '2em' }} icon={faHtml5}/>
                        <FontAwesomeIcon style={{ fontSize: '2em' }} icon={faPhp}/>
                        <FontAwesomeIcon style={{ fontSize: '2em' }} icon={faDatabase}/>
                        <FontAwesomeIcon style={{ fontSize: '2em' }} icon={faCss3}/>
                    </div>
                </div>
                <div className='glass h-full shadow-lg p-5 relative group hover:bg-white/15 transition-colors duration-300 overflow-hidden'>
                    <div className='flex justify-between'>
                        <h1 className='text-xl font-bold font-mono'>IT Skills</h1>
                        <h1 className='text-md font-thin'>Beginner</h1>
                    </div>
                    <p className='text-md font-thin my-1'>Tools</p>
                    <div className='flex flex-row gap-3 my-2'>
                        <FontAwesomeIcon style={{ fontSize: '2em' }} icon={faPython}/>
                        <FontAwesomeIcon style={{ fontSize: '2em' }} icon={faJava}/>
                        <FontAwesomeIcon style={{ fontSize: '2em' }} icon={faWordpress}/>
                    </div>
                </div>
                <div className='glass h-full shadow-lg p-5 relative group hover:bg-white/15 transition-colors duration-300 overflow-hidden'>
                    <div className='flex justify-between'>
                        <h1 className='text-xl font-bold font-mono'>Other Skills</h1>
                        <h1 className='text-md font-thin'>Intermediate</h1>
                    </div>
                    <p className='text-md font-thin my-1'>Tools</p>
                    <div className='flex flex-row gap-3 my-2'>
                        <FontAwesomeIcon style={{ fontSize: '2em' }} icon={faFigma}/>
                        <FontAwesomeIcon style={{ fontSize: '2em' }} icon={faFileExcel}/>
                        <FontAwesomeIcon style={{ fontSize: '2em' }} icon={faFileWord}/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}