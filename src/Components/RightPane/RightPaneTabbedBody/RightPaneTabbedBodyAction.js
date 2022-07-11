import {TransactionTabs, ClientsTabs} from "../../../Consts/RightPaneTabData/RightTabs";
import {Clients,ClientSearch} from "../../../Consts/Consts";
import ClientSearchBody from "../../ClientSearchBody/ClientSearchBody";
import {ReactDOM} from "react";
import $ from "jquery";

function RightPaneTabBody(props){
    switch(props.id){
        case ClientSearch:
            return (<ClientSearchBody key={ClientSearch} id={ClientSearch}/>);
    }
}

function NavTabHighlighter(event){
    $('a[class*="nav-link"]').each(function(tab){
            var elementID = $(this).attr('id');
            if(event.id === elementID){
                $(this).attr("class", "nav-link active");
            }else{
                $(this).attr("class","nav-link");
            }
    });
    var RightPaneTabBodyDOM = document.getElementById('RightPaneTabBody');
    ReactDOM.render(<RightPaneTabBody id={event.id} />, RightPaneTabBodyDOM);
}

function NavTabs(props){
    console.log("navtabs props",props);
    var RightPaneTabBody = props.RightPaneTabBody;
    return (
        <li className="nav-item">
        <a id={props.id} className={(props.index===0)?"nav-link active":"nav-link"} onClick={(event) => NavTabHighlighter(event.target)}>{props.Title}</a>
      </li>
    );
}

function ClientTabParser(){
    var TabBody;
    console.log("client tabs = ", ClientsTabs)
    var Tabs =  ClientsTabs.map((tab,ind) => {
        console.log("tab data = ", tab)
        if(ind == 0){
            TabBody = (<RightPaneTabBody id={tab.id}/>);
        }
        return <NavTabs key={tab.id} id={tab.id} index={ind} RightPaneTabBody={(<RightPaneTabBody id={tab.id}/>)} Title={tab.tab}/>;
    });

    return [Tabs,TabBody];
}

export var TabBodyType = (id) => {
    switch(id){
        case Clients:
            return ClientTabParser();
    }
}