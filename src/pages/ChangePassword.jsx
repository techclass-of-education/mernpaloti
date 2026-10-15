import { useState } from "react";
import { Navbar } from "../layout/Navbar";

export function ChangePassword() {
    const userOldPassword="Admin@123"
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if(userOldPassword==oldPassword)
    {
        if(newPassword==confirmPassword)
        {
            alert("Password Changed Successfully");
        }
        else
            {
            alert("New and Confirm password not matched");

        }
    }
    else
        {
            
            alert("Old Password not matched");
    }
  }
  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit} className="w-50 mx-auto mt-5">
        <div className="alert alert-light">
          <div>
            <label htmlFor="oldpassword">Old Password</label>
            <input
              id="oldpassword"
              required
              className="form-control form-control-sm"
              type="password"
              placeholder="Old Password"
              value={oldPassword}
              onChange={function (event) {
                setOldPassword(event.target.value);
              }}
            />
          </div>
        </div>

        <div className="alert alert-light">
          <div>
            <label htmlFor="newpassword">New Password</label>
            <input
              id="newpassword"
              required
              className="form-control form-control-sm"
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={function (event) {
                setNewPassword(event.target.value);
              }}
            />
          </div>
        </div>

        <div className="alert alert-light">
          <div>
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              id="confirmpassword"
              required
              className="form-control form-control-sm"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={function (event) {
                setConfirmPassword(event.target.value);
              }}
            />
          </div>

          <button className="btn btn-primary">Save New Password</button>
        </div>
      </form>
    </>
  );
}
