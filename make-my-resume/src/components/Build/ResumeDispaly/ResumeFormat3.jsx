import React, { useContext } from "react";
import UserContext from "../ContextAPI";

const ResumeFormat3 = ({
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
}) => {
  const [image, setImage] = useContext(UserContext);
  // Just for removing the warnings....
  if (1 > 2) setImage("mypic.jpg");
  return (
    <div className="w-full h-full">
      <div className="flex flex-col border rounded-lg lg:h-[1106px]">
        {image !== null && (
          <div className={`flex items-center ${background} p-4`}>
            <div className="flex items-end justify-start w-2/12">
              <img
                src={
                  image ||
                  "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg"
                }
                alt=""
                className="w-28 h-28 border rounded-full"
              />
            </div>
            <div className="w-10/12">
              <p className="text-xl lg:text-3xl font-medium">
                {personalDetails.fullName}
              </p>
              <p className="text-sm lg:text-lg">{personalDetails.headLine}</p>
              <p className="text-xs lg:text-sm">{personalDetails.summery}</p>
            </div>
          </div>
        )}
        {image === null && (
          <div
            className={`w-full flex flex-col items-center justify-center p-2 lg:px-6 ${background}`}
          >
            <p className="text-xl lg:text-3xl font-medium">
              {personalDetails.fullName}
            </p>
            <p className="text-sm lg:text-lg">{personalDetails.headLine}</p>
            <p className="text-xs lg:text-sm text-center">
              {personalDetails.summery}
            </p>
          </div>
        )}

        <div className="flex">
          <div
            className={`w-1/2 h-full rounded-l-lg flex flex-col p-2 lg:pl-6 lg:pr-4`}
          >
            {/* Address */}
            <div className="w-full">
              <p className="font-semibold text-sm lg:text-base text-blue-400 border-b-2 border-blue-400">
                ADDRESS
              </p>
              <div className="my-1 gap-1 text-sm">
                <div className="flex items-center gap-2">
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="text-sm">{`${userLocation.address} ${userLocation.city} ${userLocation.region} ${userLocation.country} ${userLocation.postal_code}`}</p>
                </div>

                <div className="flex items-center gap-2">
                  <svg
                    fill="#000000"
                    width="16px"
                    height="16px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3,22H21a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H17V3a1,1,0,0,0-2,0V5H9V3A1,1,0,0,0,7,3V5H3A1,1,0,0,0,2,6V21A1,1,0,0,0,3,22ZM4,7H20v3H4Zm0,5H20v8H4Z" />
                  </svg>
                  <div className="flex flex-col">
                    <p>{personalDetails.dob}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <svg
                    width="16px"
                    height="16px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 8L17.4392 9.97822C15.454 11.0811 14.4614 11.6326 13.4102 11.8488C12.4798 12.0401 11.5202 12.0401 10.5898 11.8488C9.53864 11.6326 8.54603 11.0811 6.5608 9.97822L3 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p>{personalDetails.email}</p>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    fill="#000000"
                    width="16px"
                    height="16px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1.277,8.858C2.606,14.138,9.863,21.4,15.142,22.723a8.938,8.938,0,0,0,2.18.274,8.54,8.54,0,0,0,4.006-1,3.11,3.11,0,0,0,.764-4.951h0L20.006,14.96a3.111,3.111,0,0,0-3.444-.651,4.859,4.859,0,0,0-1.471.987c-.178.177-.506.205-.977.077A9.981,9.981,0,0,1,8.626,9.886c-.126-.471-.1-.8.078-.977a4.864,4.864,0,0,0,.988-1.473,3.112,3.112,0,0,0-.651-3.442L6.955,1.909A3.065,3.065,0,0,0,4.3,1.035,3.1,3.1,0,0,0,2,2.672,8.58,8.58,0,0,0,1.277,8.858ZM3.773,3.6A1.115,1.115,0,0,1,4.6,3.013,1.044,1.044,0,0,1,4.767,3a1.088,1.088,0,0,1,.774.323L7.626,5.408a1.1,1.1,0,0,1,.239,1.213A2.9,2.9,0,0,1,7.29,7.5,2.817,2.817,0,0,0,6.7,10.4c.722,2.7,4.205,6.179,6.9,6.9a2.821,2.821,0,0,0,2.907-.6,2.906,2.906,0,0,1,.874-.576,1.1,1.1,0,0,1,1.214.239l2.085,2.085a1.089,1.089,0,0,1,.31.942,1.114,1.114,0,0,1-.591.826,6.517,6.517,0,0,1-4.766.556C11.089,19.641,4.36,12.912,3.216,8.37A6.53,6.53,0,0,1,3.773,3.6Z" />
                  </svg>
                  <div className="flex flex-col">
                    <p>{personalDetails.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mt-2">
              {educationList.length !== 0 && (
                <div>
                  <p className="font-semibold text-sm lg:text-base text-blue-400 border-b-2 border-blue-400">
                    EDUCATION
                  </p>
                  <div>
                    {educationList.map((education, i) => {
                      return (
                        <div key={i}>
                          <div className="flex justify-between">
                            <p className="font-semibold text-base lg:text-lg">
                              {education.institution}
                            </p>
                            <p className="text-xs font-semibold text-gray-500">{`(${education.start_date} to ${education.end_date})`}</p>
                          </div>
                          <div className="flex justify-between">
                            <p className="text-sm font-medium text-gray-500">{`${education.degree}, ${education.area_of_study}`}</p>
                            {education.grade !== "" && (
                              <p className="text-xs font-semibold text-gray-500">
                                Grade: {education.grade}
                              </p>
                            )}
                          </div>
                          <p className="text-sm mt-1">{education.summery}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Skills */}
            <div>
              {skills.length !== 0 && (
                <div>
                  <p className="font-semibold text-sm lg:text-base text-blue-400 border-b-2 border-blue-400">
                    SKILLS
                  </p>
                  <div className="grid grid-cols-2 lg:grid-cols-3">
                    {skills.map((skill, i) => {
                      return (
                        <p key={i} className="text-sm font-medium w-1/2 pt-2">
                          {skill}
                        </p>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Certification */}
            <div>
              {certificationList.length !== 0 && (
                <div>
                  <p className="font-semibold text-sm lg:text-base text-blue-400 border-b-2 border-blue-400">
                    CERTIFICATION
                  </p>
                  <div className="pt-2 flex flex-col">
                    {certificationList.map((certificate, i) => {
                      return (
                        <div key={i}>
                          <p className="text-base font-medium">
                            {certificate.name}
                          </p>
                          <p className="text-sm pb-1">
                            {certificate.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Languages */}
            <div>
              {languageList.length !== 0 && (
                <div>
                  <p className="font-semibold text-sm lg:text-base text-blue-400 border-b-2 border-blue-400">
                    LANGUAGES
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2 lg:gap-4">
                    {languageList.map((language, i) => {
                      return (
                        <div key={i} className="flex gap-1 items-center">
                          <p className="text-base font-medium">
                            {language.name}
                          </p>
                          {parseInt(language.level) <= 5 && (
                            <p className="text-xs font-semibold bg-blue-300 px-1 pb-0.5 rounded">
                              Basic
                            </p>
                          )}
                          {parseInt(language.level) > 5 &&
                            parseInt(language.level) < 9 && (
                              <p className="text-xs font-semibold bg-blue-300 px-1 pb-0.5 rounded">
                                Average
                              </p>
                            )}
                          {parseInt(language.level) >= 9 && (
                            <p className="text-xs font-semibold bg-blue-300 px-1 pb-0.5 rounded">
                              Excellent
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Awards */}
            <div>
              {awardList.length !== 0 && (
                <div className="mt-1">
                  <p className="font-semibold text-sm lg:text-base text-blue-400 border-b-2 border-blue-400">
                    AWARDS
                  </p>
                  <div className="pt-2 flex flex-col">
                    {awardList.map((award, i) => {
                      return (
                        <div key={i} className="flex justify-center flex-col">
                          <p className="text-base font-medium">
                            {award.award_name}
                          </p>
                          {award.description !== "" && (
                            <p className="text-sm">{award.description}</p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Hobbies */}
            <div className="mt-2">
              {hobbies.length !== 0 && (
                <div>
                  <p className="font-semibold text-sm lg:text-base text-blue-400 border-b-2 border-blue-400">
                    HOBBIES
                  </p>
                  <div className="grid grid-cols-4 text-sm">
                    {hobbies.map((hobby, i) => (
                      <p key={i}>{hobby}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="w-1/2 h-full flex flex-col p-2 lg:pr-6 lg:pl-4">
            {/* Work Experience */}
            <div>
              {workExpList.length !== 0 && (
                <div>
                  <p className="font-semibold text-sm lg:text-base text-blue-400 border-b-2 border-blue-400">
                    WORK EXPERIENCE
                  </p>
                  <div>
                    {workExpList.map((work, i) => {
                      return (
                        <div key={i}>
                          <p className="text-base lg:text-lg font-semibold">
                            {work.company}
                          </p>
                          <p className="text-sm font-medium lg:text-base text-gray-500">
                            {work.position}
                          </p>
                          <p className="text-sm mt-1">{work.job_summery}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Project */}
            <div className="mt-2">
              {projectsList.length !== 0 && (
                <div>
                  <p className="font-semibold text-sm lg:text-base text-blue-400 border-b-2 border-blue-400">
                    PROJECTS
                  </p>
                  <div>
                    {projectsList.map((project, i) => {
                      return (
                        <div key={i}>
                          <p className="font-semibold text-base lg:text-lg">
                            {project.name}
                          </p>
                          <p className="text-xs font-semibold text-gray-500">
                            {project.description}
                          </p>
                          <p className="text-sm mt-1">{project.summery}</p>
                          {project.website !== "" && (
                            <div className="flex gap-1 items-center text-blue-500 text-xs font-medium py-1">
                              <svg
                                width="20px"
                                height="20px"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20"
                                  stroke="#000000"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              <p>{project.website}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Extra Details */}
            <div>
              {newDetails.length !== 0 && (
                <div>
                  <div className="flex flex-col">
                    {newDetails.map((details, i) => {
                      return (
                        <div key={i} className="flex flex-col justify-center">
                          {details.title && (
                            <p className="mt-2 mb-1 font-semibold text-sm lg:text-base text-blue-400 border-b-2 border-blue-400">
                              {details.title.toUpperCase()}
                            </p>
                          )}
                          <p className="text-sm">{details.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeFormat3;
