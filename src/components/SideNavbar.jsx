import { assets } from '../assets/assets.js'
const SideNavbar = () => {
    return (
        <div className="bg-secondary m-2 rounded py-4 px-6 w-[25%] h-full">
            <div className="flex mb-7">
                <div className='flex flex-1 gap-3'>
                    <img src={assets.stack_icon} alt="stack" className='w-6' />
                    <div className='text-gray-400 font-semibold'>

                        Your Library
                    </div>
                </div>
                <div className='flex gap-5 items-center'>
                    <img src={assets.plus_icon} alt="Home" className='w-4 h-4' />
                    <img src={assets.arrow_icon} alt="Home" className='w-4 h-4' />
                </div>
                {/* Category */}
            </div>
            <div className='flex flex-wrap gap-3 pb-3'>
                <div className="category">Playlist</div>
                <div className="category">Artist</div>
                <div className="category">Album</div>
            </div>
            <div className='h-[80%] overflow-y-auto scroll-smooth'>
                <div className='flex items-center justify-between pb-3 '>
                    <img src={assets.search_icon} alt="Home" className='w-4' />
                    <div className='flex place-content-center text-sm'>
                        Recents
                        <img src={assets.list_icon} alt="Home" className='w-5' />
                    </div>
                </div>
                <div className='flex flex-col items-start gap-2'>
                    <div className="list flex items-center">
                        <div className="list-icon m-5">Icon</div>
                        <div className='flex flex-col'>
                            <div className="list-name ">Jherico</div>
                            <div className="list-title text-sm text-gray-500">Artist</div>
                        </div>
                    </div>
                    <div className="list flex items-center">
                        <div className="list-icon m-5">Icon</div>
                        <div className='flex flex-col'>
                            <div className="list-name ">Jherico</div>
                            <div className="list-title text-sm text-gray-500">Artist</div>
                        </div>
                    </div>
                    <div className="list flex items-center">
                        <div className="list-icon m-5">Icon</div>
                        <div className='flex flex-col'>
                            <div className="list-name ">Jherico</div>
                            <div className="list-title text-sm text-gray-500">Artist</div>
                        </div>
                    </div>
                    <div className="list flex items-center">
                        <div className="list-icon m-5">Icon</div>
                        <div className='flex flex-col'>
                            <div className="list-name ">Jherico</div>
                            <div className="list-title text-sm text-gray-500">Artist</div>
                        </div>
                    </div>
                    <div className="list flex items-center">
                        <div className="list-icon m-5">Icon</div>
                        <div className='flex flex-col'>
                            <div className="list-name ">Jherico</div>
                            <div className="list-title text-sm text-gray-500">Artist</div>
                        </div>
                    </div>
                    <div className="list flex items-center">
                        <div className="list-icon m-5">Icon</div>
                        <div className='flex flex-col'>
                            <div className="list-name ">Jherico</div>
                            <div className="list-title text-sm text-gray-500">Artist</div>
                        </div>
                    </div>
                    <div className="list flex items-center">
                        <div className="list-icon m-5">Icon</div>
                        <div className='flex flex-col'>
                            <div className="list-name ">Jherico</div>
                            <div className="list-title text-sm text-gray-500">Artist</div>
                        </div>
                    </div>
                    <div className="list flex items-center">
                        <div className="list-icon m-5">Icon</div>
                        <div className='flex flex-col'>
                            <div className="list-name ">Jherico</div>
                            <div className="list-title text-sm text-gray-500">Artist</div>
                        </div>
                    </div>
                    <div className="list flex items-center">
                        <div className="list-icon m-5">Icon</div>
                        <div className='flex flex-col'>
                            <div className="list-name ">Jherico</div>
                            <div className="list-title text-sm text-gray-500">Artist</div>
                        </div>
                    </div>
                    <div className="list flex items-center">
                        <div className="list-icon m-5">Icon</div>
                        <div className='flex flex-col'>
                            <div className="list-name ">Jherico</div>
                            <div className="list-title text-sm text-gray-500">Artist</div>
                        </div>
                    </div>
                    <div className="list flex items-center">
                        <div className="list-icon m-5">Icon</div>
                        <div className='flex flex-col'>
                            <div className="list-name ">Jherico</div>
                            <div className="list-title text-sm text-gray-500">Artist</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SideNavbar