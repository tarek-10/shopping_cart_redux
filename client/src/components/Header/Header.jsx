import React from "react";
import { words } from "../../words";
import "./Header.css";
function Header() {
  return (
    <>
      <div className="header">{words.headerContent}</div>
    </>
  );
}

export default Header;
