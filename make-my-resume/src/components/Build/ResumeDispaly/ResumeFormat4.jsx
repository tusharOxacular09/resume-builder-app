import React, { useContext } from "react";
import UserContext from "../ContextAPI";

const ResumeFormat4 = ({
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
  // Just for removing the warnings....
  if (1 > 2) setImage("mypic.jpg");
  return (
    <div className="w-full h-full">
      <div className="flex flex-col border rounded-lg lg:h-[1106px] pb-4">
        <div className="py-3 border-b-2 border-gray-600">
          {image !== null && (
            <div className={`flex items-center px-2 lg:px-4`}>
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
              <div className="w-10/12 flex flex-col">
                <p className="text-xl lg:text-3xl font-medium">
                  {personalDetails.fullName}
                </p>

                <div className="text-sm flex flex-col mt-2">
                  <p>{`${personalDetails.headLine} | ${personalDetails.email}`}</p>
                  <p>
                    Address:{" "}
                    {`${userLocation.address}, ${userLocation.city}, ${userLocation.region}, ${userLocation.country}, ${userLocation.postal_code} | ${personalDetails.dob} | ${personalDetails.phone}`}
                  </p>
                </div>
              </div>
            </div>
          )}
          {image === null && (
            <div>
              <p className="text-xl lg:text-3xl font-medium text-center">
                {personalDetails.fullName}
              </p>

              <div className="text-sm flex flex-col items-center justify-center mt-2">
                <p>{`${personalDetails.headLine} | ${personalDetails.email}`}</p>
                <p>
                  Address:{" "}
                  {`${userLocation.address}, ${userLocation.city}, ${userLocation.region}, ${userLocation.country}, ${userLocation.postal_code} | ${personalDetails.dob} | ${personalDetails.phone}`}
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col px-4 lg:px-6">
          {personalDetails.summery !== "" && (
            <div>
              <p className="text-sm lg:text-lg text-gray-500">
                PERSONAL SUMMERY
              </p>
              <p className="text-xs lg:text-sm text-black mt-1">
                {personalDetails.summery}
              </p>
            </div>
          )}
          {/* Work Experience */}
          <div>
            {workExpList.length !== 0 && (
              <div className="mt-2">
                <p className="text-sm lg:text-lg text-gray-500">
                  WORK EXPERIENCE
                </p>
                <div>
                  {workExpList.map((work, i) => {
                    return (
                      <div key={i}>
                        <div className="flex gap-1 items-center mt-1">
                          <p className="text-sm lg:text-base font-semibold">
                            {work.company},
                          </p>
                          <p className="text-sm font-semibold">
                            {work.position}
                          </p>
                        </div>
                        <p className="text-sm mt-1">{work.job_summery}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Project */}
          <div>
            {projectsList.length !== 0 && (
              <div>
                <p className="text-sm lg:text-lg text-gray-500 mt-2">
                  PROJECTS
                </p>
                <div>
                  {projectsList.map((project, i) => {
                    return (
                      <div key={i}>
                        <p className="font-medium text-base">{project.name}</p>
                        <p className="text-xs font-semibold text-gray-500">
                          {project.description}
                        </p>
                        <p className="text-sm mt-1">{project.summery}</p>
                        {project.website !== "" && (
                          <div className="flex gap-1 items-center text-gray-500 text-sm font-medium py-1">
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

          {/* Education */}
          <div className="mt-2">
            {educationList.length !== 0 && (
              <div>
                <p className="text-sm lg:text-lg text-gray-500">EDUCATION</p>
                <div>
                  {educationList.map((education, i) => {
                    return (
                      <div key={i}>
                        <div className="flex justify-between items-center">
                          <p className="font-medium text-sm lg:text-base">
                            {education.institution}
                          </p>
                          <p className="text-xs font-medium text-gray-500">{`(${education.start_date} to ${education.end_date})`}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <p className="text-xs font-medium text-gray-500">{`${education.degree}, ${education.area_of_study},`}</p>
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

          {/* Certification */}
          <div>
            {certificationList.length !== 0 && (
              <div>
                <p className="text-sm lg:text-lg text-gray-500 mt-2">
                  CERTIFICATION
                </p>
                <div className="flex flex-col">
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

          {/* Skills */}
          <div>
            {skills.length !== 0 && (
              <div>
                <p className="text-sm lg:text-lg text-gray-500 mt-2">SKILLS</p>
                <div className="grid grid-cols-5 lg:grid-cols-7">
                  {skills.map((skill, i) => {
                    return (
                      <p key={i} className="text-sm font-medium pt-2">
                        {skill}
                      </p>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Awards */}
          <div>
            {awardList.length !== 0 && (
              <div>
                <p className="text-sm lg:text-lg text-gray-500 mt-2">AWARDS</p>
                <div className="mt-1 flex flex-col">
                  {awardList.map((award, i) => {
                    return (
                      <div key={i} className="flex justify-center flex-col">
                        <p className="text-sm font-medium">
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

          {/* Languages */}
          <div>
            {languageList.length !== 0 && (
              <div>
                <p className="text-sm lg:text-lg text-gray-500 mt-2">
                  LANGUAGES
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-4">
                  {languageList.map((language, i) => {
                    return (
                      <div key={i} className="flex gap-1 mt-2 items-center">
                        <p className="text-sm font-medium">{language.name}</p>
                        {parseInt(language.level) <= 5 && (
                          <p className="text-xs font-medium bg-gray-200 px-1 pb-0.5 rounded">
                            Basic
                          </p>
                        )}
                        {parseInt(language.level) > 5 &&
                          parseInt(language.level) < 9 && (
                            <p className="text-xs font-medium bg-gray-200 px-1 pb-0.5 rounded">
                              Average
                            </p>
                          )}
                        {parseInt(language.level) >= 9 && (
                          <p className="text-xs font-medium bg-gray-200 px-1 pb-0.5 rounded">
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

          {/* Extra Details */}
          <div>
            {newDetails.length !== 0 && (
              <div>
                <div className="flex flex-col">
                  {newDetails.map((details, i) => {
                    return (
                      <div key={i} className="flex flex-col justify-center">
                        {details.title && (
                          <p className="text-sm lg:text-lg text-gray-500 mt-2 mb-1">
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

          {/* Hobbies */}
          <div>
            {hobbies.length !== 0 && (
              <div>
                <p className="text-sm lg:text-lg text-gray-500 mt-2">HOBBIES</p>
                <div className="grid grid-cols-4 lg:grid-cols-7 text-sm">
                  {hobbies.map((hobby, i) => (
                    <p key={i}>{hobby}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeFormat4;
