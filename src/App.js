import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Activity from "./Pages/Activity/Activity";
import Gallery from "./Pages/Gallery/Gallery";
import Video from "./Pages/Video/Video";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Header from "./Components/Header/Header";
import { CssBaseline } from "@mui/material";
import Footer from "./Components/Footer/Footer";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <div>
      <CssBaseline />
      <ParallaxProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/video" element={<Video />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      </ParallaxProvider>
    </div>
  );
}

export default App;
