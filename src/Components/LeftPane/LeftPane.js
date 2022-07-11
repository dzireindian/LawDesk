import {ActivateLeftTab} from "./LeftPaneAction";
import {Clients,Payments,Events,Cases,Organizations} from "../../Consts/Consts";

function LeftPane(props){
    return (<div id="leftPaneButtonGroup" className="btn-group-vertical">
    <button onClick={event => ActivateLeftTab(event.target)} id={Clients} type="button" className="btn btn-primary">Clients</button>
    <button onClick={event => ActivateLeftTab(event.target)} id={Payments} type="button" className="btn btn-outline-primary">Payments</button>
    <button onClick={event => ActivateLeftTab(event.target)} id={Cases} type="button" className="btn btn-outline-primary">Cases</button>
    <button onClick={event => ActivateLeftTab(event.target)} id={Organizations} type="button" className="btn btn-outline-primary">Organizations</button>
    <button onClick={event => ActivateLeftTab(event.target)} id={Events} type="button" className="btn btn-outline-primary">Events</button>
    </div>);
}

export default LeftPane;