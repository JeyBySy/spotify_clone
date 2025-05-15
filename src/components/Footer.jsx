import { Facebook, Twitter, Instagram } from "lucide-react"
const Footer = () => {
    return (
        <footer className="px-10 py-1 pb-16 ">
            <main className="flex flex-col gap-10 pt-10">
                <div className="flex flex-row gap-5 justify-between text-base font-medium">
                    <div className="flex flex-col gap-2 ">
                        <p>Company</p>
                        <div className="flex flex-col text-start gap-1 text-neutral-500 items-start">
                            <button>About</button>
                            <button>Jobs</button>
                            <button>For the Record</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 ">
                        <p>Communities</p>
                        <div className="flex flex-col text-start gap-1 text-neutral-500 items-start">
                            <button>For Artists</button>
                            <button>Developers</button>
                            <button>Advertising</button>
                            <button>Investors</button>
                            <button>Vendors</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 ">
                        <p>Useful links</p>
                        <div className="flex flex-col text-start gap-1 text-neutral-500 items-start">
                            <button>Support</button>
                            <button>Free Mobile App</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 ">
                        <p>Spotify Plan</p>
                        <div className="flex flex-col text-start gap-1 text-neutral-500 items-start">
                            <button>Premium Individual </button>
                            <button>Premium Duo</button>
                            <button>Premium Family</button>
                            <button>Premium Student</button>
                            <button>Spotify Free</button>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2  ">
                        <div className="p-3 bg-neutral-800 h-fit rounded-full">
                            <Instagram className="w-4 h-4" />
                        </div>
                        <div className="p-3 bg-neutral-800 h-fit rounded-full">
                            <Twitter className="w-4 h-4 fill-white" />
                        </div>
                        <div className="p-3 bg-neutral-800 h-fit rounded-full">
                            <Facebook className="w-4 h-4 " />
                        </div>
                    </div>
                </div>
                <hr className="border-none h-[1px] bg-neutral-800" />
                <div className="flex flex-row text-sm justify-between" >
                    <div className="flex flex-row gap-5 ">
                        <div>Legal</div>
                        <div>Safety & Privacy Center</div>
                        <div> Privacy Policy</div>
                        <div> Cookies</div>
                        <div>About Ads</div>
                        <div> Accessibility</div>
                    </div>
                    <div>© 2025 Spotify AB</div>
                </div>
            </main >
        </footer >
    )
}

export default Footer