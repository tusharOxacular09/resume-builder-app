import React, { useState } from "react";
import ColorPicker from "./ColorPicker";
import PersonalDetails from "./Input/PersonalDetails";
import ResumeOutput from "./ResumeDispaly/ResumeOutput";
import UserContext from "./ContextAPI";

const BuildResume = ({ space }) => {
  const [background, setBackground] = useState("bg-white");
  const setMargin = space
    ? `lg:mt-20 w-full h-screen ${background}`
    : `mt-20 w-full h-screen ${background}`;
  // User Image Avatar
  const [userImage, setUserImage] = useState(null)
  const [fullName, setFullNmae] = useState(null)
  const [headLine, setHeadLine] = useState(null)
  const [email, setEmail] = useState(null)
  const [phone, setPhone] = useState(null)
  const [website, setWebsite] = useState(null)
  const [summery, setSummery] = useState(null)
  const [dob, setDob] = useState(null)

  /*
   Always use USE Context for,
   - Notification
   - theam
   - Font Size etc....
  */
  
  
  return (
    <UserContext.Provider value={ [userImage, setUserImage]}>
      <div className={setMargin}>
        <div className="w-full h-full lg:flex">
          <div className="w-full lg:w-2/6 h-full max-lg:border-b lg:border-r-2 border-slate-400">
            <PersonalDetails />
          </div>
          <div className="w-full lg:w-3/6 h-full">
            <ResumeOutput />
          </div>
          <div className="w-full lg:w-1/6 h-full max-lg:border-t lg:border-l-2 border-slate-400">
            <ColorPicker setBackground={setBackground} />
          </div>
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default BuildResume;
