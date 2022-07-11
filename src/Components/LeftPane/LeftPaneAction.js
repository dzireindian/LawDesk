import $ from "jquery";
import {ReactDOM} from "react";
import RightPane from "../RightPane/RightPane";

export function ActivateLeftTab(event){
    $('#leftPaneButtonGroup').children('button').each(function(){
        var elementID = $(this).attr('id');
        console.log("elementID for button =",elementID,"event id = ",event.id );
        if(event.id === elementID){
            console.log("set class for left tab");
            $(this).attr("class", "btn btn-primary");
        }else{
            $(this).attr("class","btn btn-outline-primary");
        }
    });

    var RightDomElement = document.getElementById("RightPane");
    ReactDOM.render(<RightPane id={event.id} />, RightDomElement);

}