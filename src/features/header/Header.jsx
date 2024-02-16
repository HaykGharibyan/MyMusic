import React from "react";
import logo from "../../img/audio-waves.png";
import favoriteMusicImg from "../../img/favorite.png";
import {
  selectSearchQuery,
  setSearchQuery,
  toggleFavoritesListVisibility,
} from "../main/mainSlice";

import { useSelector, useDispatch } from "react-redux";

export default function Header() {
  const searchQuery = useSelector(selectSearchQuery);
  const dispatch = useDispatch();

  const openfavoriteList = () => {
    dispatch(toggleFavoritesListVisibility());
  };

  return (
    <div className="bg-neutral-700">
      <div className="container mx-auto w-full h-full flex flex-row items-center justify-between bg-neutral-700">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-16" />
          <strong className="mx-3 text-neutral-100 text-3xl whitespace-nowrap">
            <a href=""> MyMusic</a>
          </strong>
        </div>
        <div className="flex items-center">
          <img
            src={favoriteMusicImg}
            alt="favorit Img"
            className="w-16 cursor-pointer mx-3 "
            onClick={() => {
              openfavoriteList();
            }}
          />
          <input
            type="text"
            placeholder="Search Music"
            value={searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            className="block bg-white w-64 border rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm "
          />
        </div>
      </div>
    </div>
  );
}
