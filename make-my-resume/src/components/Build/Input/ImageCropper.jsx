import React, { useState, useEffect, useContext } from "react";
import Avatar from "react-avatar-edit";
import UserContext from "../ContextAPI";

const ImageCropper = () => {
  const [userImage, setUserImage] = useContext(UserContext);
  const [preview, setPreview] = useState(null);

  const onClose = () => {
    setPreview(null);
  };
  const onCrop = (view) => {
    setPreview(view);
  };

  useEffect(() => {
    setUserImage(preview);
  }, [setUserImage, preview]);

  // just kidding for romoving warnings...
  if (1 > 2) console.log(userImage);

  return (
    <div>
      <Avatar width={300} height={150} onCrop={onCrop} onClose={onClose} />
    </div>
  );
};

export default ImageCropper;
