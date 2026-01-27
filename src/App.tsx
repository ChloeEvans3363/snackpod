import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import Record from "./pages/Record";
import Saved from "./pages/Saved";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login></Login>} />
        <Route path="/feed" element={<Feed></Feed>} />
        <Route path="/record" element={<Record></Record>} />
        <Route path="/saved" element={<Saved></Saved>} />
      </Routes>
    </Router>
  );
}

export default App;
