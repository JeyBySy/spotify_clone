import { assets } from '../../assets/assets.js'
const Library = () => {
    return (
        <div className='bg-secondary h-full rounded-md py-5 '>
            <div className="flex mb-6 px-6">
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
            </div>
            <div className='flex flex-wrap gap-3 mb-4 px-4'>
                <div className="category">Playlists</div>
                <div className="category">Artist</div>
                <div className="category">Album</div>
            </div>
            <div className='overflow-y-auto scroll-smooth h-[70vh] px-2'>
                <div className='flex items-center justify-between pb-5 px-4 '>
                    <img src={assets.search_icon} alt="Home" className='w-4' />
                    <div className='flex place-content-center items-center text-sm'>
                        Recents
                        <img src={assets.list_icon} alt="Home" className='w-6' />
                    </div>
                </div>
                <section className='flex flex-col items-center gap-4'>
                    {Array(20).fill(null).map((_, index) => (
                        <div key={index} className="list flex w-full">
                            <div className="mr-1">
                                <img src={assets.img1_icon} alt="icon" className="w-[4rem] h-12 rounded-xl object-contain" />
                            </div>
                            <div className='flex flex-col w-[100px] flex-grow'>
                                <p className="text-ellipsis overflow-hidden whitespace-nowrap w-full">Jhedqwasdqwdqwdasd wdasd qwddasdwqricco </p>
                                <p className="text-sm text-gray-500">Artist</p>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    )
}

export default Library