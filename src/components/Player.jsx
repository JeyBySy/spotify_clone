import { assets } from "../assets/assets"

const Player = () => {
    return (
        <div className='h-[90px]  justify-between flex items-center px-4 py-1 z-10 bg-black '>
            <div className="items-center lg:flex gap-4 w-full">
                <img src={assets.img1_icon} alt="icon" className="h-full w-12 rounded object-contain" />
                <div className="grid text-xs">
                    <p className="font-medium">Title</p>
                    <p className="font-light">Artist</p>
                </div>
                <div className="rounded-full p-[1px] w-fit border cursor-pointer">
                    <img src={assets.plus_icon} alt="plsu" className="w-[10px]" />
                </div>
            </div>
            <div className="flex items-center gap-1 m-auto flex-col w-full">
                <div className="flex gap-4">
                    <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="" />
                    <img className="w-4 cursor-pointer" src={assets.prev_icon} alt="" />
                    <img className="w-4 cursor-pointer" src={assets.play_icon} alt="" />
                    <img className="w-4 cursor-pointer" src={assets.next_icon} alt="" />
                    <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="" />
                </div>
                <div className="flex items-center gap-5">
                    1:06
                    <div className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
                        <hr className="border-none w-0 h-1 bg-green-800 rounded-full" />
                    </div>
                    3:00
                </div>

            </div>
            <div className="hidden lg:flex gap-1  w-full justify-end">
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