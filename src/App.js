import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/home/home";
import Read from "../src/component/read/read"
import "./App.css";
import { ContextProvider } from "./component/context/useContext";
import Create from "./component/create/create";
import Delete from "./component/delete/delete";
import Edit from "./component/edit/edit";
function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/read/:id" element={<Read />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/delete/:id" element={<Delete />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
