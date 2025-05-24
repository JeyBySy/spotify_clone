
import { Ellipsis, Maximize2, PanelRightClose } from "lucide-react"
import PopOver from "../PopOver"
import { useState } from "react"
import AboutArtist from "../AboutArtist"

const ArtistNav = () => {
    const [showArtistDetails, setShowArtistDetails] = useState(false)

    const handleShowArtistDetails = () => {
        setShowArtistDetails((prev) => !prev)
    }
    return (
        <div className=" h-full custom-scrollbar relative overflow-y-auto custom-main rounded-md">
            {showArtistDetails && (
                <PopOver isOpen={showArtistDetails} onClose={handleShowArtistDetails}>
                    <AboutArtist handleClick={handleShowArtistDetails} />
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