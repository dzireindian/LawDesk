import {useSelector,useDispatch} from "react-redux";
import {Authenticate} from "../../utils/Authenticate/Authenticate";
import LeftPane from "../../Components/LeftPane/LeftPane";
import RightPane from "../../Components/RightPane/RightPane";

function Dashboard(){
    let Authenticated = useSelector(state => state.AuthenticateReducer.Authenticated);
    let RightPaneState = useSelector(state => state.RightPaneState);
    let dispatch = useDispatch();
    
    if(Authenticated === false){
        dispatch(Authenticate());
    }

    return (<div className="container">
    <div className="col-sm-4">
    <LeftPane/>
    </div>
    <div id="RightPane" className="col">
    <RightPane tabs={RightPaneState.tabs} />
    </div>
    </div>);
}

export default Dashboard;