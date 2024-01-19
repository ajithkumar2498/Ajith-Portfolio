import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects"
import { useState } from "react";
function App() {
  const [theme,setTheme]=useState("dark")
  return (
    <>
      <div className="container">
      <Navbar theme={theme} setTheme={setTheme}/>
      <Intro theme={theme} setTheme={setTheme}/>
      <About theme={theme} setTheme={setTheme}/>
      <Projects theme={theme} setTheme={setTheme}/>
      <Skills theme={theme} setTheme={setTheme}/>
      </div>
    </>
  );
}

export default App;
