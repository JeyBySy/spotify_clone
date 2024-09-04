import Footer from "./components/Footer"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import SideNavbar from "./components/SideNav/SideNavbar"

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <div className="h-full">
        <Navbar />
        <section className="sm:h-[85%] lg:h-[85%] xl:h-[85%] 2xl:h-[85%] flex mx-[1px]">
          <SideNavbar section="library" />
          <Main />
          <SideNavbar section='artist' />
        </section>
        <Footer />
      </div>
    </div>
  )
}

export default App