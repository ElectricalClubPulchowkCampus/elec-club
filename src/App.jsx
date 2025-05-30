import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Committe from "./pages/Committee";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/committee" element={<Committe />} />
    </Routes>
  );
}

export default App;
