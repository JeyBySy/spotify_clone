import { House, PanelTop, Search, User } from 'lucide-react';
import { assets } from '../assets/assets.js'
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full h-[55px] grid grid-cols-[10%_400px_auto] md:grid-cols-[auto_1fr_auto] my-1 gap-2 relative'>
            <div className="flex items-center ml-4 w-full"
                onClick={() => navigate('/')}>
                <img src={assets.spotify_logo_inverse} alt="Logo" className='w-10 h-10 cursor-pointer' />
            </div>
            <div className='flex gap-2 relative items-center w-full h-full py-2 lg:px-4 lg:justify-end lg:pr-[16rem] overflow-hidden '>
                <div className="bg-neutral-800 place-content-center rounded-full p-3">
                    <House className="w-6 h-6  stroke-neutral-300" />
                </div>
                <div className='bg-neutral-800 flex items-center rounded-full p-3 gap-3 w-full 2xl:w-[470px]'>
                    <div className="bg-neutral-800 place-content-center rounded-full">
                        <Search className="w-6 h-6  stroke-neutral-400" />
                    </div>
                    <input className="search w-[100%]" type="text" placeholder='What do you want to play?' />
                    <div className=" border-l-[1px] border-neutral-500 pl-3">
                        <PanelTop className="w-6 h-6  stroke-neutral-400" />
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-end items-center w-full gap-2 ">
                <div className='gap-1  items-center lg:block hidden '>
                    <button className='border px-4 py-1.5 rounded-full text-sm bg-white text-black font-semibold'>
                        Explore Premium
                    </button>
                </div>
                <button className='flex gap-2 items-center justify-center px-4 py-1 text-neutral-400'>
                    <img src={assets.download_logo} alt="Download" className='w-4 h-4 border-2 rounded-full ' />
                    <div className="flex items-center font-semibold text-sm ">
                        Install App
                    </div>
                </button>
                <div className='flex place-content-center gap-2 px-2'>
                    <img src={assets.bell_icon} alt="Home" className='w-4 m-auto cursor-pointer' />
                </div>
                <div className='flex place-content-center gap-2 px-2'>
                    <User />
                </div>
                <div className="bg-custom-main place-content-center rounded-full w-12 h-12 border cursor-pointer">
                    <img src={assets.home_icon} alt="Home" className='w-5 m-auto ' />
                </div>
            </div>
        </div>
    )
}

export default Navbar