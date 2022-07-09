import $ from "jquery";
import {ReactDOM} from "react";
import RightPane from "../RightPane/RightPane";

export function ActivateLeftTab(event){
    $('#leftPaneButtonGroup').children('button').each(function(){
        var elementID = $(this).attr('id');
        if(event.id == elementID){
            $(this).attr("class", "btn btn-primary")
        }
        $(this).attr("btn btn-outline-primary");
    });

    var RightDomElement = document.getElementById("RightPane");
    ReactDOM.render(<RightPane id={event.id} />, RightDomElement);

}