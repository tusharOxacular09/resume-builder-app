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
  user_education,
} from "./objects/NewUserDetailsObject";
import WorkExperience from "./components/Build/Input/WorkExperience";
import Skills from "./components/Build/Input/Skills";
import Education from "./components/Build/Input/Education";
import Projects from "./components/Build/Input/Projects";
import Certifications from "./components/Build/Input/Certifications";
import Others from "./components/Build/Input/Others";
import CustomDetails from "./components/Build/Input/CustomDetails";

function App() {
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

  const [userEducation, setUserEducation] = useState(() => {
    return user_education;
  });
  const [educationList, setEducationList] = useState(() => {
    const myEducation = JSON.parse(localStorage.getItem("My_Education"));
    return myEducation || [];
  });

  const [projectsList, setProjectsList] = useState(() => {
     const myProjects = JSON.parse(localStorage.getItem("My_Projects"));
     return myProjects || [];
  }); 

  const [workExpList, setWorkExpList] = useState(() => {
    const myExperience = JSON.parse(
      localStorage.getItem("My_Work_Experiences")
    );
    return myExperience || [];
  });

  const [workExperience, setWorkExperience] = useState(() => {
    return user_work_experience;
  });

  const [skills, setSkills] = useState(() => {
    const mySkills = JSON.parse(localStorage.getItem("My_Skills"));
    return mySkills || [];
  });

  const [certificationList, setCertificationList ] = useState(() => {
    const myCertificates = JSON.parse(localStorage.getItem("My_Certificates"));
    return myCertificates || [];
  })

  const [languageList, setLanguageList] = useState(() => {
    const myLanguages = JSON.parse(localStorage.getItem("My_Languages"));
    return myLanguages || [];
  })

  const [awardList, setAwardList] = useState(() => {
     const myAwards = JSON.parse(localStorage.getItem("My_Awards"));
     return myAwards || [];
  })
  const [hobbies, setHobbies] = useState(()=>{
    const myHobbies = JSON.parse(localStorage.getItem("My_Hobbies"));
    return myHobbies || [];
  })
  return (
    <div>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/build"
            element={
              <BuildResume
                personalDetails={personalDetails}
                userLocation={userLocation}
                workExpList={workExpList}
                skills={skills}
                educationList={educationList}
                projectsList={projectsList}
                certificationList={certificationList}
                languageList={languageList}
                awardList={awardList}
                hobbies={hobbies}
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
                <WorkExperience
                  workExperience={workExperience}
                  setWorkExperience={setWorkExperience}
                  workExpList={workExpList}
                  setWorkExpList={setWorkExpList}
                />
              }
            />
            <Route
              path="education"
              element={
                <Education
                  userEducation={userEducation}
                  setUserEducation={setUserEducation}
                  educationList={educationList}
                  setEducationList={setEducationList}
                />
              }
            />
            <Route
              path="skills"
              element={<Skills setSkills={setSkills} skills={skills} />}
            ></Route>
            <Route
              path="projects"
              element={<Projects projectsList={projectsList} setProjectsList={setProjectsList} />}
            ></Route>
            <Route
              path="certifications"
              element={<Certifications certificationList={certificationList} setCertificationList={setCertificationList}/>}
            ></Route>
            <Route
              path="others"
              element={<Others languageList={languageList} setLanguageList={setLanguageList} awardList={awardList} setAwardList={setAwardList} hobbies={hobbies} setHobbies={setHobbies} />}
            ></Route>
            <Route
              path="custom-details"
              element={<CustomDetails/>}
            ></Route>
            <Route path=":id" element={<div>OK!</div>} />
          </Route>
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
