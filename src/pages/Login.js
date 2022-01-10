import React from "react";
import "./style.css";

const Login = () => {
  return (
    <div className="logintitle">
        <div>
            User Registation
        </div>
      <form className="signupform shadow p-3 mb-5 bg-body rounded">
        <label>
          <p>Username</p>
          <input type="text" placeholder="Username" />
        </label>
        <br/>
        <label>
          <p>Password</p>
          <input type="password" placeholder="****" />
        </label>
        <div>
          <button className="btn btn-dark" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
