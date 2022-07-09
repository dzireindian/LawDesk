
import NavTabs from "../../../Micros/NavTabs/NavTabs";



export function RightPaneTabbedBody(props){
    return (
        <div className="card text-center">
    <div className="card-header">
      <ul className="nav nav-tabs card-header-tabs">
        {props.tabs.map((tab) =><NavTabs Title={tab}/>)}
      </ul>
    </div>
    <div id="RightPaneTabBody" className="card-body">
      
    </div>
  </div>
      );
}