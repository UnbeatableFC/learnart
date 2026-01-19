import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddPage from "./pages/AddPage";
import ListPage from "./pages/ListPage";
import BookingsPage from "./pages/BookingsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addcourse" element={<AddPage />} />
      <Route path="/listcourse" element={<ListPage />} />
      <Route path="/bookings" element={<BookingsPage />} />
    </Routes>
  );
}

export default App;
