import React from "react";
import logo from "../../img/audio-waves.png";
import favoriteMusicImg from "../../img/favorite.png";
import menuIcon from "../../img/menu.png";
import {
  selectSearchQuery,
  setSearchQuery,
  toggleFavoritesListVisibility,
  toggleMenu,
  selectMenuState,
} from "../main/mainSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Header() {
  const searchQuery = useSelector(selectSearchQuery);
  const isMenuOpen = useSelector(selectMenuState);
  const dispatch = useDispatch();

  const openFavoriteList = () => {
    dispatch(toggleFavoritesListVisibility());
  };

  const handleMenuClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="bg-neutral-700">
      <div
        className={` container mx-auto w-full h-full flex flex-row items-center justify-between ${
          isMenuOpen ? "bg-neutral-800" : "bg-neutral-700"
        }`}
      >
        <div className="mx-5 flex items-center">
          <img src={logo} alt="logo" className="w-16" />
          <strong className="mx-3 text-neutral-100 text-3xl whitespace-nowrap">
            <a href=""> MyMusic</a>
          </strong>
        </div>
        <div className=" mx-5 hidden md:flex items-center">
          <img
            src={favoriteMusicImg}
            alt="favorit Img"
            className="w-16 cursor-pointer mx-3 "
            onClick={openFavoriteList}
          />
          <input
            type="text"
            placeholder=" Write Song Name"
            value={searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            className="block bg-white w-64 border rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm "
          />
        </div>
        <button
          className={` mx-5 inline-block md:hidden transition-transform ease-in-out duration-300 transform ${
            isMenuOpen ? "rotate-180 " : "rotate-0"
          }`}
          onClick={handleMenuClick}
        >
          <img src={menuIcon} alt="" />
        </button>
      </div>
      {isMenuOpen && (
        <div className=" bg-neutral-800 p-4 ">
          <div className=" mx-5 flex items-center">
            <input
              type="text"
              placeholder=" Write Song Name "
              value={searchQuery}
              onChange={(e) => dispatch(setSearchQuery(e.target.value))}
              className="block bg-white w-64 border rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm "
            />
            <img
              src={favoriteMusicImg}
              alt="favorit Img"
              className="w-16 cursor-pointer ml-2 md:mx-3 "
              onClick={openFavoriteList}
            />
          </div>
        </div>
      )}
    </div>
  );
}
