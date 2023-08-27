import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import BuildResume from "./components/BuildResume";
import History from "./components/History";


function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/build" element={<BuildResume />}/>
          <Route path="/history" element={<History />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
