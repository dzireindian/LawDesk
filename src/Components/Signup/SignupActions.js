import $ from 'jquery';
import {LoginLoadAction} from "../../Redux/Actions";

export function Register(){
    var password = $('#registerPassword').val();
    var repeatPassword = $('#registerRepeatPassword').val();

    if(password !== repeatPassword){
        $('#modalMessages').html(`
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Invalid Confirmation Password</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Entered Password and Confirmaion password is not matching</p>
          </div>
        </div>`);
        return;
    // $('#registerRepeatPassword').attr()
    }

    let fieldDisable = (value) => {
    $('#registerRepeatPassword').prop('disabled', value);
    $('#registerCheck').prop('disabled', value);
    }
    fieldDisable(true);

    var formBodySerialized = $('#signup-form').serializeArray();
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
    fetch("https://rohithstartupauthenticator.herokuapp.com/api/users/", requestOptions)
    .then(response => response)
    .then(result => {
        if(result.status === 200){
            var response = result.json();
            console.log("Signup response =",response);
            fieldDisable(false);
            localStorage.setItem('token',response.refreshToken);
            window.location = "/DashBoard";
        }
    })
    .catch(error => {
        fieldDisable(false);
        console.log('error', error)
        dispatch(LoginLoadAction(false));
    })

    }

}