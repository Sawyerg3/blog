import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Footer from "../components/Footer";
import Review from "../components/Review";
import Header from "../components/UI/Header";

function ReviewsPage() {
  const [reviews, setReviews] = useState([]);

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

  useEffect(() => {
    getReviews();
  }, []);

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
          backgroundColor: "white",
          paddingTop: "40px",
        }}
      >
        {reviews.map((review, idx) => {
          return (
            <>
              {idx > 0 && (
                <hr
                  style={{
                    color: "black",
                    marginLeft: "20%",
                    marginRight: "20%",
                    marginBottom: "5%",
                  }}
                />
              )}
              <Review key={idx} review={review} />
            </>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default ReviewsPage;
