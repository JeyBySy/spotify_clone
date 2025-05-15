import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import HomeDisplay from "../components/Display/HomeDisplay";
import ArtistDisplay from "../components/Display/ArtistDisplay";

const DisplayLayout = ({ type }) => {
    const { playlistID, artistID } = useParams();

    const contentMap = {
        album: <>album</>,
        playlist: <div>Playlist ID: {playlistID}</div>,
        artist: <ArtistDisplay artistID={artistID} />,
        home: <HomeDisplay />,
    };

    const content = contentMap[type] || contentMap["home"];

    return content;
};

DisplayLayout.propTypes = {
    type: PropTypes.oneOf(["playlist", "artist", "home"]),
};

export default DisplayLayout;
