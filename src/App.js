import "./App.css";






import Home from "./components/Home";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  return (
    <div className="">

      <BrowserRouter>
        <div className="relative">
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <div className="mt-96">
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;