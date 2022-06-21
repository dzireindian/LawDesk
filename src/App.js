import 'bootstrap/dist/css/bootstrap.min.css';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

import {Routes,Navigate,BrowserRouter,Route} from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import LoaderEffect from './utils/Loader/LoaderEffect';

function App() {
  return (
    <div className="App">
    <div id="modalMessages" className="modal-fade modal-dialog modal-dialog-centered" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">

    </div>
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={localStorage.getItem("token")?(<Navigate to="/Dashboard" replace={true} />):<LoaderEffect><Home/></LoaderEffect>}/>
        <Route exact path="/DashBoard" element={localStorage.getItem("token")?<LoaderEffect><Dashboard/></LoaderEffect> : (<Navigate to="/" replace={true} />)}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
