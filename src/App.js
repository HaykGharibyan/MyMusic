import React from "react";
import Header from "./features/header/Header";
import Main from "./features/main/Main";
import Aside from "./features/aside/Aside";
import Footer from "./features/footer/Footer";
import Cucak from "./features/main/Cucak";

function App() {
  return (
    <div className="bg-neutral-700">
      <Header />
      <div className="flex container mx-auto  h-auto">
        <Main />
        <Aside />
      </div>
      <Footer />
    </div>
  );
}

export default App;
