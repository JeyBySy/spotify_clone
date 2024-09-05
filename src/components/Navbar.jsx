import { assets } from '../assets/assets.js'
const Navbar = () => {
    return (
        <div className='w-screen max-h-13 flex justify-between my-1 py-1 px-2 gap-2 '>
            <div className="flex ml-4 mt-1">
                <img src={assets.spotify_logo_inverse} alt="Logo" className='w-10 h-10 cursor-pointer' />
            </div>
            <div className="flex w-full sm:w-full lg:w-[33rem] lg:ml-[10%] gap-2 ">
                <div className="bg-secondary place-content-center rounded-full w-14">
                    <img src={assets.home_icon} alt="Home" className='w-6 m-auto cursor-pointer' />
                </div>
                <div className="bg-secondary flex justify-items-center rounded-full px-3 gap-3 w-[100%]">
                    <div className="bg-secondary place-content-center rounded-full">
                        <img src={assets.search_icon} alt="Home" className='w-7' />
                    </div>
                    <input className="bg-secondary search w-[100%]" type="text" placeholder='What do you want to play?' />
                    <div className="place-content-center flex gap-2 border-l-2 m-3 pl-3 border-s border-gray-500">
                        <img src={assets.browse_logo} alt="browse" className='w-6 h-6 m-auto place-self-end cursor-pointer object-contain' />
                    </div>
                </div>
            </div>
            <div className="flex gap-4">
                <div className='flex place-content-center px-6 gap-1 cursor-pointer '>
                    <img src={assets.download_logo} alt="Download" className='w-4 m-auto border-2 rounded-full p-[1px]' />
                    <div className="place-content-center font-semibold text-sm ">
                        Install App
                    </div>
                </div>
                <img src={assets.bell_icon} alt="Home" className='w-4 m-auto cursor-pointer' />
                <div className="bg-secondary place-content-center rounded-full w-14 cursor-pointer">
                    <img src={assets.home_icon} alt="Home" className='w-5 m-auto ' />
                </div>
            </div>
        </div>
    )
}

export default Navbar