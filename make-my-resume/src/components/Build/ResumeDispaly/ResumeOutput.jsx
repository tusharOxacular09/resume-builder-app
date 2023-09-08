import React, { useContext } from "react";
import UserContext from "../ContextAPI";

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
  const [image, setImage] = useContext(UserContext);

  return (
    <div>
      <img
        src={
          image ||
          "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg"
        }
        alt=""
        className="w-32 h-32 border rounded-full"
      />
      <p>{personalDetails.fullName}</p>
      <p>{personalDetails.headLine}</p>
      <p>{personalDetails["email"]}</p>
      <p>{personalDetails.phone}</p>
      <p>{personalDetails.website}</p>
      <p>{personalDetails.summery}</p>
      <p>{personalDetails.dob}</p>
      <div className="m-2 border border-blue-500 rounded w-1/3">
        <p>{userLocation.address}</p>
        <p>{userLocation.city}</p>
        <p>{userLocation.region}</p>
        <p>{userLocation.postal_code}</p>
        <p>{userLocation.country}</p>
      </div>

      <div className="flex justify-between items-center">
        <div className="w-full flex flex-col border-b mb-2">
          <p className="text-2xl font-semibold mb-1">Work Experience</p>
          {workExpList.map((experience, index) => {
            return (
              <div key={index} className="flex flex-col">
                <p className="text-xl font-semibold mb-1">
                  {experience.company}
                </p>
                <p className="text-lg font-medium text-gray-400 mb-1">
                  {experience.position}
                </p>
                <p className="text-sm mb-1">{experience.job_summery}</p>
              </div>
            );
          })}
        </div>
        <div className="w-full flex flex-col border-b mb-2">
          <p className="text-2xl font-semibold mb-1">Certificates</p>
          {certificationList.map((certificates, index) => {
            return (
              <div key={index} className="flex flex-col">
                <p className="text-xl font-semibold mb-1">
                  {certificates.name}
                </p>
                <p className="text-lg font-medium text-gray-400 mb-1">
                  {certificates.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <p className="text-2xl font-semibold mb-1">Skills</p>
      <div className="w-full flex flex-col border-t mb-2">
        {skills.map((skill, index) => {
          return (
            <div key={index} className="flex flex-col">
              <p>{skill}</p>
            </div>
          );
        })}
      </div>
      <p className="text-2xl font-semibold mb-1">Education</p>
      <div className="w-full flex flex-col border-t mb-2">
        {educationList.map((education, index) => {
          return (
            <div key={index} className="">
              <p className="text-lg font-bold">{education.institution}</p>
              <h5>{education.degree}</h5>
              <p>{education.area_of_study}</p>
              <p>Grade: {education.grade}</p>
              <p>{`${education.start_date} to ${education.end_date}`}</p>
              <p>{education.summery}</p>
            </div>
          );
        })}
      </div>
      <p className="text-2xl font-semibold mb-1">Languages</p>
      <div className="w-full flex flex-col border-t mb-2">
        {languageList.map((language, index) => {
          return (
            <div key={index} className="">
              <p className="text-lg font-bold">{language.name}</p>
              <h5>{language.level}</h5>
            </div>
          );
        })}
      </div>

      <p className="text-2xl font-semibold mb-1">Awards</p>
      <div className="w-full flex flex-col border-t mb-2">
        {awardList.map((award, index) => {
          return (
            <div key={index} className="">
              <p className="text-lg font-bold">{award.award_name}</p>
              <h5>{award.description}</h5>
            </div>
          );
        })}
      </div>
      <p className="text-2xl font-semibold mb-1">Hobbies and Interests</p>
      <div className="w-full flex flex-col border-t mb-2">
        {hobbies.map((hobby, index) => {
          return (
            <div key={index} className="">
              <p className="text-lg font-bold">{hobby}</p>
            </div>
          );
        })}
      </div>

      <p className="text-2xl font-semibold mb-1">Projects</p>
      <div className="w-full flex flex-col border-t mb-2">
        {projectsList.map((project, index) => {
          return (
            <div key={index} className="">
              <p className="text-lg font-bold">{project.name}</p>
              <h5>{project.description}</h5>
              <p>{project.website}</p>
              <p>{project.summery}</p>
            </div>
          );
        })}
      </div>
      <div className="w-full flex flex-col border-t mb-2">
        {newDetails.map((details, index) => {
          return (
            <>
              <div key={index}>
                <p className="text-2xl font-semibold mb-1">{details.title}</p>
                <p>{details.description}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ResumeOutput;
