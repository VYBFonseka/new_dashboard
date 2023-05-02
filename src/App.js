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
          <Route exact path="/" element={<Home/>}/>
          <Route path="/dataTables" element={<DataTables/>}/>
          <Route path="/analytics" element={<Analytics/>}/>
          <Route path="/logIn" element={<LogIn/>}/>
        </Routes>
      
         
      </div>
      </Router>
  
  );
}

export default App;
