import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Player from "../components/Player";
import LibraryNav from "../components/SideNav/LibraryNav";
import ArtistNav from "../components/SideNav/ArtistNav";
import GithubTag from "../components/GithubTag";

const MainLayout = () => {
    return (
        <div className="grid grid-rows-[auto_auto_1fr_auto] h-screen bg-black text-white w-full px-2">
            <GithubTag />
            <Navbar />
            <div className="grid grid-cols-[420px_auto_370px] overflow-hidden gap-2 ">
                <div className="">
                    <LibraryNav />
                </div>
                <Outlet />
                <div className="overflow-y-auto custom-main rounded-md">
                    <ArtistNav />
                </div>
            </div>
            <Player />
        </div>
    );
};

export default MainLayout;
