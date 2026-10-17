import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const res = await axios.post("http://localhost:5000/auth", {
      email,
      password},
    {withCredentials:true});
    if (res.data.auth) {

      alert(res.data.msg);
      navigate("/list");

    } else {
      console.log(res.data)
      alert("Login Failed");
    }
  }

  return (
    <>
      <div className="w-50 bg-dark text-white mx-auto p-4 mt-5">
        <h1 className="text-center">Login Page</h1>
        <hr />
        <form className="p-4 bg-primary" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              value={email}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={function (event) {
                setEmail(event.target.value);
              }}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={password}
              className="form-control"
              id="exampleInputPassword1"
              onChange={function (event) {
                setPassword(event.target.value);
              }}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-warning">
            Submit
          </button>
        </form>

        <Link  className="text-danger" to="/register">
                  Register
                </Link>
      </div>
    </>
  );
}
