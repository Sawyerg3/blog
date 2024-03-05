import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Footer from "../components/Footer";
import Project from "../components/Project";
import Header from "../components/UI/Header";

function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  const getProjects = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_API}/projects`)
      .then((res) => {
        setProjects(res.data);
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
      });
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#F3F3F3",
      }}
    >
      <Header />
      {projects.length === 0 ? (
        <div>
          <h2>Nothing here for now</h2>
        </div>
      ) : (
        <div
          style={{
            margin: "auto",
            width: "65vw",
            backgroundColor: "white",
            paddingTop: "40px",
          }}
        >
          {projects.map((project, idx) => {
            return (
              <div>
                {idx > 0 && (
                  <hr
                    style={{
                      color: "black",
                      marginLeft: "20%",
                      marginRight: "20%",
                    }}
                  />
                )}
                <Project key={idx} project={project} />
              </div>
            );
          })}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default ProjectsPage;
