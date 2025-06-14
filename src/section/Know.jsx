import zaki from '../assets/zaki2.jpg';
import zaki2 from '../assets/zaki.jpg';
import zaki4 from '../assets/zaki4.jpeg';

export default function Know(){
    return(
        <div className='px-5 lg:px-40 my-3 w-full' data-aos="fade-up">
            <div className='w-full flex justify-center my-3'>
                <h1 className='text-2xl font-mono font-bold text-left'>Experience</h1>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className='w-full glass p-3'>
                    <img className='h-56 w-full object-cover' src={zaki4} alt="" /> 
                    <div className='p-5'>
                        <h1 className='font-mono text-lg font-semibold'>Organization</h1>
                        <ul className='px-5 text-sm font-thin list-disc text-slate-300'>
                            <li>Information System Association</li>
                            <li>Gerakan Mengajar Desa Kalimantan Timur</li>
                            <li>Badan Eksekutif Mahasiswa Fakultas Teknik</li>
                        </ul>
                    </div>
                </div>
                <div className='w-full glass p-3'>
                    <img className='h-56 w-full object-cover' src={zaki} alt="" /> 
                    <div className='p-5'>
                        <h1 className='font-mono text-lg font-semibold'>Volunteer</h1>
                        <ul className='px-5 text-sm list-disc font-thin text-slate-300'>
                            <li>Gerakan Mengajar Desa Kalimantan Timur</li>
                            <li>Earth Hour Balikpapan</li>
                        </ul>
                    </div>
                </div>
                <div className='w-full glass p-3'>
                    <img className='h-56 w-full object-cover' src={zaki2} alt="" /> 
                    <div className='p-5'>
                        <h1 className='font-mono text-lg font-semibold'>International Conference</h1>
                        <ul className='px-5 text-sm font-thin list-disc text-slate-300'>
                            <li>Delegates of Istanbul Youth Summit 2021</li>
                            <li>Delegates of International Wonderfull Education 2021</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}