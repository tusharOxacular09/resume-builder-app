import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

const Skills = ({ skills, setSkills }) => {
  const [mySkill, setMySkill] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    setSkills((prev) => [...prev, mySkill]);
    setMySkill("");
  };

  const deleteSkills = (index) => {
    let newList = skills.filter((element, i) => {
      if (i !== index) {
        return element;
      } else {
        return 0;
      }
    });
    setSkills(newList);
  };
  return (
    <>
      <div className="px-2 lg:px-4 flex flex-col lg:mt-8">
        <TextField
          value={mySkill || ""}
          fullWidth
          required
          label="Skill"
          id="outlined-size-medium"
          size="medium"
          onChange={(e) => setMySkill(e.target.value)}
        />
        <button
          onClick={handleClick}
          className="text-white align-right mt-4 text-center bg-blue-400 py-2 px-4 rounded-lg font-semibold text-base hover:bg-blue-500"
        >
          Add Skill
        </button>
      </div>
      <div className="flex flex-col w-full items-center p-2 mt-2 lg:mt-4">
        <p className="font-semibold border-b-2 mb-2 text-lg border-gray-600">
          My Skills
        </p>
        {skills.map((skill, index) => (
          <div
            key={index}
            className="border border-blue-400 rounded m-1 flex items-center justify-between gap-4 px-4 py-2"
          >
            <p>{skill}</p>
            <div
              className="cursor-pointer w-5"
              onClick={() => deleteSkills(index)}
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
          to={"/build/work-experience"}
          className="text-white bg-blue-400 px-6 py-2 rounded hover:bg-blue-500 font-semibold"
        >
          Prev
        </Link>
        <Link
          to={"/build/education"}
          className="text-white bg-blue-400 px-6 py-2 rounded hover:bg-blue-500 font-semibold"
        >
          Next
        </Link>
      </div>
    </>
  );
};

export default Skills;
