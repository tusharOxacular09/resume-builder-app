import React, { useContext } from "react";
import ImageCropper from "./ImageCropper";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import UserContext from "../ContextAPI";

const PersonalDetails = () => {
  const [fullName, setFullNmae] = useContext(UserContext)
  const [headLine, setHeadLine] = useContext(UserContext)
  const [email, setEmail] = useContext(UserContext)
  const [phone, setPhone] = useContext(UserContext)
  const [website, setWebsite] = useContext(UserContext)
  const [summery, setSummery] = useContext(UserContext)
  const [dob, setDob] = useContext(UserContext)
  return (
    <div className="flex flex-col items-center justify-center">
      <form className="p-4 lg:p-8">
        <div className="flex flex-col items-center justify-center mb-4">
          <p className="text-xl font-semibold mb-1">Upload Your Image.....</p>
          <ImageCropper />
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-2 mb-2">
            <TextField
              required
              label="Full Name"
              id="outlined-size-medium"
              size="medium"
              onChange={(e) => {
                setFullNmae(e.target.value)
              }}
            />
            <TextField
              required
              label="Headline"
              id="outlined-size-medium"
              size="medium"
              onChange={(e) => {
                setHeadLine(e.target.value)
              }}
            />
          </div>

          <TextField
            fullWidth
            required
            label="Email"
            id="outlined-size-medium"
            size="medium"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />

          <div className="flex gap-2 mb-2 mt-2">
            <TextField
              required
              label="Phone Number"
              id="outlined-size-medium"
              size="medium"
              onChange={(e) => {
                setPhone(e.target.value)
              }}
            />
            <TextField
              label="Website"
              id="outlined-size-medium"
              size="medium"
              onChange={(e) => {
                setWebsite(e.target.value)
              }}
            />
          </div>
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="Summary"
            multiline
            rows={4}
            onChange={e => setSummery(e.target.value)}
          />
          <div className="w-full h-2"></div>
          <TextField
            fullWidth
            id="outlined-size-medium"
            size="medium"
            type="date"
            onChange={(e) => {
              setDob(e.target.value)
            }}
          />
          <Link className="block mt-4 lg:mt-6 w-32 lg:w-40 text-center bg-amber-400 px-4 py-3 rounded-xl font-bold text-base lg:text-lg hover:bg-amber-500">
            Next
          </Link>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails
