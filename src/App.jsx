import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import DisplayLayout from "./layouts/DisplayLayout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<DisplayLayout type="home" />} />
          <Route path="playlist/:playlistID" element={<DisplayLayout type="playlist" />} />
          <Route path="artist/:artistID" element={<DisplayLayout type="artist" />} />
          <Route path="album/:albumID" element={<DisplayLayout type="album" />} />
        </Route>
        <Route path="*" element={<div className="fixed inset-0 bg-black text-white flex items-center justify-center text-3xl">404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
