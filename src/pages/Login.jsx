import { useNavigate } from "react-router-dom";

export function Login() {
const navigate=useNavigate()

function handleSubmit()
{
    
    navigate("/list")
}

  return (
    <>
      <div className="w-50 bg-dark text-white mx-auto p-4 mt-5">
        <h1 className="text-center">Login Page</h1>
        <hr/>
        <form className="p-4 bg-primary" >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
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
              className="form-control"
              id="exampleInputPassword1"
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
          <button type="button" onClick={handleSubmit} className="btn btn-warning">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
