import React from "react";
import { useEffect, useState } from "react";
import AdminNav from "../../components/UI/admin/AdminNav";
import "../../styles/adminStyles.css";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import AddPostModal from "../../components/modals/AddPostModal";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [showAddModal, setAddModal] = useState(false);
  // const [currentPost, setCurrentPost] = useState({});

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

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  const deletePost = (post) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .delete(`${process.env.REACT_APP_SERVER_API}/posts/${post._id}`, config)
      .then((res) => {
        if (res.data.success) {
          setPosts(posts.filter((p) => p !== post));
          toast.success(`${post.title} Removed`);
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
      });
  };

  return (
    <div className="">
      <div>
        <AdminNav />
      </div>

      <div className=" px-20 place-content-center ">
        <div className="flex mt-1 p-3 justify-center rounded-3xl border bg-lightgrey text-grey">
          <div className="font-semibold mx-auto my-auto">
            <span>Title</span>
          </div>
          <div className="font-semibold mx-auto ">
            <Button
              variant="success"
              onClick={() => {
                setAddModal(true);
              }}
            >
              New
            </Button>
          </div>
        </div>
      </div>

      <div>
        {posts.length > 0 ? (
          <>
            <div>
              {posts.map((post, i) => {
                return (
                  <div
                    className={`flex mt-1 p-3 items-center rounded-3xl border  ${
                      i % 2 === 1 ? "bg-lightblue2" : ""
                    }`}
                    key={post._id}
                  >
                    <div
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width: "240px",
                      }}
                    >
                      <span>{post.title}</span>
                    </div>
                    {/* <div className="align-center text-end ml-auto mr-10 ">
                      <Button variant="danger">Delete</Button>
                    </div> */}
                    <Button
                      variant="danger"
                      onClick={() => {
                        deletePost(post);
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div>{/* <Loader /> */}</div>
        )}
      </div>

      <AddPostModal
        show={showAddModal}
        close={() => setAddModal(false)}
        addPost={addPost}
      />
    </div>
  );
}

export default Posts;
