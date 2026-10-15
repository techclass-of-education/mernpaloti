import { Navbar } from "./layout/Navbar.jsx";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Login } from "./pages/Login.jsx";
import { IncidentList } from "./pages/IncidentsList.jsx";
import { AddIncident } from "./pages/AddIncident.jsx";
import { IncidentDetails } from "./pages/IncidentDetails.jsx";
import { Register } from "./pages/Register.jsx";
import { Profile } from "./pages/Profile.jsx";
import { ChangePassword } from "./pages/ChangePassword.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Login/>}/>
                  <Route path="/list" element={<IncidentList/>}/>
                  <Route path="/add" element={<AddIncident/>}/>
                  <Route path="/details" element={<IncidentDetails/>}/>
                  <Route path="/register" element={<Register/>}/>
                  <Route path="/profile" element={<Profile/>}/>
                  <Route path="/change" element={<ChangePassword/>}/>
              </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
