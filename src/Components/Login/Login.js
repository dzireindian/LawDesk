import{Signin} from "./LoginActions";
import {useDispatch} from "react-redux";

function Login() {
  let dispatch = useDispatch();
  return (
    <div className="tab-content">
      <div
        className="tab-pane fade active show"
        id="pills-login"
        role="tabpanel"
        aria-labelledby="tab-login"
      >
        <form id="LoginForm">
          <div className="text-center mb-3">
            <p>Sign in with:</p>
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
            <input
              type="email"
              id="loginName"
              name="email"
              className="form-control"
              autoComplete="off"
            />
            <label className="form-label" for="loginName">
              Email or username
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
              id="loginPassword"
              name="password"
              className="form-control"
              autoComplete="off"
            />
            <label
              className="form-label"
              for="loginPassword"
            >
              Password
            </label>
            <div className="form-notch">
              <div className="form-notch-leading"></div>
              <div className="form-notch-middle"></div>
              <div className="form-notch-trailing"></div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6 d-flex justify-content-center">
              <div className="form-check mb-3 mb-md-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="loginCheck"
                />
                <label className="form-check-label" for="loginCheck">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>

            <div className="col-md-6 d-flex justify-content-center">
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          <button type="button" onClick={() => {dispatch(Signin());}} className="btn btn-primary btn-block mb-4">
            Sign in
          </button>

          <div className="text-center">
            <p>
              Not a member? <a href="#!">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
