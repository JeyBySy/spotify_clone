import Card from "../Card"
import Carousel from "../Carousel"
import Footer from "../Footer"
import RecommendCard from "../RecommendCard"

const HomeDisplay = () => {
    return (
        <div className="rounded-md bg-secondary overflow-y-auto custom-scrollbar relative">
            <div className="flex flex-col container mx-auto">
                {/* Category */}
                <section className="px-12 flex flex-row gap-2 py-4 text-xs place-items-center">
                    <div className="px-4 py-2 rounded-3xl bg-white text-black">
                        All
                    </div>
                    <div className="px-4 py-2 rounded-3xl bg-neutral-300/10">
                        Music
                    </div>
                    <div className="px-4 py-2 rounded-3xl bg-neutral-300/10">
                        Podcast
                    </div>
                </section>
                <section className="px-12 w-full pt-1 pb-5 grid grid-cols-4 gap-2 place-items-center">
                    {Array(8).fill(null).map((_, index) => (
                        <div key={index} className="shadow bg-neutral-800/90 flex w-full text-sm font-bold rounded-sm">
                            <div className="h-12 w-12 border text-center"></div>
                            <div className="px-2 flex justify-center items-center">
                                Text Here
                            </div>
                        </div>
                    ))}
                </section>
                <section className="w-full">
                    <Carousel description={"Made For"} title={"Jherico Cocosa"} >
                        {Array(20).fill(null).map((_, index) => (
                            <Card key={index} />
                        ))}
                    </Carousel>
                </section>
                <section className="w-full">
                    <Carousel title={"your Top Mixes"}>
                        {Array(20).fill(null).map((_, index) => (
                            <Card key={index} />
                        ))}
                    </Carousel>
                </section>
                <section className="w-full">
                    <Carousel title={"Recently Played"}>
                        {Array(20).fill(null).map((_, index) => (
                            <Card key={index} />
                        ))}
                    </Carousel>
                </section>
                <section className="w-full">
                    <Carousel title={"Jump Back In"}>
                        {Array(20).fill(null).map((_, index) => (
                            <Card key={index} />
                        ))}
                    </Carousel>
                </section>
                <section className="w-full">
                    <Carousel description={'Unwind with these calming playlists.'} title={"Chill Out"}>
                        {Array(20).fill(null).map((_, index) => (
                            <Card key={index} />
                        ))}
                    </Carousel>
                </section>

                <section className="w-full h-full px-5">
                    {/* <div className="grid grid-cols-2 lg:grid-cols-2 gap-2 h-[900px]  "> */}
                    <div className="flex flex-wrap">
                        <RecommendCard headTitle={"Discover more from Earl Agustin"} description={'Unwind with these calming playlists.'} title={"OPM Says Relax"}>
                            <div className="text-center w-full">
                                SlideShow
                            </div>
                        </RecommendCard>
                        <RecommendCard headTitle={"More like broken inside"} description={"I'm the second lead."} title={"that should be me"}>
                            <div className="text-center w-full">
                                SlideShow
                            </div>
                        </RecommendCard>
                        <RecommendCard headTitle={"For fans of 88rising"} description={'If you’re sappy and you know it, listen to these cheesy tunes.'} title={"Sappy and Senti"}>
                            <div className="text-center w-full">
                                SlideShow
                            </div>
                        </RecommendCard>
                        <RecommendCard headTitle={"More like Morning Stroll"} description={'i’m not spiraling, i’m realigning.'} title={"Soft Reset"}>
                            <div className="text-center w-full">
                                SlideShow
                            </div>
                        </RecommendCard>
                        <RecommendCard description={'Sit back, relax, and let these chill tunes calm you down.'} title={"Besties"}>
                            <div className="text-center w-full">
                                SlideShow
                            </div>
                        </RecommendCard>
                        <RecommendCard description={"Here are the songs that we cried to in 2024. (Here's a balloon animal to cheer you up)"} title={"Songs we cried to in 2024"}>
                            <div className="text-center w-full">
                                SlideShow
                            </div>
                        </RecommendCard>
                        <RecommendCard description={'The happiest hits to boost your day.'} title={"Beats & Rhymes"}>
                            <div className="text-center w-full">
                                SlideShow
                            </div>
                        </RecommendCard>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default HomeDisplay