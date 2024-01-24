import React,{useState} from 'react'
import { useNavigate,Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  
  // login form 
  const handleSubmit = (e) =>{
    e.preventDefault();
}
  return (
    <>
    <div className="d-flex align-items-center justify-content-center border border-1 py-4">
    <form onSubmit={handleSubmit}> 
    <h3 className="text-center mt-5">Login</h3> 
    <div className="form-floating mb-3 mt-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="Enter your Email" 
  value={email} onChange={(e)=>setEmail(e.target.value)}
  />
  <label for="floatingInput">Email address</label>
</div>
<div className="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Enter your Pasaword Password" 
  value={password} onChange={(e)=>setPassword(e.target.value)}
  /> 
  <label for="floatingPassword">Password</label>
</div>
<button type="button" className="btn btn-lg btn-primary mt-3 px-5 mx-5" onClick={()=>navigate("/home")}>Login</button>

<p className='mt-3'>if you are not a user plaese <Link to="/register">Register Here</Link></p>
</form>
</div>
    </>

  )
}

export default Login