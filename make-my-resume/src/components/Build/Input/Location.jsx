import React from 'react'
import TextField from "@mui/material/TextField";

const Location = () => {
    const handleChange = () => {}
  return (
    <div>
        <TextField
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
              
              name="phone"
              required
              label="Phone Number"
              id="outlined-size-medium"
              size="medium"
              onChange={handleChange}
            />
            <TextField
              
              name="website"
              label="Website"
              id="outlined-size-medium"
              size="medium"
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-3 mb-3 mt-3">
            <TextField
             
              name="phone"
              required
              label="Phone Number"
              id="outlined-size-medium"
              size="medium"
              onChange={handleChange}
            />
            <TextField
              
              name="website"
              label="Website"
              id="outlined-size-medium"
              size="medium"
              onChange={handleChange}
            />
          </div>
      
    </div>
  )
}

export default Location
