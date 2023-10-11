import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Header from "./components/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutus from "./components/Aboutus";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Pubrica-Project" element={<Home />}></Route>
          <Route path="/about" element={<Aboutus />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
