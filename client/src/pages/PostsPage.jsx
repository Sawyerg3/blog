import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Post from "../components/Post";
import Header from "../components/UI/Header";

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
    <div>
      <Header />
      {posts.map((post, idx) => {
        return <Post key={idx} title={post.title} content={post.content} />;
      })}
      asdasd
      <div></div>
    </div>
  );
}

export default PostsPage;
