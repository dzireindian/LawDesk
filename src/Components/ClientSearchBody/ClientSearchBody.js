import { ClientDB } from "../../utils/ClientDB/ClientDB";

function ClientSearchBody(props){
    var State;
    try
    {
        console.log("ClientSearchBody props = ", props);
        var id = props.id;
        console.log("ClientSearch id = ", id);
        var db = ClientDB();
        db.get(id).then((doc)=>{
            console.log("db value = ",doc);
            State = doc;
            
        });
    }
    catch(e){
        console.log(e)
        if(e.status == 404){
            State = {};
        }
    }

    return (<div>
        
        </div>);
}

export default ClientSearchBody;