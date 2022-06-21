import {Register} from './SignupActions';
import {useDispatch} from "react-redux";

function Signup() {

  let dispatch = useDispatch();

  return (
    <div id="tab-content">
      <div
        className="tab-pane fade active show"
        id="pills-register"
        role="tabpanel"
        aria-labelledby="tab-register"
      >
        <form id="signup-form">
          <div className="text-center mb-3">
            <p>Sign up with:</p>
            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-facebook-f"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-google"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-twitter"></i>
            </button>

            <button type="button" className="btn btn-link btn-floating mx-1">
              <i className="fab fa-github"></i>
            </button>
          </div>

          <p className="text-center">or:</p>

          <div className="form-outline mb-4">
            <input type="text" id="registerUsername" name="name" className="form-control" />
            <label className="form-label" for="registerUsername">
              Username
            </label>
            <div className="form-notch">
              <div className="form-notch-leading"></div>
              <div className="form-notch-middle"></div>
              <div className="form-notch-trailing"></div>
            </div>
          </div>

          <div className="form-outline mb-4">
            <input type="email" id="registerEmail" name="email" className="form-control" />
            <label className="form-label" for="registerEmail">
              Email
            </label>
            <div className="form-notch">
              <div className="form-notch-leading"></div>
              <div className="form-notch-middle"></div>
              <div className="form-notch-trailing"></div>
            </div>
          </div>

          <div className="form-outline mb-4">
            <input type="password" name="password" id="registerPassword" className="form-control" />
            <label
              className="form-label"
              for="registerPassword"
            >
              Password
            </label>
            <div className="form-notch">
              <div className="form-notch-leading"></div>
              <div className="form-notch-middle"></div>
              <div className="form-notch-trailing"></div>
            </div>
          </div>

          <div className="form-outline mb-4">
            <input
              type="password"
              id="registerRepeatPassword"
              className="form-control"
            />
            <label className="form-label" for="registerRepeatPassword">
              Repeat password
            </label>
            <div className="form-notch">
              <div className="form-notch-leading"></div>
              <div className="form-notch-middle"></div>
              <div className="form-notch-trailing"></div>
            </div>
          </div>

          <div className="form-check d-flex justify-content-center mb-4">
            <input
              className="form-check-input me-2"
              type="checkbox"
              value=""
              id="registerCheck"
            />
            <label className="form-check-label" for="registerCheck">
              I have read and agree to the terms
            </label>
          </div>
          <button onClick={() => {dispatch(Register());}} type="button" data-testid="signUpButton" className="btn btn-primary btn-block mb-3">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;