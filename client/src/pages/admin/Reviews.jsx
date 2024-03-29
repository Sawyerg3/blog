import React, { useState, useEffect } from "react";
import AdminNav from "../../components/UI/admin/AdminNav";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import AddReviewModal from "../../components/modals/AddReviewModal";

function Reviews() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews();
  }, []);

  const getReviews = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_API}/reviews`)
      .then((res) => {
        setReviews(res.data);
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
      });
  };

  const addReview = (newReview) => {
    setReviews([newReview, ...reviews]);
  };

  const deleteReview = (review) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .delete(
        `${process.env.REACT_APP_SERVER_API}/reviews/${review._id}`,
        config
      )
      .then((res) => {
        if (res.data.success) {
          setReviews(reviews.filter((p) => p !== review));
          toast.success(`${review.bookTitle} Removed`);
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
    <div>
      <AdminNav />
      <div className="font-semibold mx-auto ">
        <Button
          variant="success"
          onClick={() => {
            setShowAddModal(true);
          }}
        >
          New
        </Button>
      </div>

      <div>
        {reviews.length > 0 ? (
          <>
            <div>
              {reviews.map((review, i) => {
                return (
                  <div
                    className={`flex mt-1 p-3 items-center rounded-3xl border  ${
                      i % 2 === 1 ? "bg-lightblue2" : ""
                    }`}
                    key={review._id}
                  >
                    <div
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width: "240px",
                      }}
                    >
                      <span>{review.bookTitle}</span>
                    </div>
                    <Button
                      variant="danger"
                      onClick={() => {
                        deleteReview(review);
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

      <AddReviewModal
        show={showAddModal}
        close={() => setShowAddModal(false)}
        addReview={addReview}
      />
    </div>
  );
}

export default Reviews;
