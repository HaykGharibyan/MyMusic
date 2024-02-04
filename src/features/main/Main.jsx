import React, { useState } from "react";
import playIcon from "../../img/play.png";
import addIcon from "../../img/plus.png";
import randomIcon from "../../img/shuffle.png";
import downloadIcon from "../../img/downloads.png";
import MusicArray from "./MusicArray";

const Main = () => {
  const [isAudioVisible, setIsAudioVisible] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const toggleAudio = () => {
    setIsAudioPlaying(!isAudioPlaying);
  };

  return (
    <div class=" flex-grow  mr-5 rounded-md bg-gradient-to-r from-blue-600 via-red-600 to-yellow-500 p-1">
      <div class=" w-full h-full  p-5 rounded-md bg-neutral-400 ">
        <div className=" flex flex-row justify-evenly   bg-neutral-500 p-3 rounded-lg border-2 border-neutral-700 ">
          <button
            className="flex items-center  border-2 px-5 py-1 bg-neutral-100 font-bold rounded-md  border-neutral-700  "
            onClick={() => {
              setIsAudioVisible(!isAudioVisible);
              toggleAudio();
            }}
          >
            <img src={playIcon} alt="" className="w-5 " /> Play All
          </button>
          <button className=" flex items-center border-2 px-5 py-1 bg-neutral-100 font-bold  rounded-md border-neutral-700  ">
            <img src={addIcon} alt="" className="w-5 " /> Add All
          </button>
          <button className="  flex items-center border-2 px-5 py-1 bg-neutral-100 font-bold rounded-md border-neutral-700  ">
            <img src={randomIcon} alt="" className="w-5 " /> Random Order
          </button>
        </div>
        <div></div>
        <div className="flex flex-row justify-evenly text-xl font-bold bg-neutral-500 p-2 my-5">
          <div className="w-1/6 px-2"> </div>
          <div className=" border-l  w-full pl-5 ">Artist Name</div>
          <div className="border-l  w-full pl-5  px-2">Song Name</div>
          <div className="border-x   w-full pl-5  px-2"> Track</div>
          <div className="w-1/6 px-2"></div>
        </div>

        {MusicArray.map((item) => (
          <div className=" border-b-2">
            <div className="flex  flex-row justify-evenly text-lg font-semibold bg-neutral-500 p-2 ">
              <div className="w-1/6 px-2 flex items-center justify-between">
                <img
                  src={addIcon}
                  alt=""
                  className="w-4 hover:scale-125 cursor-pointer"
                />
                <img
                  src={playIcon}
                  alt=""
                  className="w-4 hover:scale-125 cursor-pointer "
                />
              </div>
              <div className=" border-l  w-full pl-5 ">{item.artistName}</div>
              <div className="border-l  w-full pl-5  px-2">{item.songName}</div>
              <div className="border-x   w-full pl-5  px-2">
                {" "}
                {isAudioVisible && (
                  <div>
                    <audio
                      controls
                      src={require(`../../music/${item.src}`)}
                      type="audio/mp3"
                      autoPlay={isAudioPlaying}
                      onEnded={() => setIsAudioPlaying(false)}
                      className=" h-[36px] border-2 rounded-full border-neutral-700"
                    />
                  </div>
                )}
                {item.id}
              </div>
              <div className="w-1/6 px-2 flex items-center justify-center">
                <a
                  href={require(`../../music/${item.src}`)}
                  download={item.songName}
                >
                  <img src={downloadIcon} alt="downloadIcon" className="w-6" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Main;
