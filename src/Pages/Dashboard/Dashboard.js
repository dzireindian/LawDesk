import {useSelector,useDispatch} from "react-redux";
import {Authenticate} from "../../utils/Authenticate/Authenticate";
import { Clients} from "../../Consts/Consts";
import LeftPane from "../../Components/LeftPane/LeftPane";
import RightPane from "../../Components/RightPane/RightPane";

function Dashboard(){
    let Authenticated = useSelector(state => state.AuthenticateReducer.Authenticated);
    let dispatch = useDispatch();
    
    if(Authenticated === false){
        dispatch(Authenticate());
    }

    return (<div className="container">
    <div className="col-sm-4">
    {<LeftPane/>}
    </div>
    <div id="RightPane" className="col">
    {<RightPane id={Clients}/>}
    </div>
    </div>);
}

export default Dashboard;