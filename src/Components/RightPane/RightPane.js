import {RightPaneTabbedBody} from "./RightPaneTabbedBody/RightPaneTabbedBody";
import {RightPaneUntabbedBody} from "./RightPaneUntabbedBody/RightPaneUntabbedBody";
import {Clients,Payments,Events,Cases,Organizations} from "../../Consts/Consts";

function RightPane(props){
    switch(props.id){
        case Clients:
            return (<RightPaneTabbedBody key={Clients} id={Clients}/>);
        case Payments:
            return (<RightPaneTabbedBody key={Payments} id={Payments}/>);
        case Cases:
            return (<RightPaneUntabbedBody key={Cases} id={Cases} />);
        case Events:
            return (<RightPaneUntabbedBody key={Events} id={Events} />);
        case Organizations:
            return (<RightPaneUntabbedBody key={Organizations} id={Organizations} />);
    }
}

export default RightPane;