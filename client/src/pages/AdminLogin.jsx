import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import axios from "axios";
import { toast } from "react-toastify";

function AdminLogin() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      login();
    }
  };

  const login = () => {
    axios
      .post(`${process.env.REACT_APP_SERVER_API}/admin/login`, {
        userName: "SA",
        password: password,
      })
      .then((res) => {
        if (res.data.success) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("type", "admin");
          toast.success("Login Successful");
          navigate("/admin/posts");
        } else {
          console.log(res.data.message);
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        console.log("No Login");
      });
  };

  return (
    <section onKeyDown={handleKeyDown}>
      <div>
        <p>...</p>
        <input
          type="password"
          autoComplete="new-password"
          className="text-line"
          onChange={handleChange}
        />
      </div>
    </section>
  );
}

export default AdminLogin;
