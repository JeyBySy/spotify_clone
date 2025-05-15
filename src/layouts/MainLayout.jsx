import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Player from "../components/Player";
import Library from "../components/SideNav/Library";
import Artist from "../components/SideNav/Artist";

const MainLayout = () => {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] h-screen bg-black text-white w-full px-2">
            <Navbar />
            <div className="grid grid-cols-[420px_auto_370px] overflow-hidden gap-2 ">
                <div className="">
                    <Library />
                </div>
                <Outlet />
                <div className="overflow-y-auto">
                    <Artist />
                </div>
            </div>
            <Player />
        </div>
    );
};

export default MainLayout;
