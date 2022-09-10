import { BrowserRouter } from "react-router-dom";
import Navbar from "./component/Navbar";
import Router from "./Router";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Router />
      </BrowserRouter>
    </div>
  );
};

export default App;
