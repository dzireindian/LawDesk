import {RightPaneTabbedBody} from "./RightPaneTabbedBody/RightPaneTabbedBody";
import {RightPaneUntabbedBody} from "./RightPaneUntabbedBody/RightPaneUntabbedBody";
import {TransactionTabs, ClientsTabs} from "../../Consts/RightPaneTabData/RightTabs";
import {Clients,Payments,Events,Cases,Organizations} from "../../Consts/Consts";

function RightPane(props){
    switch(props.id){
        case Clients:
            return (<RightPaneTabbedBody tabs={ClientsTabs} id={props.id}/>);
        case Payments:
            return (<RightPaneTabbedBody tabs={TransactionTabs} id={props.id}/>);
        case Cases:
            return (<RightPaneUntabbedBody id={props.id} />);
        case Events:
            return (<RightPaneUntabbedBody id={props.id} />);
        case Organizations:
            return (<RightPaneUntabbedBody id={props.id} />);
    }
}

export default RightPane;