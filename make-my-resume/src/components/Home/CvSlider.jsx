import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { FooterWithSocialLinks } from "./FooterWithSocialLinks";

const CvSlider = ({ setImage }) => {
  const [text] = useTypewriter({
    words: [
      "Software Developer",
      "Product Manager",
      "Data Scientiest",
      "System Engineer",
      "Business accountant",
      "UI/UX designer",
      "Business Anylist",
      "Prompt Engineer",
      "DevOOps Engineer",
      "Clude Engineer",
      "Mechanical Operator",
    ],
    loop: 0,
  });
  const imageObj = [
    { path: "./images/cv1.jpg" },
    { path: "./images/cv2.jpg" },
    { path: "./images/cv3.jpg" },
    { path: "./images/cv4.jpg" },
    { path: "./images/cv5.jpg" },
    { path: "./images/cv6.jpg" },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex overflow-hidden py-10 cursor-pointer">
        {imageObj.map((obj, i) => (
          <img
            key={i}
            onClick={() => setImage(obj.path)}
            className="w-2/12 mx-0 border"
            src={obj.path}
            alt=""
          />
        ))}
      </div>
      <div className="font-semibold text-2xl lg:text-6xl mt-2 mb-20">
        <span>Become a</span> <span className="text-amber-400">{text}</span>
      </div>
      <FooterWithSocialLinks />
    </div>
  );
};

export default CvSlider;
