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
      return { ...prev, [name]: value };
    });
  };

  const handleExperienceInput = () => {
    setWorkExpList((prev) => {
      return [...prev, workExperience];
    });
    setWorkExperience(user_work_experience)
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
          </div>
        </form>

      <button onClick={handleExperienceInput} className="border p-1">
        Add New Experience
      </button>

      <div className="flex flex-col w-full items-center p-2">
        {workExpList.map((workExp) => (
          <div className="border p-2 rounded m-1">{workExp.company}</div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
