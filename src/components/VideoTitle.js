import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[20%] px-6 md:px-16 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:block py-6 text-lg w-5/12">{overview}</p>
      <div className="mt-4 md:mt-0">
        <button className="bg-white text-black py-2 px-6 md:py-4 md:px-12 text-xl font-semibold rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-600 text-white py-4 px-12 text-xl font-semibold rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
