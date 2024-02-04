import React from "react";
import wavesImg from "../../img/genre-waves.png";

const Aside = () => {
  return (
    <div class=" w-1/4 flex ">
      <div class="w-full   rounded-md bg-gradient-to-r from-yellow-500 via-red-600 to-blue-600 p-1">
        <div class=" w-full h-full  p-5 rounded-md bg-neutral-400 ">
          <div className=" flex items-center pb-4 justify-center ">
            <img src={wavesImg} alt="icon" className=" w-14" />
            <p className=" text-3xl underline  font-extrabold mx-3">
              All music
            </p>
          </div>
          <hr />
          <div>
            <ul className="text-3xl px-7 space-y-1  py-3 font-mono bg-neutral-500 cursor-pointer ">
              <li className="list-image-[url(music.png)] border-b-2 ">
                Popular
              </li>
              <li className="list-image-[url(music.png)] border-b-2 ">
                Hip hop
              </li>
              <li className="list-image-[url(music.png)] border-b-2 ">
                Classic
              </li>
              <li className="list-image-[url(music.png)] border-b-2 ">Metal</li>
              <li className="list-image-[url(music.png)] border-b-2 ">Rock</li>
              <li className="list-image-[url(music.png)] border-b-2 ">Funk</li>
              <li className="list-image-[url(music.png)] border-b-2 ">Jazz</li>
              <li className="list-image-[url(music.png)] border-b-2 ">Rap</li>
              <li className="list-image-[url(music.png)] border-b-2 ">Pop</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aside;
