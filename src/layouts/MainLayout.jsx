import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Player from "../components/Player";
import LibraryNav from "../components/SideNav/LibraryNav/LibraryNav";
import ArtistNav from "../components/SideNav/ArtistNav";
import GithubTag from "../components/GithubTag";

const MainLayout = () => {
    return (
        <div className="grid grid-rows-[auto_auto_1fr_auto] h-screen bg-black text-white w-full px-2">
            <GithubTag />
            <Navbar />
            <div className="grid grid-cols-[420px_auto_370px] overflow-hidden gap-2 ">
                <LibraryNav />
                <Outlet />
                <ArtistNav />
            </div>
            <Player />
        </div>
    );
};

export default MainLayout;
