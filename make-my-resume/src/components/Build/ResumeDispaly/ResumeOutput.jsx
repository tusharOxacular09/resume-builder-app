import React, { useContext } from "react";
import UserContext from "../ContextAPI";
import ResumeFormat1 from "./ResumeFormat1";

const ResumeOutput = ({
  personalDetails,
  userLocation,
  workExpList,
  skills,
  educationList,
  projectsList,
  certificationList,
  languageList,
  awardList,
  hobbies,
  newDetails,
}) => {
  return (
    <div>
      <ResumeFormat1
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
        newDetails={newDetails}
      />
    </div>
  );
};

export default ResumeOutput;
