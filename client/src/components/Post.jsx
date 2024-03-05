import React from "react";
import "../styles/post.css";
import moment from "moment";

function Post({ post }) {
  return (
    <div className="post-container">
      <div className="post-header">
        <h1>{post.title}</h1>
        <h6>{moment(post.createdAt).format("DD-MM-YYYY")}</h6>
      </div>
      <div className="post-body">
        <p>{post.content}</p>
      </div>
      <div className="post-footer"></div>
    </div>
  );
}

export default Post;
