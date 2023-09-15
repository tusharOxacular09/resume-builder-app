import React from "react";
import ResumeFormat1 from "./ResumeFormat1";
import ResumeFormat2 from "./ResumeFormat2";
import ResumeFormat3 from "./ResumeFormat3";
import ResumeFormat4 from "./ResumeFormat4";

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
  background,
  resumeFormat,
}) => {
  return (
    <div>
      {resumeFormat === 1 && (
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
          background={background}
        />
      )}

      {resumeFormat === 2 && (
        <ResumeFormat2
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
          background={background}
        />
      )}

      {resumeFormat === 3 && (
        <ResumeFormat3
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
          background={background}
        />
      )}

      {resumeFormat === 4 && (
        <ResumeFormat4
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
          background={background}
        />
      )}
    </div>
  );
};

export default ResumeOutput;
