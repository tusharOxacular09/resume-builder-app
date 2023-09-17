import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { new_details } from "../../../objects/NewUserDetailsObject";
import { Link } from "react-router-dom";

const CustomDetails = ({ newDetails, setNewDetails }) => {
  const [details, setDetails] = useState(new_details);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    setNewDetails((prev) => [...prev, details]);
    setDetails(new_details);
  };

  const deleteDetails = (index) => {
    let newList = newDetails.filter((element, i) => {
      if (i !== index) {
        return element;
      } else {
        return 0;
      }
    });
    setNewDetails(newList);
  };

  return (
    <div className="p-2 lg:p-8 max-lg:pb-8">
      <form className="w-full flex gap-3 flex-col items-center justify-center">
        <TextField
          required
          value={details.title}
          name="title"
          label="Title"
          fullWidth
          id="outlined-size-medium"
          size="medium"
          onChange={handleChange}
        />
        <TextField
          required
          fullWidth
          value={details.description}
          name="description"
          label="Description"
          id="outlined-size-medium"
          size="medium"
          multiline
          rows={2}
          onChange={handleChange}
        />
        <button
          onClick={handleClick}
          className="text-white mt-4 text-center bg-blue-400 py-2 px-4 rounded-lg font-semibold text-base hover:bg-blue-500"
        >
          Add Details
        </button>
      </form>
      <div className="flex flex-col w-full items-center p-2 mt-2 lg:mt-4">
        <p className="font-semibold border-b-2 mb-2 text-lg border-gray-600">
          Other Details
        </p>
        {newDetails.map((details, index) => (
          <div
            key={index}
            className="border mt-1 border-blue-400 px-4 py-2 rounded flex gap-4 items-center justify-center"
          >
            <p>{details.title}</p>
            <div
              className="cursor-pointer w-5"
              onClick={() => deleteDetails(index)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
      <div className="relative w-full mt-2 flex items-center justify-between px-2 lg:px-10">
        <Link
          to={"/build/others"}
          className="text-white absolute left-0 bg-blue-400 px-6 py-2 rounded hover:bg-blue-500 font-semibold"
        >
          Prev
        </Link>
      </div>
    </div>
  );
};

export default CustomDetails;
