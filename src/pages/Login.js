import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Login = ({ setIsLoggedIn }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const user = "user123";
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (user === username && user=== password) {
      setIsLoggedIn(true);
      navigate("/todolist", { replace: true });
    }
    else{
      alert("Please Enter correct username and password");
    }
  };

  return (
    <div className="logintitle">
      <div>User Registation</div>
      <p id="default_user">("user123" as a default username as well as password)</p>
      <form
        className="signupform shadow p-3 mb-5 bg-body rounded"
        onSubmit={handleSubmit}
      >
        <label>
          <p className="username">Username</p>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            className="login-info"
           
          />
        </label>
        <br />
        <label>
          <p className="username">Password</p>
          <input
            type="password"
            placeholder="****"
            onChange={(e) => setPassword(e.target.value)}
            className="login-info"
           
          />
        </label>
        <div>
          <button
            className="btn btn-dark"
            type="submit"
            onSubmit={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
