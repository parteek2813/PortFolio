import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Tech from "./components/Tech/Tech";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Projects />
      <Tech />
      <About />
      <Footer />
    </>
  );
}

export default App;
