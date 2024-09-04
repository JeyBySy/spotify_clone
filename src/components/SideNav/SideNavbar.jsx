import Artist from "./Artist";
import Library from "./Library"

// eslint-disable-next-line react/prop-types
const SideNavbar = ({ section }) => {
    return (
        <div className="bg-secondary m-2 rounded-xl py-4 px-6 w-[100%] h-full">
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