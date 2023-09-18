import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import CvSlider from "./CvSlider";

const Home = () => {
  const [image, setImage] = useState("./images/cv1.jpg");
  return (
    <div className="w-full mt-24">
      <div className="lg:flex items-center">
        <div className="lg:w-1/2 h-full ml-6 lg:ml-20 mr-2 max-md:mt-2">
          <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold leding-tight lg:leading-snug">
            Get <span className="text-amber-400">Hired!!</span> <br /> By
            building your resume <br /> for Free...
          </h1>
          <div className="text-gray-600 font-medium text-sm lg:text-lg leding-tight mt-2">
            <Typewriter
              words={[
                "Build beautiful, recruiter-tested resumes in a few clicks! Our resume builder is powerful and easy to use, with a range of amazing functions. Custom-tailor resumes for any job within minutes. Increase your interview chances and rise above the competition.",
              ]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={10}
              delaySpeed={1000}
            />
          </div>
          <Link
            to={"/build/personaldetails"}
            className="block mt-4 lg:mt-6 w-32 lg:w-40 text-center bg-amber-400 px-4 py-3 rounded-xl font-bold text-base lg:text-lg hover:bg-amber-500"
          >
            Get Started
          </Link>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            className="rounded-lg w-3/5 lg:w-7/12 mt-8 lg:mt-8 border-2"
            src={image}
            alt="Iimage Here"
          />
        </div>
      </div>
      <CvSlider setImage={setImage} />
    </div>
  );
};

export default Home;
