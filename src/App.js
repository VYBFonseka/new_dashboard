import "./app.css"
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Analytics from "./pages/Analytics/Analytics";
import DataTables from "./pages/DataTables/DataTables";
import LogIn from "./pages/LogIn/LogIn";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route exact path="/dashboard" element={<Home/>}/>
          <Route path="/dataTables" element={<DataTables/>}/>
          <Route path="/analytics" element={<Analytics/>}/>
          
        </Routes>
      </div>
      <Routes>
      <Route path='/logIn' element = {<LogIn/>}/>
      </Routes>
      </Router>
  
  );
}

export default App;
