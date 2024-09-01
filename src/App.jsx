import Navbar from "./components/Navbar"
import SideNavbar from "./components/SideNavbar"

const App = () => {
  return (
    <div className="h-screen fixed bg-black text-white">
      <div className="h-[90%] flex flex-col">
        <Navbar />
        <SideNavbar />
      </div>
    </div>
  )
}

export default App