import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import BuildResume from "./components/Build/BuildResume";
import History from "./components/History/History";
import { useState } from "react";

function App() {
  const [space, setSpace] = useState();
  return (
    <div>
      <NavBar setSpace={setSpace} />
      <div>
        <Routes>
          <Route path="/" element={<Home space={space} />} />
          <Route path="/build" element={<BuildResume space={space} />} />
          <Route path="/history" element={<History space={space} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
