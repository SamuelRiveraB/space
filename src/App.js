import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Destination1 from "./components/Destination1";
import Destination2 from "./components/Destination2";
import Destination3 from "./components/Destination3";
import Destination4 from "./components/Destination4";
import Crew1 from "./components/Crew1";
import Crew2 from "./components/Crew2";
import Crew3 from "./components/Crew3";
import Crew4 from "./components/Crew4";
import Technology1 from "./components/Technology1";
import Technology2 from "./components/Technology2";
import Technology3 from "./components/Technology3";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/space" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="destination/moon" element={<Destination1 />} />
            <Route path="destination/mars" element={<Destination2 />} />
            <Route path="destination/europa" element={<Destination3 />} />
            <Route path="destination/titan" element={<Destination4 />} />
            <Route path="crew/douglas-hurley" element={<Crew1 />} />
            <Route path="crew/mark-shuttleworth" element={<Crew2 />} />
            <Route path="crew/victor-glover" element={<Crew3 />} />
            <Route path="crew/anousheh-ansari" element={<Crew4 />} />
            <Route path="technology/launch-vehicle" element={<Technology1 />} />
            <Route path="technology/spaceport" element={<Technology2 />} />
            <Route path="technology/space-capsule" element={<Technology3 />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;