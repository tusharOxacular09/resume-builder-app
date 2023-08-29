import React from "react"

const ColorPicker = ({ setBackground }) => {
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
  ]

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="font-semibold text-2xl">Theme</p>
      <div className="flex flex-wrap lg:p-2 justify-center">
        {colorPicker.map((key, i) => {
          return (
            <div
              key={i}
              onClick={() => {
                setBackground(`${key.color}1`)
              }}
              className={`border my-1 mx-2 border-slate-600 w-10 h-10 rounded-full ${key.color} cursor-pointer`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ColorPicker
