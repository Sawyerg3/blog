import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AdminLogin from "./pages/AdminLogin";
import Posts from "./pages/admin/Posts";
import PrivateAdminRoute from "./PrivateAdminRoute";
import Reviews from "./pages/admin/Reviews";
import PostsPage from "./pages/PostsPage";
import ReviewsPage from "./pages/ReviewsPage";
import AboutPage from "./pages/AboutPage";
import { ThemeProvider } from "@material-tailwind/react";

function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        {/* <Navbar /> */}
        <div>
          <Routes>
            <Route path="/" element={<PostsPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route element={<PrivateAdminRoute />}>
              <Route path="/admin/posts" element={<Posts />} />
              <Route path="/admin/reviews" element={<Reviews />} />
            </Route>

            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
