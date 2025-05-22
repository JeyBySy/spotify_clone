import PropTypes from 'prop-types';
import { BadgeCheck, Play, Ellipsis, CirclePlus } from 'lucide-react'
import { useEffect, useState } from 'react';
import Card from "../Card"
import Carousel from "../Carousel"
import CardArtist from '../CardArtist';
import { useRef } from 'react';
import Footer from '../Footer';
import PopOver from '../PopOver';
import AboutArtist from '../AboutArtist';

// eslint-disable-next-line react/prop-types
const TestSongList = ({ index }) => {
    const [isHover, setHover] = useState(false)
    return (
        <div
            onMouseEnter={() => { setHover(true) }}
            onMouseLeave={() => { setHover(false) }}
            className='w-full grid grid-cols-[auto_1fr_30%_auto] gap-2 py-1 rounded justify-between hover:bg-neutral-800 items-center px-2'>
            <div className='w-12 h-12 flex items-center justify-center'>
                {isHover ? (<Play className='w-4 h-4 fill-white' />) : index + 1}
            </div>
            <div className='flex flex-row gap-2 justify-start items-center'>
                <div>
                    <div className='w-10 h-10 rounded bg-green-900'></div>
                </div>
                <div>title song here</div>
            </div>
            <div className='text-start text-sm text-neutral-400 font-medium'>
                279,000
            </div>
            <div className='flex flex-row gap-4 items-center px-4'>
                <CirclePlus className="w-5 h-5 stroke-neutral-300" />
                <p className='text-base text-neutral-200 font-semibold'>
                    3:00
                </p>
                <Ellipsis className='w-5 h-5 stroke-neutral-500 hover:stroke-neutral-300' />
            </div>
        </div>
    )
}

const ArtistDisplay = ({ artistID }) => {
    const scrollRef = useRef(null);
    const [scrollPos, setScrollPos] = useState(0);
    const [showStickyHeader, setShowStickyHeader] = useState(false);
    const [showArtistDetails, setShowArtistDetails] = useState(false)

    const handleShowArtistDetails = () => {
        setShowArtistDetails((prev) => !prev)
    }

    useEffect(() => {
        setShowStickyHeader(scrollPos > 387);
    }, [scrollPos]);

    return (
        <div
            ref={scrollRef}
            onScroll={(e) => setScrollPos(e.target.scrollTop)}
            className="rounded-md bg-custom-main overflow-y-auto custom-scrollbar relative">
            {showStickyHeader && (
                <div className={`shadow-2xl sticky top-0 w-full flex items-center justify-center z-40 bg-green-900 px-4 py-2 text-white font-bold text-lg transition-all duration-1000 ${showStickyHeader ? 'opacity-100' : 'opacity-100 pointer-events-none'}`}>
                    <div className='container flex items-center justify-start gap-3'>
                        <div className='p-3 rounded-full bg-green-500'>
                            <Play className='w-6 h-6 fill-black stroke-black' />
                        </div>
                        <p className='text-2xl font-bold'>JeyBySy</p>
                    </div>
                </div>
            )}

            <PopOver isOpen={showArtistDetails} onClose={handleShowArtistDetails}>
                <AboutArtist handleClick={handleShowArtistDetails} />
            </PopOver>

            <main data-id={artistID} className="flex flex-col">
                <div className="z-0 sticky top-0 bg-green-700 w-full h-[42dvh] bg-gradient-to-b from-neutral-900/0 to-neutral-900/40">
                    <div className='flex items-center justify-center h-full'>
                        <p>Image Here</p>
                    </div>
                </div>
                <div className='z-30 -mt-64 overflow-y-auto'>
                    <div className='container mx-auto bg-transparent flex flex-col gap-4 bottom-0 left-0 px-6 py-8 text-white text-2xl font-bold p-4'>
                        <p className='text-sm font-medium flex items-center gap-2'><BadgeCheck className='stroke-white fill-blue-500' />Verified Artist</p>
                        <p className='text-8xl font-black'>JeyBySy</p>
                        <span className='text-sm font-medium'>560,983 monthly listeners</span>
                    </div>
                    <div className="flex flex-col gap-2  place-items-center  bg-gradient-to-t from-custom-main from-[88%] to-green-950">
                        <section className='px-6 py-7 w-full container mx-auto'>
                            <div className='flex flex-row items-center justify-start gap-6'>
                                <div className='p-4 rounded-full bg-green-500'>
                                    <Play className='w-6 h-6 fill-black stroke-black' />
                                </div>
                                <div>
                                    <div className='w-9 h-12 rounded border-4 border-double'></div>
                                </div>
                                <button className='border px-5 py-2 text-xs rounded-full font-semibold'>
                                    Following
                                </button>
                                <div>
                                    <Ellipsis className='w-7 h-7 stroke-neutral-500 hover:stroke-neutral-300' />
                                </div>
                            </div>
                        </section>
                        <section className='w-full px-6 container mx-auto'>
                            <div className='flex flex-col'>
                                <p className='text-2xl font-semibold'>Popular</p>
                            </div>
                            <div className='w-full flex flex-col gap-4 py-4 '>
                                {Array(8).fill(null).map((_, index) => (
                                    <TestSongList key={index} index={index} />
                                ))}
                                <span className='cursor-pointer px-6 text-sm font-semibold text-neutral-300'>Show less</span>
                            </div>
                        </section>
                        <section className='w-full container mx-auto'>
                            <div className='flex flex-col'>
                                <Carousel title={"Featuring JeyBySy"} >
                                    {Array(20).fill(null).map((_, index) => (
                                        <Card key={index} />
                                    ))}
                                </Carousel>
                            </div>
                        </section>
                        <section className='w-full container mx-auto  px-6 '>
                            <div onClick={handleShowArtistDetails} className='flex flex-col gap-2'>
                                <p className='text-2xl font-semibold'>About</p>
                                <div className="bg-blue-950 w-full h-[400px] relative rounded-md">
                                    <div className="absolute bottom-0 left-0 right-0 p-10 max-h-[200px] overflow-hidden text-ellipsis">
                                        <p className="text-base font-bold whitespace-nowrap truncate">
                                            1,000,000 listeners
                                        </p>
                                        <p className="text-base text-justify line-clamp-2">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium eligendi id culpa, consectetur natus rem voluptates assumenda facilis saepe voluptatibus? Veritatis, quibusdam, et consectetur voluptatibus magni impedit temporibus modi magnam perferendis pariatur reprehenderit veniam obcaecati totam amet commodi eaque quisquam consequuntur ut optio! Distinctio nobis ipsam sequi recusandae dolor accusantium. Eaque itaque hic, veniam ullam aliquam possimus excepturi quis dolor accusamus at quod non magnam rerum repellat saepe, aspernatur pariatur minima assumenda alias? Iusto eum rerum esse asperiores et explicabo, nisi dolorum minima cumque voluptatem praesentium magni possimus velit reiciendis.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </section>
                        <section className='w-full container mx-auto'>
                            <div className='flex flex-col'>
                                <Carousel title={"Artist Playlist"} >
                                    {Array(1).fill(null).map((_, index) => (
                                        <Card key={index} />
                                    ))}
                                </Carousel>
                            </div>
                        </section>
                        <section className='w-full container mx-auto'>
                            <div className='flex flex-col'>
                                <Carousel title={"Fans also like"} >
                                    {Array(20).fill(null).map((_, index) => (
                                        <CardArtist key={index} />
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
ArtistDisplay.propTypes = {
    artistID: PropTypes.string.isRequired,
};

export default ArtistDisplay