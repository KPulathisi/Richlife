import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Collections from "./pages/Collections"
import VisitUs from "./pages/VisitUs"
import Team from "./pages/Team"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/visit-us" element={<VisitUs />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
