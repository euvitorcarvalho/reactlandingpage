import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import MainSection from "./components/MainSection.jsx";

function App() {
  return (
    <div className='bg-[#2B2B2B] flex flex-col w-screen h-screen font-["Poppins", sans-serif]'>
      <Navbar />
      <MainSection />
    </div>
  );
}

export default App;
