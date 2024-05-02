import React from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Projects from "../components/Projects/Projects";

const MainPage = () => {
    return (
      <div className="container">
        <Projects/>
        <About/>
        <Contact/>
      </div>
    );
  };

  export default MainPage;