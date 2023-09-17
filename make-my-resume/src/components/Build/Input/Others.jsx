import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import {
  user_language,
  user_award,
} from "../../../objects/NewUserDetailsObject";
import { Link } from "react-router-dom";

const Others = ({
  languageList,
  setLanguageList,
  awardList,
  setAwardList,
  hobbies,
  setHobbies,
}) => {
  const [language, setLanguage] = useState(user_language);
  const [award, setAward] = useState(user_award);
  const [userHobby, setUserHobby] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLanguage((prev) => {
      return { ...prev, [name]: value };
    });

    setAward((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleLanguage = (e) => {
    e.preventDefault();
    setLanguageList((prev) => [...prev, language]);
    setLanguage(user_language);
  };
  const deleteLanguage = (index) => {
    let newList = languageList.filter((element, i) => {
      if (i !== index) {
        return element;
      } else {
        return 0;
      }
    });
    setLanguageList(newList);
  };

  const handleAwards = (e) => {
    e.preventDefault();
    setAwardList((prev) => [...prev, award]);
    setAward(user_award);
  };
  const deleteAward = (index) => {
    let newList = awardList.filter((element, i) => {
      if (i !== index) {
        return element;
      } else {
        return 0;
      }
    });
    setAwardList(newList);
  };

  const handleHobbies = (e) => {
    e.preventDefault();
    setHobbies((prev) => [...prev, userHobby]);
    setUserHobby("");
  };

  const deleteHobby = (index) => {
    let newList = hobbies.filter((element, i) => {
      if (i !== index) {
        return element;
      } else {
        return 0;
      }
    });
    setHobbies(newList);
  };
  return (
    <div className="p-2 lg:px-8">
      <div>
        <p className="font-semibold border rounded py-1 mb-4 border-gray-400 text-xl font-sans text-center">
          Languages
        </p>
        <form className="flex flex-col items-center justify-center">
          <div className="flex w-full items-center justify-between gap-3">
            <TextField
              value={language.name}
              name="name"
              required
              label="Language Name"
              id="outlined-size-medium"
              size="small"
              onChange={handleChange}
            />
            <TextField
              value={language.level}
              name="level"
              required
              label="Level Out Of 10"
              id="outlined-size-medium"
              size="small"
              onChange={handleChange}
            />
          </div>
          <button
            onClick={handleLanguage}
            className="text-white mt-4 text-center bg-blue-400 py-2 px-4 rounded-lg font-semibold text-base hover:bg-blue-500"
          >
            Add New Language
          </button>
        </form>
        <div className="flex flex-wrap w-full items-center justify-center gap-2 p-2 mt-2 lg:mt-4">
          {languageList.map((language, index) => (
            <div
              key={index}
              className="border border-blue-400 px-2 py-1 gap-4 rounded m-1 flex items-center justify-center"
            >
              <p>{language.name}</p>
              <div
                className="cursor-pointer w-5"
                onClick={() => deleteLanguage(index)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 lg:mt-6">
        <p className="font-semibold border rounded py-1 mb-4 border-gray-400 text-xl font-sans text-center">
          Awards
        </p>
        <form className="flex flex-col items-center justify-center">
          <div className="flex flex-col w-full items-center justify-center gap-3">
            <TextField
              value={award.award_name}
              name="award_name"
              required
              fullWidth
              label="Award Name"
              id="outlined-size-medium"
              size="small"
              onChange={handleChange}
            />
            <TextField
              value={award.description}
              name="description"
              required
              fullWidth
              multiline
              rows={2}
              label="Description"
              id="outlined-size-medium"
              size="small"
              onChange={handleChange}
            />
          </div>
          <button
            onClick={handleAwards}
            className="text-white mt-4 text-center bg-blue-400 py-2 px-4 rounded-lg font-semibold text-base hover:bg-blue-500"
          >
            Add New Experience
          </button>
        </form>
        <div className="flex flex-wrap w-full items-center justify-center gap-2 p-2 mt-2 lg:mt-4">
          {awardList.map((award, index) => (
            <div
              key={index}
              className="border border-blue-400 px-2 py-1 gap-4 rounded m-1 flex items-center justify-center"
            >
              <p>{award.award_name}</p>
              <div
                className="cursor-pointer w-5"
                onClick={() => deleteAward(index)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 lg:mt-6">
        <p className="font-semibold border rounded py-1 mb-4 border-gray-400 text-xl font-sans text-center">
          Hobbies and Interests
        </p>
        <form className="flex flex-col items-center justify-center">
          <TextField
            value={userHobby}
            required
            fullWidth
            label="Hobby or Intrest"
            id="outlined-size-medium"
            size="small"
            onChange={(e) => setUserHobby(e.target.value)}
          />
          <button
            onClick={handleHobbies}
            className="text-white mt-4 text-center bg-blue-400 py-2 px-4 rounded-lg font-semibold text-base hover:bg-blue-500"
          >
            Add New Hobby
          </button>
        </form>
        <div className="flex flex-wrap w-full items-center justify-center gap-2 p-2 mt-2 lg:mt-4">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="border border-blue-400 px-2 py-1 gap-4 rounded m-1 flex items-center justify-center"
            >
              <p>{hobby}</p>
              <div
                className="cursor-pointer w-5"
                onClick={() => deleteHobby(index)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mt-2 flex items-center justify-between px-2 lg:px-4">
        <Link
          to={"/build/certifications"}
          className="text-white bg-blue-400 px-6 py-2 rounded hover:bg-blue-500 font-semibold"
        >
          Prev
        </Link>
        <Link
          to={"/build/custom-details"}
          className="text-white bg-blue-400 px-6 py-2 rounded hover:bg-blue-500 font-semibold"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Others;
