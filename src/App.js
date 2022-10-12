import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Services from "./components/Pages/Services/Services";
import Blog from "./components/Pages/Blog/Blog";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";
import Register from "./components/Pages/Register/Register";
import Login from "./components/Pages/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Student from "./components/Pages/Register/Student";
import Company from "./components/Pages/Register/Company";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/student" element={<Student />} />
          <Route path="/company" element={<Company />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
