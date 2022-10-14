import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Destination1 from "./components/Destination1";
import Destination2 from "./components/Destination2";
import Destination3 from "./components/Destination3";
import Destination4 from "./components/Destination4";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="home" element={<Home />} />
            <Route path="destination/moon" element={<Destination1 />} />
            <Route path="destination/mars" element={<Destination2 />} />
            <Route path="destination/europa" element={<Destination3 />} />
            <Route path="destination/titan" element={<Destination4 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;