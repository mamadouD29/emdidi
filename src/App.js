import NavBar from "./components/partials/NavBar";
import Home from "./components/views/Home"
import About from "./components/views/About"
import Portfolio from "./components/views/Portfolio"
import Contact from "./components/views/Contact"
import NotFound from "./components/views/NotFound";
import {Routes, Route} from "react-router-dom"

import Footer from "./components/partials/Footer"

function App() {
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <Routes>
          <Route path ="/" element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
