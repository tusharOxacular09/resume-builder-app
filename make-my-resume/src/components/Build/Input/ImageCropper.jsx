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
    // Image decoder
    //console.log(preview);
  }, [setUserImage, preview]);

  return (
    <div>
      <Avatar width={350} height={200} onCrop={onCrop} onClose={onClose}/>
    </div>
  );
};

export default ImageCropper;
