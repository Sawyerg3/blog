import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AdminLogin from "./pages/AdminLogin";
import Posts from "./pages/admin/Posts";
import PrivateAdminRoute from "./PrivateAdminRoute";

function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        {/* <Navbar /> */}
        <div>
          <Routes>
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route element={<PrivateAdminRoute />}>
              <Route path="/admin/posts" element={<Posts />} />
              {/* <Route path="/admin/reviews" element={<Majors />} /> */}
            </Route>

            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
