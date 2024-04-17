import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleAudioVisibility,
  toggleAudioPlaying,
  selectAudioVisibility,
  selectAudioPlaying,
  selectCurrentAudioId,
  selectSearchQuery,
  toggleAddFavoritesList,
  selectFavoritesListVisibility,
  selectFavorites,
  selectCanciErevaly,
  removeFromFavorites,
  setVisibleSongs,
  selectVisibleSongs,
} from "../main/mainSlice";
import { selectSelectedGenre } from "../aside/genreSlice";
import playIcon from "../../img/play.png";
import pauseIcon from "../../img/pause.png";
import addIcon from "../../img/plus.png";

import downloadIcon from "../../img/downloads.png";
import MusicArray from "./MusicArray";
import bin from "../../img/bin.png";

const Main = () => {
  const isAudioVisible = useSelector(selectAudioVisibility);
  const isAudioPlaying = useSelector(selectAudioPlaying);
  const currentAudioId = useSelector(selectCurrentAudioId);
  const searchQuery = useSelector(selectSearchQuery);
  const selectedGenre = useSelector(selectSelectedGenre);
  const favoritesList = useSelector(selectFavorites);
  const dispatch = useDispatch();
  const canciErevaly = useSelector(selectCanciErevaly);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const visibleSongs = useSelector(selectVisibleSongs);

  const handleRemoveFromFavorites = (id) => {
    dispatch(removeFromFavorites(id));
  };
  const toggleAudio = (id) => {
    if (isAudioPlaying && currentAudioId === id) {
      dispatch(toggleAudioPlaying());
    } else {
      dispatch(toggleAudioPlaying(id));
    }
    dispatch(toggleAudioVisibility());
    setCurrentTrackIndex(MusicArray.findIndex((item) => item.id === id));
  };

  const openFavorite = useSelector(selectFavoritesListVisibility);

  const addFavorites = (id) => {
    dispatch(toggleAddFavoritesList(id));
  };
  const handleAudioEnded = () => {
    dispatch(toggleAudioPlaying());
    dispatch(toggleAudioVisibility());
    setCurrentTrackIndex(currentTrackIndex + 1);
  };

  const playAllTracks = () => {
    setCurrentTrackIndex(0);
    toggleAudio(MusicArray[currentTrackIndex].id);
  };

  useEffect(() => {
    if (currentTrackIndex < MusicArray.length) {
      toggleAudio(MusicArray[currentTrackIndex].id);
    }
  }, [currentTrackIndex]);

  const filteredMusic = MusicArray.filter(
    (item) =>
      item.genre.toLowerCase().includes(selectedGenre.toLowerCase()) &&
      item.songName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredFavorites = favoritesList.filter((favoriteId) =>
    MusicArray.find((song) => song.id === favoriteId)
      .songName.toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const loadMore = () => {
    dispatch(setVisibleSongs(visibleSongs + 10));
  };

  return (
    <div className=" m-5 flex-grow mr-5 rounded-md bg-gradient-to-r from-blue-600 via-red-600 to-yellow-500 p-1">
      <div className="w-full h-full  p-5 rounded-md bg-neutral-400">
        <div className="flex flex-row justify-evenly bg-neutral-500 p-3 rounded-lg border-2 border-neutral-700">
          <button
            className=" hidden lg:flex items-center border-2 px-5 py-1 bg-neutral-100 font-bold rounded-md border-neutral-700 hover:scale-105 hover:bg-gradient-to-r from-yellow-400 via-red-400 to-blue-400"
            onClick={playAllTracks}
          >
            <img src={playIcon} alt="" className="w-5" /> Play All
          </button>

          {!isAudioVisible && (
            <>
              <audio
                controls
                src=""
                type="audio/mp3"
                className="w-[265px]  h-[36px]  border-2 rounded-full border-neutral-700   "
              />
            </>
          )}
          {MusicArray.map((item) => (
            <>
              {isAudioVisible && currentAudioId === item.id && (
                <>
                  <audio
                    controls
                    src={require(`../../music/${item.src}`)}
                    type="audio/mp3"
                    autoPlay={isAudioPlaying}
                    onEnded={handleAudioEnded}
                    className="w-[265px] h-[36px] lg:h-[36px]  border-2 rounded-full border-neutral-700"
                  />
                </>
              )}
            </>
          ))}
        </div>
        <div></div>
        <div className="flex flex-row justify-evenly text-md lg:text-xl font-bold bg-neutral-500 p-2 my-5">
          <div className="w-1/6 lg:px-2 mr-5"> </div>
          <div className="border-l w-full lg:pl-5 px-2">Artist Name</div>
          <div className="border-x w-full lg:pl-5 px-2">Song Name</div>
          <div className="hidden lg:inline-block w-full pl-5 px-2">Genre</div>
          <div className="hidden lg:inline-block border-x w-full pl-5 px-2">
            Track
          </div>
          <div className="w-1/6 ml-2 lg:px-2"></div>
        </div>
        <>
          {openFavorite &&
            (filteredFavorites.length === 0 ? (
              <div className="rounded-xl bg-gradient-to-r from-blue-600 via-red-600 to-yellow-500 p-1">
                <div className="p-8 lg:p-16 rounded-md bg-neutral-400">
                  <p className="text-center text-3xl lg:text-5xl font-bold text-white">
                    Favorites list is empty
                  </p>
                </div>
              </div>
            ) : (
              filteredFavorites.map((favoriteId) => {
                const favoriteSong = MusicArray.find(
                  (song) => song.id === favoriteId
                );
                return (
                  <div className="border-b-2" key={favoriteId}>
                    <div className="flex flex-row justify-evenly text-lg font-semibold bg-neutral-500 p-2">
                      <div className="w-1/6 lg:px-2 mr-5  flex items-center gap-1 lg:gap-2">
                        <img
                          src={bin}
                          alt=""
                          className="w-4 hover:scale-125 cursor-pointer"
                          onClick={() => handleRemoveFromFavorites(favoriteId)}
                        />
                        <img
                          src={
                            currentAudioId === favoriteSong.id && isAudioPlaying
                              ? pauseIcon
                              : playIcon
                          }
                          alt=""
                          className="w-4 hover:scale-125 cursor-pointer"
                          onClick={() => {
                            toggleAudio(favoriteSong.id);
                          }}
                        />
                      </div>
                      <div className="border-l truncate w-full  px-2">
                        {favoriteSong.artistName}
                      </div>
                      <div className="border-l truncate w-full  px-2">
                        {favoriteSong.songName}
                      </div>{" "}
                      <div className="  border-x  w-full  px-2 hidden lg:inline-block ">
                        {favoriteSong.genre}
                      </div>
                      <div className="border-l w-full  px-2 hidden lg:inline-block ">
                        {" "}
                        {favoriteSong.id}
                      </div>
                      <div className="w-1/6  lg:px-2 flex items-center justify-center">
                        <a
                          href={require(`../../music/${favoriteSong.src}`)}
                          download={favoriteSong.songName}
                        >
                          <img
                            src={downloadIcon}
                            alt="downloadIcon"
                            className="w-6"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })
            ))}
        </>
        <div>
          {canciErevaly && (
            <>
              {filteredMusic.slice(0, visibleSongs).map((item) => (
                <div className="border-b-2 " key={item.id}>
                  <div className="flex text-sm  flex-row justify-evenly lg:text-lg font-semibold bg-neutral-500 p-2">
                    <div className="w-1/6 lg:px-2 mr-5  flex items-center gap-1 lg:gap-2 ">
                      <img
                        src={addIcon}
                        alt=""
                        className="w-3 lg:w-4 hover:scale-125  cursor-pointer"
                        onClick={() => {
                          addFavorites(item.id);
                        }}
                      />
                      <img
                        src={
                          currentAudioId === item.id && isAudioPlaying
                            ? pauseIcon
                            : playIcon
                        }
                        alt=""
                        className="w-3 lg:w-4 hover:scale-125 cursor-pointer"
                        onClick={() => {
                          toggleAudio(item.id);
                        }}
                      />
                    </div>
                    <div className="border-l  px-2   w-full truncate ">
                      {item.artistName}
                    </div>
                    <div className="border-x px-2  w-full truncate  ">
                      {item.songName}
                    </div>
                    <div className="border-l  w-full px-2 hidden truncate lg:inline-block ">
                      {item.genre}
                    </div>
                    <div className="border-x  w-full  px-2 hidden  truncate lg:inline-block">
                      {item.id}
                    </div>
                    <div className="w-1/6 ml-2  lg:px-2 flex items-center  truncate justify-center">
                      <a
                        href={require(`../../music/${item.src}`)}
                        download={item.songName}
                      >
                        <img
                          src={downloadIcon}
                          alt="downloadIcon"
                          className="w-4 lg:w-6 "
                        />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex justify-center">
                {filteredMusic.length > visibleSongs ? (
                  <button
                    className="mt-5 py-2 px-4  border bg-gradient-to-r from-yellow-400 via-red-400 to-blue-400 rounded-lg text-white font-bold hover:bg-gradient-to-l hover:from-blue-500 hover:via-red-500 hover:to-yellow-500 transition duration-300 ease-in-out"
                    onClick={loadMore}
                  >
                    Load more
                  </button>
                ) : (
                  <p className="mt-5 text-center text-gray-600">
                    No more music for load
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
