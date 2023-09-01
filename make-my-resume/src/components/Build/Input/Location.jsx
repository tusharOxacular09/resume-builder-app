import React from "react";
import TextField from "@mui/material/TextField";

const Location = ({ setUserLocation, userLocation }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserLocation((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="flex flex-col items-center justify-center p-2">
      <form className="lg:p-8">
        <div className="flex flex-col items-center justify-center">
          <TextField
            value={userLocation.address}
            name="address"
            fullWidth
            label="Address"
            id="outlined-size-medium"
            size="medium"
            onChange={handleChange}
          />
          <div className="flex gap-3 mb-3 mt-3">
            <TextField
              value={userLocation.city}
              name="city"
              label="City"
              id="outlined-size-medium"
              size="medium"
              onChange={handleChange}
            />
            <TextField
              value={userLocation.region}
              name="region"
              label="Region"
              id="outlined-size-medium"
              size="medium"
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-3 mb-3 mt-3">
            <TextField
              value={userLocation.country}
              name="country"
              required
              label="Country"
              id="outlined-size-medium"
              size="medium"
              onChange={handleChange}
            />
            <TextField
              required
              value={userLocation.postal_code}
              name="postal_code"
              label="Postal Code"
              id="outlined-size-medium"
              size="medium"
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Location;
