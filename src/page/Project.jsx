import { Button } from '@material-tailwind/react';
import skeleton from '../assets/Project/skeleton.jpg';
import DataProject from '../data/dataProject';
import Frame2 from '../assets/showcase/Frame2.png';
import Frame3 from '../assets/showcase/Frame3.png';
import Frame4 from '../assets/showcase/Frame4.png';
import Frame5 from '../assets/showcase/Frame5.png';
import Frame6 from '../assets/showcase/Frame6.png';
import { useEffect } from 'react';

export default function Project(){
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return(
        <div className="mx-3 lg:mx-10 py-5">
            <h1 className='text-2xl font-mono font-bold text-center my-3'>All Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-6">
                <div className="glass border border-white/20 rounded-xl p-5 shadow-lg hover:bg-white/10 transition duration-300">
                    <h2 className="text-lg font-bold text-slate-300">Project 2024</h2>
                    <p className="text-3xl font-extrabold text-white">4</p>
                </div>
                <div className="glass border border-white/20 rounded-xl p-5 shadow-lg hover:bg-white/10 transition duration-300">
                    <h2 className="text-lg font-bold text-slate-300">Total Projects</h2>
                    <p className="text-3xl font-extrabold text-white">9</p>
                </div>
            </div>
            <div className='mb-3'>
                <div>
                    <h1 className='text-2xl font-mono font-bold text-left my-3'>Big Projects</h1>
                    {DataProject.map((item,idx)=>{
                        if(item.Tipe === "Organization"){
                        return(
                        <div key={idx} className="my-3 flex flex-col justify-center items-center p-3 rounded-md">
                            <img className='w-full mx-5' src={item.Gambar || skeleton} alt="" />
                            <div className='my-3 w-full'>
                                <h1 className='text-xl font-semibold font-mono'><span>Nama Project </span>: {item.Nama}</h1>
                                <p className='text-md font-thin text-slate-100'><span className='mr-3'>Deskripsi </span>: {item.Deskripsi}</p>
                                <div className='my-2 flex flex-col lg:flex-row justify-between items-center'>
                                    <h2 className='text-sm font-thin text-slate-400'><span className='mr-3'>Tools</span>: {item.Tools}</h2>
                                    <Button variant='outlined' className='p-2 my-3 rounded-md'>
                                        <a href={item.Link}>Live Demo</a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}})}
                </div>
                <div className="w-full h-full mt-10">
                    <h1 className="text-3xl font-extrabold font-mono text-left mb-5 border-b border-white pb-2">🔥 Visual Showcase</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[Frame2, Frame3, Frame4, Frame5, Frame6].map((src, idx) => (
                        <div
                            key={idx}
                            className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer transition-colors duration-300 bg-white/5 hover:bg-white/10"
                        >
                            <img
                            src={src}
                            alt={`Showcase ${idx}`}
                            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Efek kilau */}
                            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine pointer-events-none" />
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className=''>
                <h1 className="text-3xl font-bold font-mono mt-10 mb-4 text-center">🧩 Recent Projects</h1>
                <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
                {DataProject.map((item, idx) =>
                    item.Tipe === "Recent" && (
                    <div key={idx} className="bg-white/5 border border-white/10 rounded-xl shadow-md overflow-hidden">
                        <div className='w-full h-72 overflow-hidden'>
                            <img src={item.Gambar || skeleton} className="w-full h-full object-cover object-top object-left transition-transform duration-300 hover:scale-105" />
                        </div>
                        <div className="p-5">
                        <h3 className="text-xl font-bold text-white">{item.Nama}</h3>
                        <p className="text-sm text-slate-300 mt-1">{item.Deskripsi}</p>
                        <div className="flex justify-between items-center mt-4">
                            <span className="text-xs text-slate-400">🛠 {item.Tools}</span>
                            <div className="flex gap-2">
                            <Button size="sm" variant="outlined"><a href={item.Link}>Demo</a></Button>
                            <Button size="sm" variant="outlined"><a href={item.Github}>GitHub</a></Button>
                            </div>
                        </div>
                        </div>
                    </div>
                    )
                )}
                </div>
            </div>
            <div className="flex flex-col gap-8 my-8">
                {DataProject.map((item, idx) =>
                    ["Studi Independen", "Trial Project"].includes(item.Tipe) && (
                    <div key={idx} className="flex flex-col lg:flex-row items-start bg-white/5 border border-white/10 rounded-xl shadow-lg overflow-hidden h-66">
                        {/* Gambar project */}
                        <div className="w-full lg:w-[600px] h-48 lg:h-full overflow-hidden">
                            <img
                                src={item.Gambar || skeleton}
                                alt={item.Nama}
                                className="w-full h-full object-cover object-left transition-transform duration-300 hover:scale-105"
                            />
                        </div>

                        {/* Konten Project */}
                        <div className="p-6 flex flex-col justify-between flex-1">
                        {/* Nama & Deskripsi */}
                        <div>
                            <h2 className="text-2xl font-bold text-white font-mono">{item.Nama}</h2>
                            <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                            {item.Deskripsi}
                            </p>
                        </div>

                        {/* Tools & Action */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4">
                            <span className="text-xs text-slate-400 mb-2 md:mb-0">🛠 Tools: {item.Tools}</span>
                            <div className="flex gap-3">
                            {item.Link && (
                                <Button size="sm" variant="outlined">
                                <a href={item.Link} target="_blank" rel="noopener noreferrer">Live Demo</a>
                                </Button>
                            )}
                            {item.Github && (
                                <Button size="sm" variant="outlined">
                                <a href={item.Github} target="_blank" rel="noopener noreferrer">GitHub</a>
                                </Button>
                            )}
                            </div>
                        </div>
                        </div>
                    </div>
                    )
                )}
            </div>
            <div>
                <h1 className="text-3xl font-bold font-mono mt-10 mb-6 text-center">📅 Event Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {DataProject.map((item, idx) =>
                    item.Tipe === "Event" && (
                        <div
                        key={idx}
                        className="relative rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
                        >
                        <div className="absolute top-2 right-2 bg-indigo-500 text-white text-xs px-2 py-1 rounded-md shadow-md z-10">
                            EVENT
                        </div>
                        <img
                            src={item.Gambar || skeleton}
                            className="h-48 w-full object-cover object-left transition-transform duration-300 hover:scale-105"
                            alt={item.Nama}
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-white line-clamp-1">{item.Nama}</h2>
                            <p className="text-sm text-slate-300 mt-1 line-clamp-3">{item.Deskripsi}</p>
                            <div className="flex justify-between items-center mt-4">
                            <span className="text-xs text-slate-400">🛠 {item.Tools}</span>
                            <Button size="sm" variant="outlined">
                                <a href={item.Link} target="_blank" rel="noopener noreferrer">Demo</a>
                            </Button>
                            </div>
                        </div>
                        </div>
                    )
                    )}
                </div>
            </div>
            <div className="text-center mt-16 mb-5">
                <h2 className="text-2xl font-bold font-mono text-white mb-3">Tertarik dengan hasil kerjaku?</h2>
                <p className="text-slate-300 mb-4">Hubungi aku untuk kolaborasi, proyek freelance, atau pertanyaan seputar teknologi!</p>
                <Button size="lg" className="bg-white text-black font-bold px-6 py-3 rounded-md">
                    <a href="zakifauzanrabb@gmail.com">{`Let's Talk`}</a>
                </Button>
            </div>

        </div>
    )
}