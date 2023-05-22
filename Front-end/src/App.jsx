
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Sidebar from "./Layout/Sidebar";

export default function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Navbar" element={<Sidebar />} />
        </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
