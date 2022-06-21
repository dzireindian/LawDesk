import {useState} from "react";
import Login from "../../Components/Login/Login";
import Signup from "../../Components/Signup/Signup";
function Home(){
    let [login,setLogin] = useState(true);
    return (<div className="container">
        <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
          <li className="nav-item" role="presentation">
            <a data-testid="signInTab" href="#" className={login?"nav-link active":"nav-link"} id="tab-login" onClick={() => {if(login===false){setLogin(true)}}}>Login</a>
          </li>
          <li className="nav-item" role="presentation">
            <a href="#" data-testid="signUpTab" className={login==false?"nav-link active":"nav-link"} id="tab-register" onClick={() => {if(login){setLogin(false)}}}>Register</a>
          </li>
        </ul>
        {login?<Login/>:<Signup/>}
        </div>);
}

export default Home;