import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Post from "../components/Post";
import Header from "../components/UI/Header";
import Footer from "../components/Footer";

function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_API}/posts`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
      });
  };

  return (
    <>
      <Header />
      <div
        style={{
          backgroundColor: "#F3F3F3",
          padding: 0,
          margin: 0,
        }}
      >
        <div
          style={{
            width: "65vw",
            margin: "auto",
            backgroundColor: "white",
            // border: "solid grey",
            // borderWidth: "0 1px",

            // display: "flex",
            // alignItems: "center",
            // borderLeft: "1px",
            // borderRight: "1px",
          }}
        >
          {posts.map((post, idx) => {
            return <Post key={idx} post={post} />;
          })}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default PostsPage;
