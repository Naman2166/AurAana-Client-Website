import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Location from "./pages/Location";

export default function App() {
  return (
    <Router>
      {/* Main container with hidden scrollbar */}
      <div className="min-h-screen flex flex-col bg-[#f88c1f] [scrollbar-width:none] [-ms-overflow-style:none]">
        <Header />
        
        {/* Scrollable content area */}
        <main className="flex-grow overflow-y-auto [&::-webkit-scrollbar]:hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/:category" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/location" element={<Location />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}
