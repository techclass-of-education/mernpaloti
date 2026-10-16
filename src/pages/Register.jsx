import { useState } from "react";
import { Navbar } from "../layout/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Register() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()

  async function handleSubmit(event)
  {
    event.preventDefault()
     const res = await axios.post("http://localhost:5000/reg", {
      name,
      email,
      password,
    });

    if(res.data.reg)
    {
      alert("Register successfull")
    }
    else
      {
      alert("Register Failed")

    }

    // navigate("/profile", {state:{ name,email }})
  }

  return (
    <>
   
    <div className="alert alert-light w-50 mx-auto mt-5">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>

       <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className="form-control form-control-sm"
            type="text" required
            placeholder="Name" value={name} 
            onChange={function(event){
                         setName(event.target.value)
                    }}
          />
        </div>

       <div>
          <label htmlFor="email">Email-id</label>
          <input
            id="email" required
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
            id="password" required
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
