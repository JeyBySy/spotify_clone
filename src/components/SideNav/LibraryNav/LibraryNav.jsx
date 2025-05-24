import { assets } from '../../../assets/assets.js'
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Maximize2, Play, Plus, Search, X } from "lucide-react" // Import X icon
import SortTab from './SortTab.jsx';

const LibraryNav = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeKey, setActiveKey] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(""); // category state
    const [showSortTab, setShowSortTab] = useState(false);
    const [showSearchInput, setShowSearchInput] = useState(false);
    const [sortOption, setSortOption] = useState('recent');
    const [viewOption, setViewOption] = useState('compactGrid');
    const [search, setSearch] = useState("");


    const handleActive = (key) => {
        setActiveKey(key);
    };

    const handleSortTab = () => {
        setShowSortTab((prev) => !prev)
    }

    useEffect(() => {
        if (location.pathname === "/") {
            setActiveKey("");
            setSelectedCategory("");
        }
    }, [location.pathname]);

    const handleCategoryClick = (category) => {
        if (selectedCategory === category) {
            setSelectedCategory("");
        } else {
            setSelectedCategory(category);
        }
    };

    const clearCategory = () => {
        setSelectedCategory("");
    };

    const dummyLibraryItems = [
        { id: "3fa85f64-5717-4562-b3fc-2c963f66afa6", name: "JeyBySy", type: "artist", route: "/artist/zK6RdVAwLqMhE7tWcPZ2" },
        { id: "a3c8f540-1949-4c1e-a019-3b93043fa41b", name: "JeyBySy Playlist", type: "playlist", route: "/playlist/uBn1KzCmQ8MhE7tWcPZ2" },
        { id: "f14b3ed2-e71f-493a-bffe-d3a0df74b013", name: "Midnight Chill", type: "playlist", route: "/playlist/zOpT9UcLeHf23DfG8Qk1" },
        { id: "d7a1b8e2-e62a-4b98-984e-cfd9fc41c0a2", name: "JeyBySy Album", type: "album", route: "/album/oYpQ4mNxbRzK6RdVAwLq" },
        { id: "fdf01a72-8137-4f44-8cc1-51b07c74c8d9", name: "Sunset Boulevard", type: "album", route: "/album/sMkErT7uJc9Zx2QwP5Nd" },
        { id: "c4e61a76-65cb-4cdd-839f-6bfa17e25a2a", name: "EchoVision", type: "artist", route: "/artist/xY4MmNpKs3UqA9vF3Ld7" },
        { id: "7d89e41e-22d3-4374-8476-91ed2d734c92", name: "Synth Lords", type: "artist", route: "/artist/bDjT6GmZqA8Xr9YkZc33" },
        { id: "d0197d99-8a44-4b83-b420-13f3b56c87e1", name: "LoFi Lounge", type: "playlist", route: "/playlist/mGhRdTrLkC7ZqH5TwJv6" },
        { id: "ac72fd3c-9dbf-4f18-a6b4-259d6bd5be54", name: "Focus Boost", type: "playlist", route: "/playlist/wPrVcRzP7MfLrW8YoJb3" },
        { id: "e6bc93f4-daf5-4905-9b98-48d63f7a95c6", name: "Ocean Dreams", type: "album", route: "/album/jTyKoEvR6qPhC2FmXe91" },
        { id: "cd07ff27-e4f6-41b7-810c-74a2f270de68", name: "AetherNova", type: "artist", route: "/artist/tNmKzRfDqP3EjW7QrVb1" },
    ];


    const filteredLibraryItems = dummyLibraryItems.filter(item => {
        const matchesCategory = selectedCategory === "" || item.type === selectedCategory;
        const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });



    return (
        <div className="h-full">
            <main className='bg-custom-main h-full rounded-md py-3 '>
                <div className="flex mb-4 px-6">
                    <div className='flex flex-1 gap-3 items-center justify-start'>
                        <img src={assets.stack_icon} alt="stack" className='w-4 h-4' />
                        <div className='text-neutral-100 text-sm font-semibold'>
                            Your Library
                        </div>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <div className='bg-neutral-800 flex items-center gap-2 py-2 px-3 text-sm text-neutral-100 font-semibold rounded-full'>
                            <span><Plus className='w-5 h-5 stroke-neutral-400' /></span>
                            <p>Create</p>
                        </div>
                        <div>
                            <Maximize2 className='w-4 h-4 stroke-neutral-400' />
                        </div>
                    </div>
                </div>

                <div className='flex flex-wrap gap-3 mb-3 px-4 items-center'>
                    {selectedCategory && (
                        <button
                            onClick={clearCategory}
                            className="p-1 rounded-full hover:bg-neutral-700/60 bg-neutral-800 text-neutral-400"
                            aria-label="Clear category filter"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    )}

                    {(selectedCategory === "" || selectedCategory === "playlist") && (
                        <div
                            className={`category cursor-pointer ${selectedCategory === "playlist" ? "font-medium bg-white text-neutral-700" : "text-neutral-400"}`}
                            onClick={() => handleCategoryClick("playlist")}
                        >
                            Playlists
                        </div>
                    )}
                    {(selectedCategory === "" || selectedCategory === "artist") && (
                        <div
                            className={`category cursor-pointer ${selectedCategory === "artist" ? "font-medium bg-white text-neutral-700" : "text-neutral-400"}`}
                            onClick={() => handleCategoryClick("artist")}
                        >
                            Artist
                        </div>
                    )}
                    {(selectedCategory === "" || selectedCategory === "album") && (
                        <div
                            className={`category cursor-pointer ${selectedCategory === "album" ? "font-bold bg-white text-neutral-700" : "text-neutral-400"}`}
                            onClick={() => handleCategoryClick("album")}
                        >
                            Album
                        </div>
                    )}
                </div>

                <div className='overflow-y-auto custom-scrollbar scroll-smooth h-[70vh]'>
                    <div className='flex items-center justify-between pb-2 px-4 text-neutral-500 relative '>
                        <div className='flex items-center'>
                            <div className={`p-1.5 bg-neutral-800  ${showSearchInput ? "" : "rounded-full hover:bg-neutral-700"}`}>
                                <Search
                                    className='w-5 h-5 stroke-neutral-400 cursor-pointer'
                                    onClick={() => setShowSearchInput((prev) => !prev)}
                                />
                            </div>
                            {showSearchInput && (
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        placeholder="Search in Your Library"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        className="bg-neutral-800 text-sm text-white py-1.5 pr-8 pl-3 w-full rounded outline-none"
                                    />
                                    {search && (
                                        <button
                                            onClick={() => setSearch('')}
                                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-white text-xs"
                                        >
                                            <X className='w-4 h-4' />
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                        <button
                            onClick={handleSortTab}
                            className='flex place-content-center items-center text-sm space-x-2'>
                            <span className='capitalize'>
                                {sortOption}
                            </span>
                            <img src={assets.list_icon} alt="Home" className='w-6' />
                        </button>
                        {showSortTab && (
                            <SortTab
                                sortOption={sortOption}
                                onSortChange={setSortOption}
                                viewOption={viewOption}
                                onViewChange={setViewOption}
                                onClose={() => setShowSortTab(false)}
                            />
                        )}
                    </div>
                    <section
                        className={`px-2 
                            ${viewOption === 'compactGrid' || viewOption === 'defaultGrid'
                                ? 'grid grid-cols-2 md:grid-cols-3 gap-1'
                                : 'flex flex-col items-center'
                            }`}
                    >
                        {filteredLibraryItems.map((item) => {
                            if (viewOption === 'compactList') {
                                return (
                                    <button
                                        onClick={() => {
                                            handleActive(item.id);
                                            navigate(item.route);
                                        }}
                                        key={item.id}
                                        className={`w-full py-2 px-3 hover:bg-neutral-800 rounded flex items-center ${activeKey === item.id ? 'bg-neutral-700 hover:bg-neutral-600 ' : ''}`}
                                    >
                                        <span className={`text-neutral-100 text-sm truncate font-medium ${activeKey === item.id ? 'text-green-400 ' : ''}`}>{item.name}</span>
                                        <span className="text-neutral-400 text-sm capitalize ml-2">· {item.type}</span>
                                    </button>
                                );
                            }
                            else if (viewOption === 'compactGrid') {
                                return (
                                    <div key={item.id} className="relative">
                                        <button
                                            title={`${item.name} · ${item.type}`}
                                            onClick={() => {
                                                handleActive(item.id);
                                                navigate(item.route);
                                            }}
                                            className={`
                                                w-full py-2 px-3 rounded cursor-pointer overflow-hidden flex items-center justify-center 
                                                ${activeKey === item.id ? 'bg-neutral-800 hover:bg-neutral-700' : 'hover:bg-neutral-800'}`}
                                        >
                                            <img
                                                src={assets.artistahin}
                                                alt="icon"
                                                className={`w-full h-full object-contain ${item.type === "artist" ? "rounded-full" : "rounded"}`}
                                            />
                                        </button>

                                    </div>
                                );
                            }
                            else if (viewOption === 'defaultGrid') {
                                return (
                                    <div key={item.id} className="relative group overflow-hidden">
                                        <button
                                            onClick={() => {
                                                handleActive(item.id);
                                                navigate(item.route);
                                            }}
                                            className={`w-full py-2 px-3 rounded cursor-pointer overflow-hidden flex flex-col gap-2 justify-start
                                            ${activeKey === item.id ? 'bg-neutral-800 hover:bg-neutral-700' : 'hover:bg-neutral-800'}`}
                                        >
                                            <div>
                                                <img
                                                    src={assets.artistahin}
                                                    alt="icon"
                                                    className={`w-full h-full object-contain ${item.type === "artist" ? "rounded-full" : "rounded"}`}
                                                />
                                            </div>
                                            <div className='flex flex-col w-full text-start space-y-1'>
                                                <p title={item.name} className="text-ellipsis overflow-hidden whitespace-nowrap font-medium text-sm">{item.name}</p>
                                                <p className="text-sm text-neutral-500 font-medium capitalize">{item.type}</p>
                                            </div>
                                        </button>
                                    </div>
                                );


                            }

                            return (
                                <button
                                    onClick={() => {
                                        handleActive(item.id);
                                        navigate(item.route);
                                    }}
                                    key={item.id}
                                    className={`library_btn relative group ${activeKey === item.id ? 'bg-neutral-700' : ''}`}
                                >
                                    <div className="mr-1 relative">
                                        <img
                                            src={assets.artistahin}
                                            alt="icon"
                                            className={`w-12 h-12 object-contain ${item.type === "artist" ? "rounded-full" : "rounded"}`}
                                        />
                                        <div className={`absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 ${item.type === "artist" ? "rounded-full" : ""}`}>
                                            <Play className='fill-white' />
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-start justify-center pl-2 w-[100px] flex-grow'>
                                        <p className="text-ellipsis overflow-hidden whitespace-nowrap w-full text-start font-medium">{item.name}</p>
                                        <p className="text-sm text-gray-500 capitalize">{item.type}</p>
                                    </div>
                                </button>
                            );
                        })}
                    </section>
                </div>
            </main >
        </div >
    )
}

export default LibraryNav;
