import { ChevronLeft, ChevronRight } from "lucide-react";
import PropTypes from "prop-types";

const Carousel = ({ children, description, title }) => {
    return (
        <div className="flex flex-col gap-2 py-7 ">
            <div className="px-5">
                <p className="text-xs text-neutral-400 capitalize">
                    {description}
                </p>
                <p className="text-2xl font-black text-neutral-100 capitalize">
                    {title}
                </p>
            </div>
            <div className="w-full flex flex-row justify-evenly items-center relative">
                <div className="absolute left-0 px-5 w-fit h-fit z-30 flex items-center ">
                    <button><ChevronLeft className="w-8 h-8 p-1 rounded-full bg-neutral-800 stroke-neutral-400" /></button>
                </div>
                <div className="px-4 whitespace-nowrap overflow-x-auto flex flex-row no-scrollbar relative">
                    {children}
                </div>
                <div className="absolute right-0 px-5 w-fit h-fit z-30 flex items-center">
                    <button><ChevronRight className="w-8 h-8 p-1 rounded-full bg-neutral-800 stroke-neutral-400" /></button>
                </div>
            </div>
        </div>

    )
}

Carousel.propTypes = {
    children: PropTypes.node,
    description: PropTypes.string,
    title: PropTypes.string,
}

export default Carousel