import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav"
import List from "./List"
import About from "./About"
import Contact from "./Contact"
/* eslint-disable jsx-a11y/anchor-is-valid */

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
          <Route path="/" element={<List />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
