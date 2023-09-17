import React from "react";
import { TextField } from "@mui/material";
import { user_education } from "../../../objects/NewUserDetailsObject";
import { Link } from "react-router-dom";

const Education = ({
  userEducation,
  setUserEducation,
  educationList,
  setEducationList,
}) => {
  const handleChange = (e) => {
    //  e.preventDefault();
    const { name, value } = e.target;
    setUserEducation((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setEducationList((prev) => {
      return [...prev, userEducation];
    });
    setUserEducation(user_education);
  };

  const deleteEducation = (index) => {
    let newEducationList = educationList.filter((element, i) => {
      if (i !== index) {
        return element;
      } else {
        return 0;
      }
    });
    setEducationList(newEducationList);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center p-2">
        <form className="lg:px-8 pt-8">
          <div className="flex flex-col items-center justify-center">
            <div className="flex gap-4 mb-4">
              <TextField
                value={userEducation.institution}
                name="institution"
                required
                label="Institution"
                id="outlined-size-medium"
                size="medium"
                onChange={handleChange}
              />
              <TextField
                value={userEducation.degree}
                name="degree"
                required
                label="Degree"
                id="outlined-size-medium"
                size="medium"
                onChange={handleChange}
              />
            </div>

            <div className="flex gap-4 mb-4">
              <TextField
                value={userEducation.area_of_study}
                name="area_of_study"
                required
                label="Area of study"
                id="outlined-size-medium"
                size="medium"
                onChange={handleChange}
              />
              <TextField
                value={userEducation.grade}
                name="grade"
                label="Grade"
                id="outlined-size-medium"
                size="medium"
                onChange={handleChange}
              />
            </div>
            <div className="w-full flex gap-4 mb-4">
              <div className="w-1/2">
                <p>Start date</p>
                <input
                  className="w-full border rounded border-gray-300 px-3 py-4"
                  value={userEducation.start_date}
                  name="start_date"
                  type="date"
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/2">
                <p>End date</p>
                <input
                  className="w-full border rounded border-gray-300 px-3 py-4"
                  value={userEducation.end_date}
                  name="end_date"
                  type="date"
                  onChange={handleChange}
                />
              </div>
            </div>
            <TextField
              value={userEducation.summery}
              name="summery"
              fullWidth
              id="outlined-multiline-static"
              label="Summary"
              multiline
              rows={4}
              onChange={handleChange}
            />
            <button
              onClick={handleClick}
              className="text-white mt-4 text-center bg-blue-400 py-2 px-4 rounded-lg font-semibold text-base hover:bg-blue-500"
            >
              Add New Education
            </button>
          </div>
        </form>
      </div>

      <div className="flex flex-col w-full items-center p-2 mt-2 lg:mt-4">
        <p className="font-semibold border-b-2 mb-2 text-lg border-gray-600">
          Education
        </p>
        {educationList.map((workExp, index) => (
          <div
            key={index}
            className="relative border border-blue-400 px-14 py-4 rounded m-1"
          >
            <p>{workExp.institution}</p>
            <div
              className="absolute top-1 right-1 cursor-pointer w-5"
              onClick={() => deleteEducation(index)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full mt-2 flex items-center justify-between px-2 lg:px-10 max-lg:mb-2">
        <Link
          to={"/build/skills"}
          className="text-white bg-blue-400 px-6 py-2 rounded hover:bg-blue-500 font-semibold"
        >
          Prev
        </Link>
        <Link
          to={"/build/projects"}
          className="text-white bg-blue-400 px-6 py-2 rounded hover:bg-blue-500 font-semibold"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Education;
