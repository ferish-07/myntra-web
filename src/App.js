import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./screens/components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import NewRoutes from "./screens/NewRoutes";
import PracticeRoutes from "./screens/Practice/PracticeRoutes";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        {/* <NewRoutes /> */}
        <PracticeRoutes />
      </Router>
    </div>
  );
}

export default App;
