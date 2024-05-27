import { Button } from '@material-tailwind/react';
import skeleton from '../assets/Project/skeleton.jpg';
import DataProject from '../data/dataProject';
import { Link } from 'react-router-dom';

export default function Project(){
    return(
        <div className="mx-10 py-5">
            <h1 className='text-2xl font-mono font-bold text-center my-3'>Recent Projects</h1>
            {DataProject.slice(0,3).map((item,idx)=>(
                <div key={idx} className="my-3 flex justify-left items-center border border-md p-5">
                    <img className='w-96 mx-5' src={item.Gambar || skeleton} alt="" />
                    <div>
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
            ))}
            <div className='text-center'>
                <Button className='p-2 rounded-md text-center' variant='outlined'><Link to='/All-Project'>More</Link></Button>
            </div>
        </div>
    )
}