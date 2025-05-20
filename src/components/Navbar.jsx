import { assets } from '../assets/assets.js'
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full max-h-13 flex my-1 py-1 gap-2'>
            <div
                onClick={() => navigate('/')}
                className="flex ml-4 mt-1 w-full">
                <img src={assets.spotify_logo_inverse} alt="Logo" className='w-10 h-10 cursor-pointer' />
            </div>
            <div className="flex gap-2 px-20 w-full">
                <div className="bg-custom-main place-content-center rounded-full w-14">
                    <img src={assets.home_icon} alt="Home" className='w-6 m-auto cursor-pointer' />
                </div>
                <div className="bg-custom-main flex justify-items-center rounded-full px-3 gap-3 w-[100%]">
                    <div className="bg-custom-main place-content-center rounded-full">
                        <img src={assets.search_icon} alt="Home" className='w-7' />
                    </div>
                    <input className="bg-custom-main search w-[100%]" type="text" placeholder='What do you want to play?' />
                    <div className="place-content-center flex gap-2 border-l-2 m-3 pl-3 border-s border-gray-500">
                        <img src={assets.browse_logo} alt="browse" className='w-6 h-6 m-auto place-self-end cursor-pointer object-contain' />
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-end w-full gap-3 pr-1">
                <div className='flex place-content-center gap-2  items-center '>
                    <button className='border px-4 py-1.5 rounded-full text-sm bg-white text-black font-semibold'>
                        Explore Premium
                    </button>
                </div>
                <button className='flex gap-2 items-center justify-center px-2.5 py-1 text-neutral-400'>
                    <img src={assets.download_logo} alt="Download" className='w-4 h-4 border-2 rounded-full ' />
                    <div className="flex items-center font-semibold text-sm ">
                        Install App
                    </div>
                </button>
                <div className='flex place-content-center gap-2 px-3'>
                    <img src={assets.bell_icon} alt="Home" className='w-4 m-auto cursor-pointer' />
                </div>
                <div className="bg-custom-main place-content-center rounded-full w-12 cursor-pointer">
                    <img src={assets.home_icon} alt="Home" className='w-5 m-auto ' />
                </div>
            </div>
        </div>
    )
}

export default Navbar