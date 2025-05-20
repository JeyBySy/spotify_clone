import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import HomeDisplay from "../components/Display/HomeDisplay";
import ArtistDisplay from "../components/Display/ArtistDisplay";
import PlaylistDisplay from "../components/Display/PlaylistDisplay";
import AlbumDisplay from "../components/Display/AlbumDisplay";

const DisplayLayout = ({ type }) => {
    const { playlistID, artistID } = useParams();

    const contentMap = {
        album: <AlbumDisplay />,
        playlist: <PlaylistDisplay playlistID={playlistID} />,
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
