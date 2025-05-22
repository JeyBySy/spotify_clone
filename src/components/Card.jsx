import { useState } from "react"
import { Play } from "lucide-react"

const Card = () => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex flex-col gap-3  rounded-md border-transparent hover:bg-neutral-800/60 p-3 relative"
        >
            <div className="rounded-md w-[10.7rem] h-[10.7rem] bg-blue-900 justify-center items-center flex">
                Image
            </div>
            <div className="flex flex-col gap-1">
                <div className="text-sm font-bold">Playlist Name</div>
                <div className="text-xs text-neutral-500">Description</div>
            </div>
            {isHovered && (
                <div className="absolute bottom-[4.7rem] right-5">
                    <button className="rounded-full bg-[#3BE477] p-3">
                        <Play className="w-5 h-5 stroke-black fill-black" />
                    </button>
                </div>
            )}
        </div>
    )
}

export default Card
