import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function AdminLogin() {
  const navigate = useNavigate();
  // const [inputFocus, updateFocus] = useState(false);
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("do validate: " + password);
      navigate("/admin/posts");
    }
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
