import React from "react";
import "../../styles/header.css";
import background from "../../assets/TestBackground.jpg";
function Header() {
  return (
    <div style={{ backgroundImage: `url(${background})`, height: "100vh" }}>
      <h1>Website Name</h1>
    </div>
  );
}

export default Header;
