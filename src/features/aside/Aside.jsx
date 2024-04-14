import React from "react";
import { useDispatch, useSelector } from "react-redux";
import wavesImg from "../../img/genre-waves.png";
import { setSelectedGenre, selectSelectedGenre } from "./genreSlice";

const Aside = () => {
  const selectedGenre = useSelector(selectSelectedGenre);
  const dispatch = useDispatch();

  const handleGenreClick = (genre) => {
    dispatch(setSelectedGenre(genre));
  };

  return (
    <div className="m-5 hidden w-1/4 lg:flex">
      <div className="w-full rounded-md bg-gradient-to-r from-yellow-500 via-red-600 to-blue-600 p-1">
        <div className="w-full h-full p-5 rounded-md bg-neutral-400">
          <div className="flex items-center pb-4 justify-center">
            <img src={wavesImg} alt="icon" className="w-14" />
            <a href="">
              <p className="text-3xl underline font-extrabold mx-3 hover:scale-105  hover:text-white ">
                All music
              </p>
            </a>
          </div>
          <hr />
          <div>
            <ul className="text-3xl px-7 space-y-1 py-3 font-mono bg-neutral-500 cursor-pointer">
              {[
                { genre: "Hip hop" },
                { genre: "Classic" },
                { genre: "Metal" },
                { genre: "Rock" },
                { genre: "Funk" },
                { genre: "Jazz" },
                { genre: "Rap" },
                { genre: "Pop" },
              ].map((item) => (
                <li
                  key={item.genre}
                  className={`border-b-2 px-2 ${
                    selectedGenre.toLowerCase() === item.genre.toLowerCase()
                      ? "scale-105 bg-gradient-to-r from-yellow-400 via-red-400 to-blue-400 text-white border-2 rounded-md"
                      : "hover:scale-105  hover:text-white "
                  }`}
                  onClick={() => handleGenreClick(item.genre)}
                >
                  {item.genre}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aside;
