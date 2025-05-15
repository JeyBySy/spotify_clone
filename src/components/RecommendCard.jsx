
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Ellipsis, CirclePlus, Play, VolumeX } from "lucide-react";
import PropTypes from "prop-types";

const RecommendCard = ({ children, headTitle, description, title, category = "Playlist · Spotify" }) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [onHover, setOnHover] = useState(false);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Determine card width based on screen size
    let cardWidth = "w-full"; // fallback

    if (screenWidth >= 2560) {
        cardWidth = "w-1/4"; // 4 cards per row
    } else if (screenWidth >= 2400) {
        cardWidth = "w-1/3"; // 2 cards per row
    } else if (screenWidth >= 1920) {
        cardWidth = "w-1/2"; // 2 cards per row
    } else if (screenWidth >= 1024) {
        cardWidth = "w-full"; // 1 per row on smaller desktops
    }
    return (
        <div className={`${cardWidth} h-[650px] py-4 px-5 flex flex-col gap-3 relative`}>
            <p className="text-xs text-neutral-400 capitalize">
                {headTitle}
            </p>
            <div
                onMouseEnter={() => {
                    setOnHover(true)
                }}
                onMouseLeave={() => {
                    setOnHover(false)
                }}
                className="relative h-[620px]  w-full">
                <div className="absolute top-0 left-0 w-full h-fit bg-gradient-to-t from-neutral-900/0 to-neutral-900/70">
                    <div className="flex flex-row justify-start items-center py-9 px-8 gap-3">
                        <div className="w-24 h-24 border flex items-center justify-center">
                            Image
                        </div>
                        <div className="flex flex-col space-y-1">
                            <p className="font-black text-3xl"> {title}</p>
                            <p className="capitalize text-sm text-neutral-300"> {category}</p>
                        </div>
                    </div>
                </div>
                {onHover && (
                    <>
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 px-5 z-30 flex items-center">
                            <button>
                                <ChevronLeft className="w-8 h-8 p-1 rounded-full bg-neutral-800 stroke-neutral-400" />
                            </button>
                        </div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 px-5 z-30 flex items-center">
                            <button>
                                <ChevronRight className="w-8 h-8 p-1 rounded-full bg-neutral-800 stroke-neutral-400" />
                            </button>
                        </div>
                    </>
                )}
                <div className="h-full w-full flex items-center rounded-lg  bg-green-900 ">
                    {children}
                </div>

                <div className="absolute bottom-0 left-0 w-full h-fit z-0">
                    <p className={`px-8 pb-10 text-sm flex items-end `}>
                        {description}
                    </p>
                    <div className={`flex w-full flex-row justify-between items-center px-5 py-6 transition-all duration-700 overflow-hidden z-0
                            ${onHover ? "opacity-100 max-h-40 pointer-events-auto" : "opacity-0 max-h-0 pointer-events-none"}`}>
                        <div className="text-sm flex items-center justify-center bg-black/60 h-fit py-1 px-4 rounded-full gap-2 transition-all">
                            <VolumeX className="w-5 h-5" />
                            Preview
                        </div>
                        <div className="flex gap-4">
                            <button><Ellipsis className="w-8 h-8 stroke-neutral-300" /></button>
                            <button><CirclePlus className="w-8 h-8 stroke-neutral-300" /></button>
                            <button className="rounded-full border bg-white p-3"><Play className="w-6 h-6 stroke-black fill-black" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}
RecommendCard.propTypes = {
    children: PropTypes.node,
    description: PropTypes.string,
    title: PropTypes.string,
    headTitle: PropTypes.string,
    category: PropTypes.string,
}

export default RecommendCard