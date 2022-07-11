import { AuthenticateAction } from "../../Redux/Actions";

export function Authenticate() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "headers": {
            "Authorization": sessionStorage.getItem('token'),
          }
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        
        return async (dispatch) => {
        console.log("Authenticate action  =",AuthenticateAction(false));
        dispatch(AuthenticateAction(true));
        await fetch("https://rohithstartupauthenticator.herokuapp.com/api/auth/refresh_token", requestOptions)
          .then(response => response)
          .then(result => {
            if(result.status === 200){
                var response = result.json();
                if(response["X-Hasura-Is-Owner"] === "true"){
                    dispatch(AuthenticateAction(false));
                }
            }else{
                sessionStorage.clear();
                window.location = "/";
            }
        })
        .catch(error => {
            console.log('error', error);
        });
    }
}