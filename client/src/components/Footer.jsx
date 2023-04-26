import React from "react";

function Footer() {
  return (
    <footer
      style={{
        width: "65vw",
        margin: "auto",
        backgroundColor: "white",
        marginTop: "10px",
        textAlign: "center",
        // display: "flex",
        // justifyContent: "space-between",
        padding: "10px",
      }}
    >
      <h6 style={{ color: "grey" }}>
        {" "}
        &copy; {new Date().getFullYear()} | Sawyer Gitzel
      </h6>
      {/* <div>links</div> */}
    </footer>
  );
}

export default Footer;
