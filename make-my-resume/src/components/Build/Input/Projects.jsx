import React, { useState } from "react";
import { TextField } from "@mui/material";
import { project_details } from "../../../objects/NewUserDetailsObject";
import { Link } from "react-router-dom";

const Projects = ({ projectsList, setProjectsList }) => {
  const [project, setProject] = useState(() => project_details);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    setProjectsList((prev) => [...prev, project]);
    setProject(project_details);
  };
  const deleteProject = (index) => {
    let newList = projectsList.filter((element, i) => {
      if (i !== index) {
        return element;
      } else {
        return 0;
      }
    });
    setProjectsList(newList);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <form className="p-2 lg:p-8">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full flex justify-between gap-2 mb-3 mt-3">
            <TextField
              value={project.name}
              name="name"
              label="Project Name"
              id="outlined-size-medium"
              size="medium"
              onChange={handleChange}
            />
            <TextField
              value={project.description}
              name="description"
              label="Description"
              id="outlined-size-medium"
              size="medium"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col w-full gap-3 mb-3 mt-3">
            <TextField
              value={project.website}
              name="website"
              fullWidth
              label="Website/Github Link"
              id="outlined-size-medium"
              size="medium"
              onChange={handleChange}
            />
            <TextField
              value={project.summery}
              name="summery"
              fullWidth
              id="outlined-multiline-static"
              label="Project summery"
              multiline
              rows={3}
              onChange={handleChange}
            />

            <button
              onClick={handleClick}
              className="text-white mt-4 text-center bg-blue-400 py-2 px-4 rounded-lg font-semibold text-base hover:bg-blue-500"
            >
              Add New Project
            </button>
          </div>
        </div>
      </form>

      <div className="flex flex-col w-full items-center p-2 mt-2 lg:mt-4">
        <p className="font-semibold border-b-2 mb-2 text-lg border-gray-600">
          Projects
        </p>

        {projectsList.map((project, index) => (
          <div
            key={index}
            className="relative border border-blue-400 px-14 py-4 rounded m-1"
          >
            <p>{project.name}</p>
            <div
              className="absolute top-1 right-1 cursor-pointer w-5"
              onClick={() => deleteProject(index)}
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
          to={"/build/education"}
          className="text-white bg-blue-400 px-6 py-2 rounded hover:bg-blue-500 font-semibold"
        >
          Prev
        </Link>
        <Link
          to={"/build/certifications"}
          className="text-white bg-blue-400 px-6 py-2 rounded hover:bg-blue-500 font-semibold"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Projects;
