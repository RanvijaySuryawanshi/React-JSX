import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import FormPage from "./Pages/FormPage";
import User from "./Pages/User";
import Gallery from "./Pages/Gallery";

function App() {
  return (
    <BrowserRouter>

      <nav style={{ padding: "10px", background: "#222" }}>
        <Link to="/" style={{ color: "white", margin: "10px" }}>Home</Link>
        <Link to="/form" style={{ color: "white", margin: "10px" }}>Form</Link>
        <Link to="/gallery" style={{ color: "white", margin: "10px" }}>Gallery</Link>
        <Link to="/user/101" style={{ color: "white", margin: "10px" }}>User</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
