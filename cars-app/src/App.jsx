// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css'
import Dashboard from "./pages/Dashboard/Dashboard";
import Booking from "./pages/Booking/Booking";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
          <Route path="/" exact element={<Dashboard/>}/>
          <Route path="/booking" element={<Booking/>}/>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
