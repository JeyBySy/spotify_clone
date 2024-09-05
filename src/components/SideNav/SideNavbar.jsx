import Artist from "./Artist";
import Library from "./Library"

// eslint-disable-next-line react/prop-types
const SideNavbar = ({ section }) => {
    return (
        <div className="w-full px-2 lg:w-[25%] ">
            {(() => {
                switch (section) {
                    case 'library':
                        return <Library />;
                    case 'artist':
                        return <Artist />;
                    default:
                        return
                }
            })()}
        </div>
    )
}

export default SideNavbar