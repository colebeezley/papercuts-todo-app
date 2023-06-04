import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav"
import List from "./List"
import About from "./About"
import TimeTracker from "./TimeTracker"

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
          <Route path="/" element={<List />} />
          <Route path="/timetracker" element={<TimeTracker />} />
          <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
