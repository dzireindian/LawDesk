import {ReactDOM} from "react";
import db from "../../utils/ClientDB/ClientDB";

async function NavTabs(props){
    var RightPaneTabBodyDOM = document.getElementById('RightPaneTabBody');
    var State;
    await db.get(props.id).then((doc)=>{
        State = doc;
    })
    return (
        <li className="nav-item">
        <a className="nav-link" onClick={() => {ReactDOM.render(<props.RightPaneTabBody id={props.id} State={State} />, RightPaneTabBodyDOM)}}>props.Title</a>
      </li>
    );
}

export default NavTabs;