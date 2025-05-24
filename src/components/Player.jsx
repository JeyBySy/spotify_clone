import { Play, Repeat, Shuffle, SkipBack, SkipForward } from "lucide-react"
import { assets } from "../assets/assets"

const Player = () => {
    return (
        <div className='h-[90px] justify-between flex items-center px-4 py-1 z-10 bg-black '>
            <div className="items-center flex gap-4 w-full">
                <img src={assets.artistahin} alt="icon" className="h-full w-12 rounded object-contain" />
                <div className="grid text-xs">
                    <p className="font-medium">Title</p>
                    <p className="font-light">Artist</p>
                </div>
                <div className="rounded-full p-[1px] w-fit border cursor-pointer">
                    <img src={assets.plus_icon} alt="plsu" className="w-[10px]" />
                </div>
            </div>
            <div className="flex items-center gap-2 justify-center flex-col w-full px-6">
                <div className="flex gap-[1.30rem]">
                    <button className="rounded-full">
                        <Shuffle className="w-5 h-5  stroke-neutral-400 " />
                    </button>
                    <button className="rounded-full">
                        <SkipBack className="w-5 h-5 fill-white " />
                    </button>
                    <button className="bg-white p-1 rounded-full">
                        <Play className="fill-black" />
                    </button>
                    <button className="rounded-full">
                        <SkipForward className="w-5 h-5 fill-white " />
                    </button>
                    <button className="rounded-full">
                        <Repeat className="w-5 h-5 stroke-neutral-400" />
                    </button>

                </div>
                <div className="flex items-center gap-2">
                    <p className="text-xs ">1:06</p>
                    <div className="w-[30vw] max-w-[630px] bg-neutral-800 rounded-full cursor-pointer">
                        <hr className="border-0 w-10 h-1 bg-neutral-100 rounded-full" />
                    </div>
                    <p className="text-xs ">3:00</p>
                </div>
            </div>
            <div className="flex gap-1  w-full justify-end">
                <div className="flex items-center gap-4">
                    <img className="w-4 cursor-pointer" src={assets.plays_icon} alt="" />
                    <img className="w-4 cursor-pointer" src={assets.mic_icon} alt="" />
                    <img className="w-4 cursor-pointer" src={assets.queue_icon} alt="" />
                    <img className="w-4 cursor-pointer" src={assets.speaker_icon} alt="" />
                    <img className="w-4 cursor-pointer" src={assets.volume_icon} alt="" />
                    <div className="w-20 bg-slate-50 h-1 rounded-full cursor-pointer">
                        <hr className="border-none w-0 h-1 bg-green-800 rounded-full" />
                    </div>
                    <img className="w-4 cursor-pointer" src={assets.zoom_icon} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Player