import React from "react";
import TextField from "@mui/material/TextField";
import { user_work_experience } from "../../../objects/NewUserDetailsObject";

const WorkExperience = ({
  setWorkExperience,
  workExperience,
  workExpList,
  setWorkExpList,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkExperience((prev) => {
      return { ...prev, [name]:value };
    });
  };

  const handleExperienceInput = () => {
    if (workExperience.company !== "" && workExperience.position !== "") {
      setWorkExpList((prev) => {
        return [...prev, workExperience];
      });
      setWorkExperience(user_work_experience);
    }
  };

  const deleteWorkExperience = (index) => {
    let newList = workExpList.filter((element, i) => {
      if (i !== index) {
        return element;
      }
    });
    setWorkExpList(newList);
  };

  return (
    <div>
      <form className="flex flex-col items-center justify-center p-2 lg:p-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-3 mb-3">
            <TextField
              value={workExperience.company}
              name="company"
              required
              label="Company Name"
              id="outlined-size-medium"
              size="small"
              onChange={handleChange}
            />
            <TextField
              value={workExperience.position}
              name="position"
              required
              label="Position"
              id="outlined-size-medium"
              size="small"
              onChange={handleChange}
            />
          </div>

          <TextField
            value={workExperience.job_summery}
            name="job_summery"
            fullWidth
            id="outlined-multiline-static"
            label="Job Summery including start and end date"
            multiline
            rows={2}
            onChange={handleChange}
          />

          <button
            onClick={handleExperienceInput}
            className="mt-4 text-center bg-amber-400 py-2 px-4 rounded-lg font-semibold text-base hover:bg-amber-500"
          >
            Add New Experience
          </button>
        </div>
      </form>

      <div className="flex flex-col w-full items-center p-2 mt-2 lg:mt-4">
        <p className="font-semibold border-b-2 mb-2 text-lg border-gray-600">
          Work Experiences
        </p>
        {workExpList.map((workExp, index) => (
          <div key={index} className="relative border border-amber-400 px-14 py-4 rounded m-1">
            <p>{workExp.company}</p>
            <div
              className="absolute top-1 right-1 cursor-pointer w-5"
              onClick={() => deleteWorkExperience(index)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
