import React, { useRef } from "react";
import ResumeFormat1 from "./ResumeFormat1";
import ResumeFormat2 from "./ResumeFormat2";
import ResumeFormat3 from "./ResumeFormat3";
import ResumeFormat4 from "./ResumeFormat4";
import { useReactToPrint } from "react-to-print";

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
  const screenshotRef = useRef(null);

  const captureAndSaveResume = useReactToPrint({
    content: () => screenshotRef.current,
  });

  return (
    <div>
      <div ref={screenshotRef} className="p-2">
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
      <div className="flex justify-center pr-2 p-2 lg:pt-4 pb-4 lg:pb-16">
        <button
          onClick={captureAndSaveResume}
          type="primary"
          className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg text-white font-medium"
        >
          Download Reusume
        </button>
      </div>
    </div>
  );
};

export default ResumeOutput;
