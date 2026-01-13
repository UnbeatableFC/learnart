import React, { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FacultyPage from "./pages/FacultyPage";
import CoursePage from "./pages/CoursePage";
import { ArrowUp } from "lucide-react";
import CourseDetailPageHome from "./pages/CourseDetailPageHome";
import CourseDetailPage from "./pages/CourseDetailPage";

// To protect Route
const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return Boolean(token);
  };
  if (!isAuthenticated()) {
    return <Navigate to={"/"} state={{ from: location }} replace />;
  }
  return children;
};

const ScrollToTopOnRouteChange = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location]);
};

const ScrollToTopButton = ({
  threshold = 200,
  showOnMount = false,
}) => {
  const [visible, setVisible] = useState(!!showOnMount);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > threshold);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={
        "fixed right-6 bottom-6 z-50 p-2 rounded-full focus:outline-none focus:ring-sky-300" +
        "backdrop-blur-sm border-white/20 shadow-lg cursor-pointer transition-transform"
      }
    >
      <ArrowUp className="size-6 text-sky-600 drop-shadow-sm" />
    </button>
  );
};

const App = () => {
  return (
    <>
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/courses" element={<CoursePage />} />

        <Route
          path="/course/:id"
          element={
            <ProtectedRoute>
              <CourseDetailPageHome />
            </ProtectedRoute>
          }
        />
        <Route
          path="/courses/:id"
          element={
            <ProtectedRoute>
              <CourseDetailPage />
            </ProtectedRoute>
          }
        />
      </Routes>
      <ScrollToTopButton threshold={250} />
    </>
  );
};

export default App;
