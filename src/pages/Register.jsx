import { useState } from "react";
import { Navbar } from "../layout/Navbar";

export function Register() {
  const [name,setName]=useState("")

  function handleSubmit()
  {

  }

  return (
    <>
    <Navbar/>
    <div className="alert alert-light">
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
            placeholder="Email-id" value={name} 
            onChange={function(event){
                         setName(event.target.value)
                    }}
          />
        </div>
       <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            className="form-control form-control-sm"
            type="password"
            placeholder="Password" value={name} 
            onChange={function(event){
                         setName(event.target.value)
                    }}
          />
        </div>

      </form>
     </div>
    </>
  );
}
