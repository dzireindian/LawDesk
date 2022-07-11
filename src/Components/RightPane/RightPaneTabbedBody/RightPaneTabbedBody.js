
import {TabBodyType} from './RightPaneTabbedBodyAction';



export function RightPaneTabbedBody(props){
    var [Tab,TabBody] = TabBodyType(props.id);
    return (
        <div className="card text-center">
    <div className="card-header">
      <ul id="RightPaneTabs" className="nav nav-tabs card-header-tabs">
        {Tab}
      </ul>
    </div>
    <div id="RightPaneTabBody" className="card-body">
      {TabBody}
    </div>
  </div>
      );
}