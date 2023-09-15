const ColorPicker = ({ setBackground, setResumeFormat }) => {
  const colorPicker = [
    { color: "bg-yellows" },
    { color: "bg-reds" },
    { color: "bg-pinks" },
    { color: "bg-deepBlues" },
    { color: "bg-blues" },
    { color: "bg-skys" },
    { color: "bg-deepSkys" },
    { color: "bg-greens" },
    { color: "bg-lightGreens" },
    { color: "bg-darkYellows" },
    { color: "bg-darks" },
    { color: "bg-lights" },
  ];

  const bgColorPicker = [
    { color: "bg-yellows1" },
    { color: "bg-reds1" },
    { color: "bg-pinks1" },
    { color: "bg-deepBlues1" },
    { color: "bg-blues1" },
    { color: "bg-skys1" },
    { color: "bg-deepSkys1" },
    { color: "bg-greens1" },
    { color: "bg-lightGreens1" },
    { color: "bg-darkYellows1" },
    { color: "bg-darks1" },
    { color: "bg-lights1" },
  ];

  return (
      <div className="flex flex-col overflow-y-scroll h-screen scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100">
        <div className="flex flex-col items-center p-2">
          <p className="font-semibold text-2xl border-b-2 border-gray-500">
            Theme
          </p>
          <div className="flex flex-wrap lg:p-1 justify-center">
            {colorPicker.map((key, i) => {
              return (
                <div
                  key={i}
                  onClick={() => {
                    setBackground(bgColorPicker[i]["color"]);
                  }}
                  className={`border my-1 mx-2 border-slate-600 w-10 h-10 rounded-full ${key.color} cursor-pointer`}
                ></div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center p-2">
          <p className="font-semibold text-2xl border-b-2 border-gray-500">
            Select Formats
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-1 mt-2">
            <img
              onClick={() => setResumeFormat(1)}
              className="border rounded cursor-pointer my-2"
              src="../images/resume-format-1.jpg"
              alt=""
            ></img>
            <img
              onClick={() => setResumeFormat(2)}
              className="border rounded cursor-pointer my-2"
              src="../images/resume-format-2.jpg"
              alt=""
            ></img>
            <img
              onClick={() => setResumeFormat(3)}
              className="border rounded cursor-pointer my-2"
              src="../images/resume-format-3.jpg"
              alt=""
            ></img>
            <img
              onClick={() => setResumeFormat(4)}
              className="border rounded cursor-pointer my-2"
              src="../images/resume-format-4.jpg"
              alt=""
            ></img>
          </div>
        </div>
      </div>
  );
};

export default ColorPicker;
