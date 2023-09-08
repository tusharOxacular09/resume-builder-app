import React from "react";
import ImageCropper from "./ImageCropper";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";


const PersonalDetails = ({ setPersonalDetails, personalDetails }) => {
  
  const handleChange = (e) => {
     const {name, value} = e.target
     setPersonalDetails((prev) => {
       return { ...prev, [name]: value}
     })
  }

  return (
    <div className="flex flex-col items-center justify-center p-2">
        <div className="flex flex-col items-center justify-center mb-2 max-lg:mb-4">
          <p className="text-lg font-semibold mb-1">Upload Your Image.....</p>
          <ImageCropper />
        </div>
        <form className="lg:p-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-3 mb-3">
            <TextField
              value={personalDetails.fullName}
              name="fullName"
              required
              label="Full Name"
              id="outlined-size-medium"
              size="medium"
              onChange={handleChange}
            />
            <TextField
              value={personalDetails.headLine}
              name="headLine"
              required
              label="Headline"
              id="outlined-size-medium"
              size="medium"
              onChange={handleChange}
            />
          </div>

          <TextField
            value={personalDetails["email"]}
            name="email"
            fullWidth
            required
            label="Email"
            id="outlined-size-medium"
            size="medium"
            onChange={handleChange}
          />

          <div className="flex gap-3 mb-3 mt-3">
            <TextField
              value={personalDetails.phone}
              name="phone"
              required
              label="Phone Number"
              id="outlined-size-medium"
              size="medium"
              onChange={handleChange}
            />
            <TextField
              value={personalDetails.website}
              name="website"
              label="Website"
              id="outlined-size-medium"
              size="medium"
              onChange={handleChange}
            />
          </div>
          <TextField
            value={personalDetails.summery}
            name="summery"
            fullWidth
            id="outlined-multiline-static"
            label="Summary"
            multiline
            rows={4}
            onChange={handleChange}
          />
          <div className="w-full h-3"></div>
          <TextField
            value={personalDetails.dob}
            name="dob"
            fullWidth
            id="outlined-size-medium"
            size="medium"
            type="date"
            onChange={handleChange}
          />
          {/* <Link to='/' className="block mt-4 w-24 text-center bg-amber-400 p-2 rounded-xl font-bold text-base lg:text-lg hover:bg-amber-500">Next</Link> */}
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails
