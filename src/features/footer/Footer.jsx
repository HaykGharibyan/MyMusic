import React from "react";

const Footer = () => (
  <footer className="bg-neutral-700">
    <div className=" container mx-auto text-neutral-300">
      <div className="m-5 flex justify-between">
        <div className="w-1/2">
          <p className="text-2xl lg:text-5xl py-2 text-neutral-100 font-bold  ">
            My Music
          </p>
          <p className=" text-lg lg:text-xl font-mono">
            your assistant in the world of music
          </p>
        </div>

        <div className=" mt-2 ">
          <p className="text-lg lg:text-xl font-bold ">
            <strong>Contacts</strong>
          </p>
          <ul className="font-mono ">
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

        <div className="mt-2 ">
          <p className="text-lg lg:text-xl font-bold">
            <strong>Links</strong>
          </p>
          <ul className=" font-mono">
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
