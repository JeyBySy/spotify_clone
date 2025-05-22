
import { Ellipsis, Facebook, Instagram, Maximize2, PanelRightClose, X } from "lucide-react"
import PopOver from "../PopOver"
import { useState } from "react"

const ArtistNav = () => {
    const [showArtistDetails, setShowArtistDetails] = useState(false)

    const handleShowArtistDetails = () => {
        setShowArtistDetails((prev) => !prev)
    }
    return (
        <div className=" h-full custom-scrollbar relative">
            {showArtistDetails && (
                <PopOver isOpen={showArtistDetails} onClose={handleShowArtistDetails}>
                    <div className="bg-neutral-800 text-white relative rounded-md h-full mx-auto shadow-lg overflow-y-auto custom-scrollbar">
                        <button
                            onClick={handleShowArtistDetails}
                            className="absolute top-3 right-3 p-2 rounded-full bg-neutral-900/60 hover:bg-neutral-900 transition-colors duration-200"
                        >
                            <X className="w-5 h-5 stroke-neutral-400 hover:stroke-white transition-colors duration-200" />
                        </button>
                        <section className="grid grid-rows-[auto_1fr_auto]">
                            <div className="bg-blue-900 w-full h-[45vh] flex items-center justify-center">Image</div>
                            <div className="py-6 px-10 flex flex-row gap-12">
                                <div className="flex flex-col justify-start gap-10">
                                    <div className="space-y-3">
                                        <div className="flex flex-col items-start justify-center py-3">
                                            <p className="text-[2rem] leading-10 font-black"> 22,347</p>
                                            <span className="text-sm text-neutral-400 font-medium">Followers</span>
                                        </div>
                                        <div className="flex flex-col items-start justify-center py-3">
                                            <p className="text-[2rem] leading-10 font-black">1,739,508</p>
                                            <span className="text-sm text-neutral-400 font-medium">Monthly Listeners</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start justify-center pb-4 space-y-2">
                                        <div>
                                            <p className="text-sm font-bold">Quezon City, PH</p>
                                            <span className="text-sm text-neutral-400 font-medium">226,483 listeners</span>
                                        </div>
                                        <div>
                                            <p className="text-base font-bold">Manila, PH</p>
                                            <span className="text-sm text-neutral-400 font-medium">146,261 listeners</span>
                                        </div>
                                        <div>
                                            <p className="text-base font-bold">Cebu City, PH</p>
                                            <span className="text-sm text-neutral-400 font-medium">94,616 listeners</span>
                                        </div>
                                        <div>
                                            <p className="text-base font-bold">Davao City, PH</p>
                                            <span className="text-sm text-neutral-400 font-medium">92,584 listeners</span>
                                        </div>
                                        <div>
                                            <p className="text-base font-bold">Makati City, PH</p>
                                            <span className="text-sm text-neutral-400 font-medium">87,398 listeners</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2 text-base text-neutral-300 font-normal">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nobis eos hic enim aspernatur magni, libero quia sed incidunt assumenda expedita necessitatibus odit iure perspiciatis minima iusto tenetur, tempora quasi.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea, animi repellendus minus ullam tempora maxime voluptatum, harum labore explicabo corporis optio accusantium dolor autem debitis incidunt hic, fuga veritatis eius perferendis! Quam et pariatur eos maxime nulla illum ab veniam quidem ratione veritatis amet praesentium velit dolore minus blanditiis magnam labore quos, harum qui excepturi? Quia numquam, molestias consectetur tenetur quos voluptate qui minima culpa quis, vel laudantium. Quia praesentium nam ducimus nisi laudantium officiis esse voluptatibus. Maiores cum laborum omnis inventore deleniti architecto. Alias, ea nemo deleniti quam at explicabo non illo repudiandae architecto! Culpa saepe unde adipisci?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil laboriosam natus minima, similique ratione consequuntur unde! Officia error quibusdam, quia, illo nulla corrupti veritatis dolores magni quidem asperiores harum temporibus!</p>
                                    <div className="py-4 text-sm capitalize flex gap-2 items-center">
                                        <div className="rounded-full w-8 h-8 bg-blue-900 " />
                                        <p>Posted by JeyBySy</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-5 px-8 pb-16 text-sm">
                                <div className="flex flex-row items-center gap-2">
                                    <Facebook className="w-4 h-4 " />
                                    <p>Facebook</p>
                                </div>
                                <div className="flex flex-row items-center gap-2">
                                    <Instagram className="w-4 h-4" />
                                    <p>Instagram</p>
                                </div>
                            </div>
                        </section>



                    </div>
                </PopOver>
            )}
            <main>
                <div className="sticky top-0 z-30 bg-custom-main py-5 px-4 shadow-2xl flex flec-row  justify-between">
                    <div className="flex items-center justify-centers gap-2">
                        <PanelRightClose className='w-5 h-5 stroke-neutral-300' />
                        <p className="font-semibold text-sm underline">JeyBySy</p>
                    </div>
                    <div className="flex flex-row gap-5">
                        <Ellipsis className='w-5 h-5 stroke-neutral-500 hover:stroke-neutral-300' />
                        <Maximize2 className='w-4 h-4 stroke-neutral-500 hover:stroke-neutral-300' />
                    </div>
                </div>
                <div className="z-0 bg-gradient-to-b from-green-900 from-80% to-custom-main h-[820px] relative flex items-center justify-center">
                    Image
                </div>
                <section className="relative py-4 bg-custom-main">
                    <section className="-mt-[350px] px-4 space-y-5">
                        <div className="w-full flex flex-col gap-3 ">
                            <p className="text-2xl font-semibold">
                                The nothing song
                            </p>
                            <span className="text-neutral-300 text-base font-medium">
                                JeyBySy
                            </span>
                        </div>
                        <div
                            onClick={handleShowArtistDetails}
                            className="w-full rounded-md bg-neutral-800 flex flex-col h-fit relative ">
                            <div className=" w-full h-[15rem] bg-blue-900 rounded-t-md justify-center items-center flex">
                                Image
                                <p className="absolute top-0 left-0 text-sm p-4 font-bold">About JeyBySy</p>
                            </div>
                            <div className="p-4 flex flex-col gap-2">
                                <p className="font-bold">JeyBySy</p>
                                <div className="w-full flex justify-between items-center">
                                    <p className="text-base">15,078,379 Monthly Listeners</p>
                                    <button className="px-4 py-2 font-semibold rounded-full border text-xs">Follow</button>
                                </div>
                                <div className="text-justify text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia expedita odit nulla illum libero accusamus itaque dolor temporibus harum deleniti ab, nobis laboriosam sint quas modi voluptatem sed repellendus aspernatur.
                                </div>
                            </div>
                        </div>
                        <div className="w-full rounded-md bg-neutral-800 p-4 flex flex-col gap-3 h-fit relative ">
                            <div className="w-full flex justify-between items-center">
                                <p className="font-bold">Credits</p>
                                <button className="font-semibold text-xs">Show All</button>
                            </div>
                            <div className="w-full flex justify-between items-center">
                                <p className="text-base font-semibold flex flex-col">
                                    JeyBySy
                                    <span className="text-sm text-neutral-400 font-normal">Main Artist</span>
                                </p>
                                <button className="px-4 py-2 font-semibold rounded-full border text-xs">Follow</button>
                            </div>
                            <div className="w-full flex justify-between items-center">
                                <p className="text-base font-semibold flex flex-col">
                                    Nothing
                                    <span className="text-sm text-neutral-400 font-normal">Composer</span>
                                </p>
                            </div>
                        </div>
                        <div className="w-full rounded-md bg-neutral-800 p-4 flex flex-col gap-3 h-fit relative ">
                            <div className="w-full flex justify-between items-center">
                                <p className="font-bold">Next Queue</p>
                                <button className="font-semibold text-xs text-neutral-300">Open Queue</button>
                            </div>
                            <div className="flex flex-row gap-2 items-center">
                                <div className="h-14 w-14 bg-green-900 text-center rounded-sm flex items-center justify-center">
                                    Image
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-base font-semibold">Now it has something</p>
                                    <span className="text-xs text-neutral-300">JeyBySy smart 2</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </main>
        </div>
    )
}

export default ArtistNav