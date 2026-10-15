import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { Navbar } from "../layout/Navbar"

export function Profile()
{
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
//   const [password,setPassword]=useState("")
const data=useLocation().state
  function handleSubmit(event)
  {
    event.preventDefault()
  }

  useEffect(function()
  {
    // run on load and set name and email in text fields
    setName(data.name)
    setEmail(data.email)
},[])

  return (
    <>
    <Navbar/>
    <div className="alert alert-light w-50 mx-auto mt-5">
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>

       <div>
          <label htmlFor="name">Name</label>
          <input
            id="name" required
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
            id="email" required
            className="form-control form-control-sm"
            type="email"
            placeholder="Email-id" value={email} 
            onChange={function(event){
                         setEmail(event.target.value)
                    }}
          />
        </div>

      

        {/* <button className="btn btn-primary">Register</button>
        <Link className="text-dark mx-3" to={"/"}>Login</Link> */}
      </form>
     </div>

        
    
    
    </>)
}