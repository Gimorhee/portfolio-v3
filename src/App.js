import React, { useState } from "react";
import "./styles/App.scss";
import { Menu } from "./components/Menu";
import { Front } from "./components/Front";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Work } from "./components/Work";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { InfoSidebar } from "./components/Sidebar/InfoSidebar";
import { EmailSidebar } from "./components/Sidebar/EmailSidebar";

export const App = () => {
  const [showMobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="App">
      <div className={showMobileMenu ? "blurContents contents" : "contents"}>
        <Front />
        <About />
        <Experience />
        <Work />
        <Contact />
        <Footer />
      </div>
      <Menu showMobileMenu={showMobileMenu} setMobileMenu={setMobileMenu} />
      <InfoSidebar />
      <EmailSidebar />
    </div>
  );
};
