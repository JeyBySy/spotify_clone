import { Facebook, Instagram, X } from 'lucide-react'
import PropTypes from 'prop-types'

const AboutArtist = ({ handleClick }) => {
    return (
        <div className="bg-neutral-800 text-white relative rounded-md h-full mx-auto shadow-lg overflow-y-auto custom-scrollbar">
            <button
                onClick={handleClick}
                className="absolute top-3 right-3 z-20 p-2 rounded-full bg-neutral-900/60 hover:bg-neutral-900 transition-colors duration-200"
            >
                <X className="w-5 h-5 stroke-neutral-400 hover:stroke-white transition-colors duration-200" />
            </button>
            <section className="grid grid-rows-[auto_1fr_auto]">
                <div className="bg-blue-900 w-full h-[430px] flex items-center justify-center">Image</div>
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
    )
}

AboutArtist.propTypes = {
    handleClick: PropTypes.func
}
export default AboutArtist