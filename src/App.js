import React, { useState } from "react";
import "./styles/App.scss";
import { Menu } from "./components/Menu";
import { Front } from "./components/Front";
import { About } from "./components/About";
import { InfoSidebar } from "./components/Sidebar/InfoSidebar";
import { EmailSidebar } from "./components/Sidebar/EmailSidebar";

export const App = () => {
  const [showMobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="App">
      <div className={showMobileMenu ? "blurContents contents" : "contents"}>
        <Front />
        <About />
      </div>
      <Menu showMobileMenu={showMobileMenu} setMobileMenu={setMobileMenu} />
      <InfoSidebar />
      <EmailSidebar />
    </div>
  );
};
