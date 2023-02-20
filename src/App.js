import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderNav from "./components/headerNav/HeaderNav";
import SingerName from "./components/singerName/SingerName";
import Albums from "./components/albums/Albums";
import Episodes from "./components/episodes/Episodes";
import Podcasts from "./components/podcasts/Podcasts";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderNav />
        <Routes>
          <Route path="/" element={<SingerName />}></Route>
          <Route path="/Albums" element={<Albums />}></Route>
          <Route path="/Episodes" element={<Episodes />}></Route>
          <Route path="/Podcasts" element={<Podcasts />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
