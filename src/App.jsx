import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import MainSection from "./components/MainSection.jsx";
import Logos from "./components/Logos.jsx";

function App() {
  return (
    <div className='bg-[#2B2B2B] flex flex-col items-center w-full h-full font-["Poppins", sans-serif]'>
      <Navbar />
      <MainSection />
      <Logos />
    </div>
  );
}

export default App;
