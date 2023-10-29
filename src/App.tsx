import { Route, Routes, Link } from "react-router-dom";

import { Main } from "./pages/Main";
import { Biggest } from "./pages/Biggest";
import { NearBy } from "./pages/NearBy";
import { HouseDetail } from "./pages/HouseDetail";
import { Create } from "./pages/Create";

import "./style.css";

const App = () => {
  return (
    <div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Main
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/create" className="nav-link">
              Create
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/biggest" className="nav-link">
              The biggest houses
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/nearby" className="nav-link">
              Near by location
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/houses/find/:id" element={<HouseDetail />} />
        <Route path="/create" element={<Create />} />
        <Route path="/biggest" element={<Biggest />} />
        <Route path="/nearby" element={<NearBy />} />
      </Routes>
    </div>
  );
};

export default App;
