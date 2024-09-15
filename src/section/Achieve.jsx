export default function Achieve(){
    return(
        <div id="Award">
        <div className='mx-5 lg:mx-12'>
        <h1 className='text-2xl font-mono font-bold my-3 text-center'>Achievement</h1>
            <div className="flex justify-between items-center">
            <div>
                <h1 className="text-lg font-semibold">
                    Delegates of Istanbul Youth Summit
                </h1>
                <ol className="list-decimal mx-10 text-sm lg:text-md font-thin text-slate-200">
                    <li>Lolos seleksi dari 600 pendaftar</li>
                    <li>Membuat Project</li>
                    <li>Menjalankan projek kelompok bersama tim</li>
                    <li>Mempresentasikan projek didepan stakeholder dan pejabat</li>
                </ol>
            </div>
                <div className='font-light text-sm text-slate-300'>21 Apr 2021 – 23 Apr 2021 </div>
            </div>
            <div className="flex justify-between items-center">
            <div>
                <h1 className="text-lg font-semibold">
                    Delegates of International Wonderfull Education
                </h1>
                <ol className="list-decimal mx-10 text-sm lg:text-md font-thin text-slate-200">
                    <li>Menjadi delegasi dalam agenda konfrensi international pemuda.</li>
                    <li>Membawakan isu pendidikan ke ajang international</li>
                    <li>Menganalisis tentang kekurangan dan masalah yang terjadi pada sistem pendidikan di Indonesia</li>
                </ol>
            </div>
                <div className='font-light text-sm text-slate-300'>23 Apr 2021 – 24 Apr 2021 </div>
            </div>
        </div>
        <div className="text-center my-5">
            <a className="border border-white rounded-md p-2 hover:bg-white hover:text-black hover:font-semibold" href='cv/CV_ATS.pdf' download="CV_ATS.pdf">
                Download CV
            </a>
        </div>
        </div>
    )
}