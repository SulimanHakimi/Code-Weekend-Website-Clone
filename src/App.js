import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/pages/about";
import Home from "./components/pages/home";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
