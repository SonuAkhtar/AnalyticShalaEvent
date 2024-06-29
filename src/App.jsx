import { useState } from "react";
import newImage from "./assets/image.svg";

const App = () => {
  const [signMode, setSignMode] = useState(false);
  const handleSignClick = () => {};

  return (
    <div className="app">
      <div className={`container ${signMode && "sign-up-mode"}`}>
        <div className="form-container">
          <div className="signin-signup">
            <form className="sign-in-form">
              <h2 className="title">Sign In</h2>
              <div className="input-field">
                <i className="fa-solid fa-user" />
                <input type="text" placeholder="user" />
              </div>
              <div className="input-field">
                <i className="fa-solid fa-user" />
                <input type="password" placeholder="password" />
              </div>
              <button type="submit" className="btn solid">
                Login
              </button>

              <p className="social-text"> or try with social app</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fa-solid fa-user" />
                </a>
                <a href="#" className="social-icon">
                  <i className="fa-solid fa-user" />
                </a>

                <a href="#" className="social-icon">
                  <i className="fa-solid fa-user" />
                </a>
              </div>
            </form>

            <form className="sign-up-form">
              <h2 className="title">Sign Up</h2>
              <div className="input-field">
                <i className="fa-solid fa-user" />
                <input type="text" placeholder="user" />
              </div>
              <div className="input-field">
                <i className="fa-solid fa-user" />
                <input type="text" placeholder="email" />
              </div>
              <button type="submit" className="btn solid">
                SignUp
              </button>

              <p className="social-text"> or Signup</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fa-solid fa-user" />
                </a>
                <a href="#" className="social-icon">
                  <i className="fa-solid fa-user" />
                </a>

                <a href="#" className="social-icon">
                  <i className="fa-solid fa-user" />
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>new here</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                sint eos provident.
              </p>
              <button
                className="btn transparent"
                onClick={() => setSignMode(true)}
              >
                Sign up
              </button>
            </div>
            <img src={newImage} className="image" alt="image" />
          </div>

          <div className="panel right-panel">
            <div className="content">
              <h3>One of us?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                sint eos provident.
              </p>
              <button
                className="btn transparent"
                onClick={() => setSignMode(false)}
              >
                Sign in
              </button>
            </div>
            <img src={newImage} className="image" alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
