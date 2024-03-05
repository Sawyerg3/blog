import React, { useEffect } from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import axios from "axios";

function AddProjectModal({ show, close, addProject }) {
  const [project, setProject] = useState({
    title: "",
    description: "",
    url: "",
  });
  const [file, setFile] = useState();

  const handleChange = (e) => {
    setProject((prevProject) => {
      return {
        ...prevProject,
        [e.target.name]: e.target.value,
      };
    });
  };

  // const validFileTypes = ['image/jpg', 'image/jpeg', 'image/png']
  const handleUpload = async (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("title", project.title);
    formData.append("description", project.description);
    formData.append("url", project.url);
    formData.append("image", file);
    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };
    axios
      .post(`${process.env.REACT_APP_SERVER_API}/projects`, formData, config)
      .then((res) => {
        if (res.data.success) {
          // addProject(res.data.project);
          toast.success("Project added successfully!");
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
          <Modal.Title>New Project</Modal.Title>
          <Button
            variant="danger"
            onClick={() => {
              close();
            }}
          >
            Cancel
          </Button>
        </Modal.Header>
        <Modal.Body>
          <form action="">
            <label>Title:</label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              name="title"
              value={project.title}
              onChange={handleChange}
            />
            <label>Link:</label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              name="url"
              value={project.url}
              onChange={handleChange}
            />
            <label>Image:</label>
            <input
              //   className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="imageInput"
              type="file"
              name="file"
              accept=".jpeg, .png, .jpg"
              onChange={handleUpload}
            />
            <label className="font-semibold text-lg">Description</label>
            <div className="h-60">
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 min-h-full w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="description..."
                name="description"
                value={project.description}
                onChange={handleChange}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn" variant="success" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProjectModal;
