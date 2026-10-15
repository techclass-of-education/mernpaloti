import { useState } from "react";
import { Navbar } from "../layout/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Register() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()

  function handleSubmit(event)
  {
    event.preventDefault()
    // axios
    // Profile.jsx open

    navigate("/profile", {state:{ name,email }})
  }

  return (
    <>
    <Navbar/>
    <div className="alert alert-light w-50 mx-auto mt-5">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>

       <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className="form-control form-control-sm"
            type="text"
            placeholder="Name" value={name} 
            onChange={function(event){
                         setName(event.target.value)
                    }}
          />
        </div>

       <div>
          <label htmlFor="email">Email-id</label>
          <input
            id="email"
            className="form-control form-control-sm"
            type="email"
            placeholder="Email-id" value={email} 
            onChange={function(event){
                         setEmail(event.target.value)
                    }}
          />
        </div>

       <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            className="form-control form-control-sm"
            type="password"
            placeholder="Password" value={password} 
            onChange={function(event){
                         setPassword(event.target.value)
                    }}
          />
        </div>

        <button className="btn btn-primary">Register</button>
        <Link className="text-dark mx-3" to={"/"}>Login</Link>
      </form>
     </div>
    </>
  );
}
