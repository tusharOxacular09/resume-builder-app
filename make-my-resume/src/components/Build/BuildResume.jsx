import React, { useState, useEffect } from "react";
import ColorPicker from "./ColorPicker";
import ResumeOutput from "./ResumeDispaly/ResumeOutput";
import UserContext from "./ContextAPI";
import { Link, Outlet } from "react-router-dom";

const BuildResume = ({ personalDetails, userLocation, workExpList, skills, educationList}) => {
  const [background, setBackground] = useState("bg-white");

  // User Image Avatar
  const [userImage, setUserImage] = useState(() => {
    const image = localStorage.getItem("My_Profile_Picture");
    const myImage = JSON.parse(image);
    return (
      myImage ||
      "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg"
    );
  });

  // It smply runs the code after the rendering of the page.
  useEffect(() => {
    localStorage.setItem(
      "My_Personal_Details",
      JSON.stringify(personalDetails)
    )
    localStorage.setItem("My_Personal_Address", JSON.stringify(userLocation));
    localStorage.setItem("My_Skills", JSON.stringify(skills));
    localStorage.setItem("My_Work_Experiences", JSON.stringify(workExpList));
    localStorage.setItem("My_Profile_Picture", JSON.stringify(userImage));
    localStorage.setItem("My_Education", JSON.stringify(educationList));
  }, [personalDetails, userImage, userLocation, workExpList, skills, educationList]);

  return (
    <UserContext.Provider value={[userImage, setUserImage]}>
      <div className="w-full h-screen mt-20 pt-2">
        <div className="w-full h-full lg:flex">
          <div className="w-full lg:w-2/6 h-full max-lg:border-b lg:border-r-2 border-slate-400">
            <div className="flex justify-between w-full p-3 ">
              <Link to={'/build/personaldetails'}>personal</Link>
              <Link to={'/build/location'}>location</Link>
              <Link to={'/build/work-experience'}>work-experience</Link>
              <Link to={'/build/skills'}>Skills</Link>
              <Link to={'/build/education'}>Education</Link>
            </div>
            <Outlet />
          </div>
          <div className="w-full lg:w-3/6 h-full">
            <ResumeOutput personalDetails={personalDetails} userLocation={userLocation} workExpList={workExpList} skills={skills} educationList={educationList}/>
          </div>
          <div className="w-full lg:w-1/6 h-full max-lg:border-t lg:border-l-2 border-slate-400">
            <ColorPicker setBackground={setBackground} />
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default BuildResume
