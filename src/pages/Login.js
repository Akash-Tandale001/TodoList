import {React,useState} from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Login = ({setIsLoggedIn}) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit=()=>{
    setIsLoggedIn(true);
    navigate('/todolist', { replace: true })
  }


  return (
    <div className="logintitle">
        <div>
            User Registation
        </div>
      <form className="signupform shadow p-3 mb-5 bg-body rounded" onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" placeholder="Username" onChange={e => setUserName(e.target.value)} />
        </label>
        <br/>
        <label>
          <p>Password</p>
          <input type="password" placeholder="****" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button className="btn btn-dark" type="submit" onSubmit={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
