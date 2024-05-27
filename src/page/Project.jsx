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
        <div className="mx-10 py-5">
            <h1 className='text-2xl font-mono font-bold text-center my-3'>All Projects</h1>
            <div className="grid grid-cols-2 gap-2">
                <div className="flex justify-center items-center border border-md rounded-md py-5 h-40">
                    <div>   
                        <h2 className='text-xl font-semibold font-mono'>Project 2024</h2>
                        <p className='text-xl font-base text-center'>0</p> 
                    </div>
                </div>
                <div className="flex justify-center items-center border border-md rounded-md py-5 h-40">
                    <div>   
                        <h2 className='text-xl font-semibold font-mono'>Total Project</h2>
                        <p className='text-xl font-base text-center'>0</p> 
                    </div>
                </div>
            </div>
            <div className='flex my-7'>
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
                            <div className='my-2 flex justify-between items-center'>
                                <h2 className='text-sm font-thin text-slate-400'><span className='mr-3'>Tools</span>: {item.Tools}</h2>
                                <Button variant='outlined' className='p-2 rounded-md'>
                                    <a href={item.Link}>Live Demo</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                )}})}
                </div>
                <div className="w-full h-full ml-3">
                    <h1 className="text-2xl font-mono font-semibold text-left my-3">Showcase</h1>
                    <div className="grid grid-cols-3 gap-2 h-full my-6">
                        <img className='w-full' src={Frame2} alt="" />
                        <img className='w-full' src={Frame3} alt="" />
                        <img className='w-full' src={Frame4} alt="" />
                        <img className='w-full' src={Frame5} alt="" />
                        <img className='w-full' src={Frame6} alt="" />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <div>
                <h1 className='text-2xl font-mono font-bold text-left my-3'>Studi Independen Projects With Hacktiv8</h1>
                {DataProject.map((item,idx)=>{
                    if(item.Tipe === 'Studi Independen'){
                    return(
                    <div key={idx} className="my-3 flex justify-left items-center bg-slate-900 p-5 rounded-md h-72">
                        <img className='w-60 mx-5' src={item.Gambar || skeleton} alt="" />
                        <div>
                            <h1 className='text-xl font-semibold font-mono'><span>Nama Project </span>: {item.Nama}</h1>
                            <p className='text-md font-thin text-slate-100'><span className='mr-3'>Deskripsi </span>: {item.Deskripsi}</p>
                            <div className='my-2 flex justify-between items-center'>
                                <h2 className='text-sm font-thin text-slate-400 w-40'><span className='mr-3'>Tools</span>: {item.Tools}</h2>
                                <Button variant='outlined' className='p-2 rounded-md mx-2'>
                                    <a href={item.Link}>Live Demo</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                )}})}
                </div>
                <div>
                <h1 className='text-2xl font-mono font-bold text-right my-3'>Mini Project</h1>
                {DataProject.map((item,idx)=>{
                    if(item.Tipe === 'Trial Project'){
                    return(
                    <div key={idx} className="my-3 flex justify-left items-center bg-slate-900 p-5 rounded-md h-72">
                        <img className='w-60 mx-5' src={item.Gambar || skeleton} alt="" />
                        <div>
                            <h1 className='text-xl font-semibold font-mono'><span>Nama Project </span>: {item.Nama}</h1>
                            <p className='text-md font-thin text-slate-100'><span className='mr-3'>Deskripsi </span>: {item.Deskripsi}</p>
                            <div className='my-2 flex justify-between items-center'>
                                <h2 className='text-sm font-thin text-slate-400 w-40'><span className='mr-3'>Tools</span>: {item.Tools}</h2>
                                <Button variant='outlined' className='p-2 rounded-md mx-2'>
                                    <a href={item.Link}>Live Demo</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                )}})}
                </div>
            </div>
            <h1 className='text-2xl font-mono font-bold text-center my-3'>Event Project</h1>
                {DataProject.map((item,idx)=>{
                    if(item.Tipe === 'Event'){
                    return(
                    <div key={idx} className="my-3 flex justify-left items-center border border-md p-5 rounded-md">
                        <img className='w-60 mx-5' src={item.Gambar || skeleton} alt="" />
                        <div>
                            <h1 className='text-xl font-semibold font-mono'><span>Nama Project </span>: {item.Nama}</h1>
                            <p className='text-md font-thin text-slate-100'><span className='mr-3'>Deskripsi </span>: {item.Deskripsi}</p>
                            <div className='my-2 flex justify-between items-center'>
                                <h2 className='text-sm font-thin text-slate-400 w-40'><span className='mr-3'>Tools</span>: {item.Tools}</h2>
                                <Button variant='outlined' className='p-2 rounded-md mx-2'>
                                    <a href={item.Link}>Live Demo</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                )}})}
            </div>
    )
}