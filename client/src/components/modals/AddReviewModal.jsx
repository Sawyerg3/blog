import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import axios from "axios";

function AddReviewModal({ show, close, addReview }) {
  const [review, setReview] = useState({
    bookTitle: "",
    bookAuthor: "",
    rating: 0,
    content: "",
  });

  const handleChange = (e) => {
    setReview((prevReview) => {
      if (e.target.name === "rating") {
        return { ...prevReview, [e.target.name]: Number(e.target.value) };
      }
      return { ...prevReview, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .post(
        `${process.env.REACT_APP_SERVER_API}/reviews`,
        {
          review,
        },
        config
      )
      .then((res) => {
        if (res.data.success) {
          addReview(res.data.review);
          toast.success("Review added successfully!");
        } else {
          toast.error("Error: " + res.data.message);
        }
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
      });
    close();
  };

  return (
    <>
      <Modal show={show} size="lg" scrollable={true}>
        <Modal.Header>
          Add Review
          <Button variant="danger" onClick={close}>
            cancel
          </Button>
        </Modal.Header>
        <Modal.Body>
          <form action="">
            <label>Title:</label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              name="bookTitle"
              value={review.bookTitle}
              onChange={handleChange}
            />
            <label>Author:</label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              name="bookAuthor"
              value={review.BookAuthor}
              onChange={handleChange}
            />
            <label>rating:</label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="number"
              name="rating"
              value={review.rating}
              onChange={handleChange}
            />
            <label className="font-semibold text-lg">Content</label>
            <div className="h-60">
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 min-h-full w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="content..."
                name="content"
                value={review.content}
                onChange={handleChange}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="" variant="success" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddReviewModal;
