function Footers(){
    return(
        <footer className='mx-5'>
            <div className='flex justify-between mt-12 pb-3 border-black border-t-4 pt-5'>
                <div><h1 className="text-sm">© 2024 Zaki Fauzan R. All rights reserved.</h1></div>
                <div className='flex flex-col lg:flex-row text-right lg:text-left text-sm ml-3'>
                    <h1 className=''>Privacy Policy</h1>
                    <h1 className='ml-0 lg:ml-3'>Terms Policy</h1>
                    <h1 className='ml-0 lg:ml-3'>Cookies Settings</h1>
                </div>
            </div>
        </footer>
    )
}

export default Footers;