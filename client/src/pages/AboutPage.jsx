import React from "react";
import Header from "../components/UI/Header";
import Footer from "../components/Footer";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import photo from "../assets/stockPhoto.jpg";

function AboutPage() {
  return (
    <div
      style={{
        backgroundColor: "#F3F3F3",
      }}
    >
      <Header />
      <div
        style={{
          margin: "auto",
          width: "65vw",
          height: "100vh",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            padding: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              margin: "auto",
            }}
          >
            Contact
          </h2>
        </div>
        <hr style={{ color: "black", marginLeft: "20%", marginRight: "20%" }} />
        <div
          style={{
            padding: "5%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h6>sawyergitzel@gmail.com</h6>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <a href={"https://github.com/Sawyerg3"}>
              <GitHubIcon style={{ fontsize: "large", marginTop: "12px" }} />
            </a>
            <a href={"https://www.linkedin.com/in/sawyergitzel/"}>
              <LinkedInIcon style={{ fontsize: "large", marginTop: "12px" }} />
            </a>
          </div>
          <img
            style={{
              width: "400px",
              height: "450px",
            }}
            src={photo}
            alt="stock avatar"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
