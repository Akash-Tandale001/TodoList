import {React,useState} from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Login = ({setToken,setIsLoggedIn}) => {
    const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

//   const loginUser= async(credential)=>{
//       const data = await fetch()

//   }

  async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }
   const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
    setIsLoggedIn(true);
    navigate('./todolist', { replace: true })
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
          <button className="btn btn-dark" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
