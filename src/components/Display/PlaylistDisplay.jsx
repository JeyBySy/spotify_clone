import { ArrowDown, Check, CirclePlus, Clock3, Ellipsis, List, Play } from "lucide-react"
import Footer from "../Footer"
import { useEffect, useRef, useState } from "react"
import Carousel from "../Carousel"
import Card from "../Card"

// eslint-disable-next-line react/prop-types
const TestSongList = ({ index }) => {
    const [isHover, setHover] = useState(false);

    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="grid grid-cols-[40px_1.8fr_1fr_1fr_100px] items-center gap-3 py-1 rounded hover:bg-neutral-800 px-2 hover:cursor-pointer"
        >
            {/* Column 1: Index or Play Icon */}
            <div className="w-full h-12 flex items-center justify-center">
                {isHover ? <Play className="w-4 h-4 fill-white" /> : index + 1}
            </div>

            {/* Column 2: Title and Thumbnail */}
            <div className="flex items-center gap-2 overflow-hidden">
                <div className="w-10 h-10 rounded bg-green-900 shrink-0" />

                <div className="flex flex-col min-w-0">
                    <span
                        className="text-base w-full font-medium text-white truncate"
                        title="title song here"
                    >
                        title song here
                    </span>
                    <span className="text-sm text-neutral-500">Lorem</span>
                </div>
            </div>

            {/* Column 3: Album */}
            <div className="text-sm text-neutral-400 font-medium text-start overflow-hidden ">
                <div className="flex flex-col min-w-0">
                    <span
                        className="text-sm w-full font-medium  truncate"
                        title="title song here"
                    >
                        title song heredwd qdwq dasd qwdasd qwdsads
                    </span>
                </div>
            </div>

            {/* Column 4: Album */}
            <div className="text-sm text-neutral-400 font-medium text-start">
                May 25, 2025
            </div>


            {/* Column 5: Actions */}
            <div className="grid grid-cols-3 items-center gap-4">
                <CirclePlus className={`w-5 h-5 stroke-neutral-400 hover:stroke-neutral-100
                    ${isHover ? "opacity-100 cursor-pointer " : "opacity-0 pointer-events-none"}
                    `} />
                <p className="text-sm text-neutral-200 font-semibold">3:00</p>
                <Ellipsis className="w-5 h-5 stroke-neutral-500 hover:stroke-neutral-300" />
            </div>
        </div>
    );
};

const PlaylistDisplay = () => {
    const scrollRef = useRef(null);
    const [scrollPos, setScrollPos] = useState(0);
    const [showStickyHeader, setShowStickyHeader] = useState(false);
    console.log(scrollPos);

    useEffect(() => {
        setShowStickyHeader(scrollPos > 387);
    }, [scrollPos]);

    return (
        <div
            ref={scrollRef}
            onScroll={(e) => setScrollPos(e.target.scrollTop)}
            className="rounded-md bg-custom-main overflow-y-auto custom-scrollbar relative ">
            {showStickyHeader && (
                <div className={`shadow-2xl h-[65px] sticky top-0 w-full flex items-center justify-center z-30 bg-blue-900 px-4 py-2 text-white font-bold text-lg transition-all duration-1000 ${showStickyHeader ? 'opacity-100' : 'opacity-100 pointer-events-none'}`}>
                    <div className='container flex items-center justify-start gap-3'>
                        <div className='p-3 rounded-full bg-green-500'>
                            <Play className='w-6 h-6 fill-black stroke-black' />
                        </div>
                        <p className='text-2xl font-bold'>JeyBySy</p>
                    </div>
                </div>
            )}
            <main className="w-full">
                <div className="">
                    <div className="bg-blue-700 w-full h-[290px] bg-gradient-to-b from-neutral-900/0 to-neutral-900/40">
                        <div className='flex items-center h-full px-6 py-5 pt-8 container mx-auto'>
                            <div className="rounded shadow-2xl w-[14.5rem] h-[14.5rem] bg-blue-900 justify-center items-center flex">
                                Image
                            </div>
                            <div className='flex flex-col gap-4  text-white text-2xl font-bold px-6 justify-end h-full'>
                                <p className='text-sm font-medium flex items-center'>Public Playlist</p>
                                <p className='text-8xl font-black'>JeyBySy</p>
                                <span className="text-xs text-neutral-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, veritatis!</span>
                                <div className="flex items-center gap-1">
                                    <div className="w-6 h-6 bg-blue-900 rounded-full" />
                                    <span className='text-sm font-medium'>Spotify • 2,066,782 saves • 10 songs, about 3 hr 15 min</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 place-items-center bg-gradient-to-t from-custom-main from-85% to-blue-700/30 ">
                        <section className='px-6 py-6 w-full container mx-auto flex justify-between items-center'>
                            <div className='flex flex-row items-center justify-start gap-7'>
                                <div className='p-4 rounded-full bg-green-500'>
                                    <Play className='w-6 h-6 fill-black stroke-black' />
                                </div>
                                <div className='w-9 h-12 rounded-md border-2'></div>
                                <button className='p-1 text-xs rounded-full font-semibold bg-green-500'>
                                    <Check className="w-5 h-5 stroke-[3px] stroke-neutral-800" />
                                </button>
                                <button className='p-1 text-xs rounded-full font-semibold border-2'>
                                    <ArrowDown className="w-4 h-4 stroke-[3px] stroke-neutral-100" />
                                </button>
                                <button>
                                    <Ellipsis className='w-7 h-7 stroke-neutral-300 hover:stroke-neutral-100' />
                                </button>
                            </div>
                            <div>
                                <button className="flex items-center gap-2 text-neutral-300">
                                    <p>List</p>
                                    <List className='w-5 h-5 stroke-neutral-300 hover:stroke-neutral-100' />
                                </button>
                            </div>
                        </section>
                        <section className='w-full container mx-auto'>
                            <div className="flex flex-col gap-2">
                                <div className={`sticky top-[65px] grid grid-cols-[40px_1.8fr_1fr_1fr_100px] gap-3 items-center text-neutral-200 text-sm py-2 px-6
                                    ${showStickyHeader ? "bg-neutral-800" : ""}
                                    `}>
                                    <span className="text-center">#</span>
                                    <span className="px-2">Title</span>
                                    <span className="text-start">Album</span>
                                    <span className="text-start">Date Added</span>
                                    <span className="flex items-center justify-center gap-1">
                                        <Clock3 className="w-4 h-4" />
                                    </span>
                                </div>
                                <hr className="border-none h-[2px] bg-neutral-800" />
                                <div className='w-full flex flex-col gap-4 py-2 px-4'>
                                    {Array(8).fill(null).map((_, index) => (
                                        <TestSongList key={index} index={index} />
                                    ))}
                                    <span className='cursor-pointer px-6 text-sm font-semibold text-neutral-300'>Show less</span>
                                </div>
                            </div>
                        </section>
                        <section className='w-full container mx-auto'>
                            <div className='flex flex-col'>
                                <p className='text-2xl font-semibold'></p>
                            </div>
                            <div className='flex flex-col'>
                                <Carousel title={"You Might Also Like"} >
                                    {Array(20).fill(null).map((_, index) => (
                                        <Card key={index} />
                                    ))}
                                </Carousel>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default PlaylistDisplay