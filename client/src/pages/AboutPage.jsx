import React from "react";
import Header from "../components/UI/Header";
import Footer from "../components/Footer";

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
            About
          </h2>
        </div>
        <hr style={{ color: "black", marginLeft: "20%", marginRight: "20%" }} />
        <div style={{ padding: "5%" }}>
          <p>
            Hello, my name is Sawyer and I am currently a computer science
            student. You can find more of me
          </p>
          <a href="https://sawyergitzel.com/">here</a>
          <p>I created this site for four main reasons:</p>
          <ol style={{ listStyleType: "circle" }}>
            <li>To catalog, rate and vent about the books I read</li>
            <li>To improve with React and CSS</li>
            <li>To expand my knowledge</li>
            <li>To become a more competent writer</li>
          </ol>
          <p>
            The following are some improvements I hope to add to this site as I
            continue to improve it:
          </p>
          <ol style={{ listStyleType: "circle" }}>
            <li>A subscription option</li>
            <li>A search option {"(search post/book title)"}</li>
            <li>Improve design </li>
            <li>Add comments and likes/dislikes to posts and reviews</li>
            <li>Improve admin pages</li>
          </ol>
          <p>you can view the repo for the site here </p>
          <a href="https://github.com/Sawyerg3/blog">here</a>

          <p> Thanks for stopping by! {":)"}</p>
          <hr
            style={{
              color: "black",
              marginLeft: "20%",
              marginRight: "20%",
              marginTop: "100px",
            }}
          />
          <div
            style={{
              padding: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h3
              style={{
                marginLeft: "auto",
              }}
            >
              Contact:
            </h3>
            <p
              style={{
                marginBottom: "auto",
                marginTop: "auto",
                marginRight: "auto",
                paddingLeft: "30px",
              }}
            >
              sawyergitzel@gmail.com
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutPage;
