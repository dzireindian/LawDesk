import $ from 'jquery';
import {LoginLoadAction} from "../../Redux/Actions";
import {ClientDB} from "../../utils/ClientDB/ClientDB";

export function Signin(){
    let fieldDisable = (value) => {
        $('#loginCheck').prop('disabled', value);
    }

    fieldDisable(true);

    var formBodySerialized = $('#LoginForm').serializeArray();
    let formBody = {};
    $.each(formBodySerialized, function(i, field){
        formBody[field.name] = field.value;
    });

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(formBody);

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    return (dispatch) => {
        dispatch(LoginLoadAction(true));
        fetch("https://rohithstartupauthenticator.herokuapp.com/api/auth/login/", requestOptions)
        .then(response => response)
        .then(async (result) => {
          if(result.status === 200){
              var response = await result.json();
              console.log("response for login =",response);
              fieldDisable(false);
              sessionStorage.setItem('token',response.refreshToken);
              sessionStorage.setItem('userID',response.refreshToken);
              ClientDB();
            //   var db = ClientDB(sessionStorage.getItem('userID'));
              window.location = "/DashBoard";
            //   dispatch(LoginLoadAction(false));
          }
        })
        .catch(error => {
            fieldDisable(false);
            console.log('error', error)
            dispatch(LoginLoadAction(false));
        });
    }

}