import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainHome from "./components/MainHome";
import Main from "./components/Main";
import { Col, Row } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />

        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
