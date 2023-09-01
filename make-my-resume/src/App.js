import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import BuildResume from "./components/Build/BuildResume";
import History from "./components/History/History";
import { useState } from "react";
import Location from "./components/Build/Input/Location";
import PersonalDetails from "./components/Build/Input/PersonalDetails";
import {
  initialPersonalDetails,
  initialUserAddress,
  user_work_experience,
} from "./objects/NewUserDetailsObject";
import WorkExperience from "./components/Build/Input/WorkExperience";

function App() {
  const [space, setSpace] = useState();
  const [personalDetails, setPersonalDetails] = useState(() => {
    const saved = localStorage.getItem("My_Personal_Details");
    const initialValue = JSON.parse(saved);
    return initialValue || initialPersonalDetails;
  });
  const [userLocation, setUserLocation] = useState(() => {
    const savedLocation = JSON.parse(
      localStorage.getItem("My_Personal_Address")
    );
    return savedLocation || initialUserAddress;
  });

  const [workExpList, setWorkExpList] = useState(() => {
    const myExperience = JSON.parse(localStorage.getItem("My_Work_Experiences"))
    return myExperience || []
  })

  const [workExperience, setWorkExperience] = useState(()=> {
      return user_work_experience
  })
  return (
    <div>
      <NavBar setSpace={setSpace} />
      <div>
        <Routes>
          <Route path="/" element={<Home space={space} />} />
          <Route
            path="/build"
            element={
              <BuildResume
                personalDetails={personalDetails}
                userLocation={userLocation}
                workExpList={workExpList}
                space={space}
              />
            }
          >
            <Route
              path="personaldetails"
              element={
                <PersonalDetails
                  setPersonalDetails={setPersonalDetails}
                  personalDetails={personalDetails}
                />
              }
            />
            <Route
              path="location"
              element={
                <Location
                  userLocation={userLocation}
                  setUserLocation={setUserLocation}
                />
              }
            />
            <Route
              path="work-experience"
              element={
                <WorkExperience workExperience={workExperience} setWorkExperience={setWorkExperience} workExpList={workExpList} setWorkExpList={setWorkExpList}/>
              }
            />
            <Route path=":id" element={<div>OK!</div>} />
          </Route>
          <Route path="/history" element={<History space={space} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
