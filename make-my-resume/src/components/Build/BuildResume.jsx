import React, { useState, useEffect } from "react";
import ColorPicker from "./ColorPicker";
import ResumeOutput from "./ResumeDispaly/ResumeOutput";
import UserContext from "./ContextAPI";
import { Link, Outlet } from "react-router-dom";

const BuildResume = ({ personalDetails, userLocation, workExpList, skills, educationList, projectsList}) => {
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
    localStorage.setItem("My_Projects", JSON.stringify(projectsList));
  }, [personalDetails, userImage, userLocation, workExpList, skills, educationList, projectsList]);

  const navElementsStyle = "inline-block max-lg:text-sm text-white text-center py-2 px-2 lg:px-4 hover:bg-amber-500 focus:bg-amber-500 focus:border focus:rounded-xl font-bold m-1 rounded";
  return (
    <UserContext.Provider value={[userImage, setUserImage]}>
      <div className="w-full h-screen mt-20 pt-2">
        <div className="w-full h-full lg:flex">
          <div className="w-full lg:w-2/6 h-full max-lg:border-b lg:border-r-2 border-slate-400">
            <div className="bg-amber-400 overflow-auto whitespace-nowrap max-lg:mb-4">
              <Link to={'/build/personaldetails'} className={navElementsStyle}>Personal Info.</Link>
              <Link to={'/build/location'} className={navElementsStyle}>Location</Link>
              <Link to={'/build/work-experience'} className={navElementsStyle}>work-experience</Link>
              <Link to={'/build/skills'} className={navElementsStyle}>Skills</Link>
              <Link to={'/build/education'} className={navElementsStyle}>Education</Link>
              <Link to={'/build/projects'} className={navElementsStyle}>Projects</Link>
              <Link to={'/build/certifications'} className={navElementsStyle}>Certification</Link>
              <Link to={'/build/others'} className={navElementsStyle}>Others</Link>
              <Link to={'/build/custom-details'} className={navElementsStyle}>Add New Details</Link>
            </div>
            <Outlet />
          </div>
          <div className="w-full lg:w-3/6 h-full">
            <ResumeOutput personalDetails={personalDetails} userLocation={userLocation} workExpList={workExpList} skills={skills} educationList={educationList} projectsList={projectsList} />
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
