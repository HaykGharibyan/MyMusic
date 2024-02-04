import React from "react";

const Footer = () => (
  <footer className="bg-neutral-700">
    <div
      className={`container mx-auto text-neutral-300 ${
        window.innerWidth <= 640 ? "px-10" : ""
      }`}
    >
      <div className="flex justify-between">
        <div className="w-1/2">
          <p className="text-5xl py-2 text-neutral-100 font-bold  ">My Music</p>
          <p className=" text-xl font-mono">
            your assistant in the world of music
          </p>
        </div>

        <div className=" mt-2 font-mono">
          <p className="text-xl ">
            <strong>Contacts</strong>
          </p>
          <ul className="">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contacts</a>
            </li>
            <li>
              <a href="">Adress</a>
            </li>
          </ul>
        </div>

        <div className="mt-2 font-mono">
          <p className="text-xl">
            <strong>Links</strong>
          </p>
          <ul className="">
            <li>
              <a href="#!">Instagaram</a>
            </li>
            <li>
              <a href="#!">Facebook</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="text-center text-neutral-500 pb-3">
      © 2023 Copyright: <a href="#">MyMusic.com</a>
    </div>
  </footer>
);

export default Footer;
