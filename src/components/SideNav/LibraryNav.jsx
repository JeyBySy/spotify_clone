import { assets } from '../../assets/assets.js'
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react"
const LibraryNav = () => {
    const navigate = useNavigate();
    return (
        <div className="h-full">
            <div className='bg-custom-main h-full rounded-md py-5 '>
                <div className="flex mb-6 px-6">
                    <div className='flex flex-1 gap-3 items-center justify-start'>
                        <img src={assets.stack_icon} alt="stack" className='w-4 h-4' />
                        <div className='text-neutral-100 text-sm font-semibold'>
                            Your Library
                        </div>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <img src={assets.plus_icon} alt="Home" className='w-4 h-4' />
                        <img src={assets.arrow_icon} alt="Home" className='w-4 h-4' />
                    </div>
                </div>
                <div className='flex flex-wrap gap-3 mb-4 px-4'>
                    <div className="category">Playlists</div>
                    <div className="category">Artist</div>
                    <div className="category">Album</div>
                </div>
                <div className='overflow-y-auto custom-scrollbar scroll-smooth h-[70vh]'>
                    <div className='flex items-center justify-between pb-2 px-5 text-neutral-500 '>
                        <Search className='w-5 h-5' />
                        <div className='flex place-content-center items-center text-sm space-x-2'>
                            <span>
                                Recents
                            </span>
                            <img src={assets.list_icon} alt="Home" className='w-6' />
                        </div>
                    </div>
                    <section className='flex flex-col items-center gap-1 px-2'>
                        {Array(1).fill(null).map((_, index) => (
                            <button
                                onClick={() => navigate('/artist/jeybysy')}
                                key={index} className="list flex w-full items-center p-2 hover:bg-neutral-800 hover:rounded-md">
                                <div className="mr-1 ">
                                    <img src={assets.artistahin} alt="icon" className="w-12 h-12 rounded-full object-contain" />
                                </div>
                                <div title="Jheric Cocosa" className='flex flex-col items-start justify-center pl-2 w-[100px] flex-grow'>
                                    <p className="text-ellipsis overflow-hidden whitespace-nowrap w-full text-start font-medium">JeyBySy</p>
                                    <p className="text-sm text-gray-500">Artist</p>
                                </div>
                            </button>
                        ))}
                        {Array(1).fill(null).map((_, index) => (
                            <button
                                onClick={() => navigate('/playlist/jeybysy')}
                                key={index} className="list flex w-full items-center p-2 hover:bg-neutral-800 hover:rounded-md">
                                <div className="mr-1 ">
                                    <img src={assets.artistahin} alt="icon" className="w-12 h-12 rounded object-contain" />
                                </div>
                                <div title="Jheric Cocosa" className='flex flex-col items-start justify-center pl-2 w-[100px] flex-grow'>
                                    <p className="text-ellipsis overflow-hidden whitespace-nowrap w-full text-start font-medium">JeyBySy</p>
                                    <p className="text-sm text-gray-500">Playlist · Spotify </p>
                                </div>
                            </button>
                        ))}
                        {Array(1).fill(null).map((_, index) => (
                            <button
                                onClick={() => navigate('/album/jeybysy_album')}
                                key={index} className="list flex w-full items-center p-2 hover:bg-neutral-800 hover:rounded-md">
                                <div className="mr-1 ">
                                    <img src={assets.artistahin} alt="icon" className="w-12 h-12 rounded object-contain" />
                                </div>
                                <div title="Jheric Cocosa" className='flex flex-col items-start justify-center pl-2 w-[100px] flex-grow'>
                                    <p className="text-ellipsis overflow-hidden whitespace-nowrap w-full text-start font-medium">JeyBySy</p>
                                    <p className="text-sm text-gray-500">Album </p>
                                </div>
                            </button>
                        ))}
                    </section>
                </div>
            </div>
        </div>

    )
}

export default LibraryNav