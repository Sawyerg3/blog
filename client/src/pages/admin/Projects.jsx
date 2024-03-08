import React from "react";
import { useEffect, useState } from "react";
import AdminNav from "../../components/UI/admin/AdminNav";
import "../../styles/adminStyles.css";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";

import AddProjectModal from "../../components/modals/AddProjectModal";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [showAddModal, setAddModal] = useState(false);
  // const [currentProject, setCurrentProject] = useState({});

  useEffect(() => {
    getProjects();
  }, []);

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

  const addProject = (project) => {
    setProjects([project, ...projects]);
  };

  const deleteProject = (project) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .delete(
        `${process.env.REACT_APP_SERVER_API}/projects/${project._id}`,
        config
      )
      .then((res) => {
        if (res.data.success) {
          setProjects(projects.filter((p) => p !== project));
          toast.success(`${project.title} Removed`);
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
        {projects.length > 0 ? (
          <>
            <div>
              {projects.map((project, i) => {
                return (
                  <div
                    className={`flex mt-1 p-3 items-center rounded-3xl border  ${
                      i % 2 === 1 ? "bg-lightblue2" : ""
                    }`}
                    key={project._id}
                  >
                    <div
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width: "240px",
                      }}
                    >
                      <span>{project.title}</span>
                    </div>
                    <Button
                      variant="danger"
                      onClick={() => {
                        deleteProject(project);
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

      <AddProjectModal
        show={showAddModal}
        close={() => setAddModal(false)}
        addProject={addProject}
      />
    </div>
  );
}

export default Projects;
