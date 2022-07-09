import {ActivateLeftTab} from "./LeftPaneAction";
import {Clients,Payments,Events,Cases,Organizations} from "../../Consts/Consts";

function LeftPane(props){
    return (<div id="leftPaneButtonGroup" className="btn-group-vertical">
    <button onClick={(event) => ActivateLeftTab(event)} id={Clients} type="button" className="btn btn-primary">Clients</button>
    <button onClick={(event) => ActivateLeftTab(event)} id={Payments} type="button" className="btn btn-outline-primary">Payments</button>
    <button onClick={(event) => ActivateLeftTab(event)} id={Cases} type="button" className="btn btn-outline-primary">Cases</button>
    <button onClick={(event) => ActivateLeftTab(event)} id={Organizations} type="button" className="btn btn-outline-primary">Organizations</button>
    <button onClick={(event) => ActivateLeftTab(event)} id={Events} type="button" className="btn btn-outline-primary">Events</button>
    </div>);
}

export default LeftPane;