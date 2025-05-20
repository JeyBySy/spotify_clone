import { Github } from "lucide-react"
import { Link } from "react-router-dom"

const GithubTag = () => {
    return (
        <Link to={'https://github.com/JeyBySy'}>
            <div className="shadow-lg fixed right-0 flex items-center  gap-2 justify-center opacity-70 hover:opacity-100 cursor-pointer z-50 bg-neutral-700 translate-x-16 translate-y-8 p-2 rotate-45 w-[250px] mx-auto ">
                <div className="bg-white p-1.5 rounded-full">
                    <Github className="w-5 h-5 stroke-black fill-black" />
                </div>
                <p className="text-base font-semibold">Gitub</p>
            </div>
        </Link>
    )
}

export default GithubTag