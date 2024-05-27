import zaki from '../assets/zaki2.jpg';
import zaki2 from '../assets/zaki.jpg';
import zaki3 from '../assets/zaki3.png';
import zaki4 from '../assets/zaki4.jpeg';

export default function Know(){
    return(
        <div className='mx-40 my-3'>
            <div className='w-full flex justify-center my-3'>
                <h1 className='text-2xl font-mono font-bold text-left'>Passion</h1>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <div className='bg-gray-600'>
                    <img className='h-56 w-full object-cover' src={zaki4} alt="" /> 
                    <div className='p-5'>
                        <h1 className='font-mono text-lg font-semibold'>Organization</h1>
                        <p className='text-sm font-thin text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, modi.</p>
                    </div>
                </div>
                <div className='bg-gray-600'>
                    <img className='h-56 w-full object-cover' src={zaki} alt="" /> 
                    <div className='p-5'>
                        <h1 className='font-mono text-lg font-semibold'>Volunteer</h1>
                        <p className='text-sm font-thin text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, modi.</p>
                    </div>
                </div>
                <div className='bg-gray-600'>
                    <img className='h-56 w-full object-cover' src={zaki3} alt="" /> 
                    <div className='p-5'>
                        <h1 className='font-mono text-lg font-semibold'>Public Speaking</h1>
                        <p className='text-sm font-thin text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, modi.</p>
                    </div>
                </div>
                <div className='bg-gray-600'>
                    <img className='h-56 w-full object-cover' src={zaki2} alt="" /> 
                    <div className='p-5'>
                        <h1 className='font-mono text-lg font-semibold'>International Conference</h1>
                        <p className='text-sm font-thin text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, modi.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}