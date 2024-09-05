import Player from "./components/Player"
import Display from "./components/Display"
import Navbar from "./components/Navbar"
import SideNavbar from "./components/SideNav/SideNavbar"

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-grow flex">
        <SideNavbar section="library" />
        <Display />
        <SideNavbar section="artist" />
      </section>
      <Player />
    </div>
  );
}

export default App