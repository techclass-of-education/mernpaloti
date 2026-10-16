import axios from "axios";
import { Navbar } from "../layout/Navbar";
import { useState } from "react";

export function AddIncident() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [severity, setSeverity] = useState("");
  const [desc, setDesc] = useState("");

  async function handleSubmit() {
    const formValues = {
      title,
      category,
      severity,
      description: desc,
      status: "Open",
      reportedBy: "USER001",
    };

    const res = await axios.post("http://localhost:5000/incident", formValues);

    if (res.data.save) {
      alert("Incident Saved");

    } else {
      
      alert("Incident Save Failed");
    }
    // console.log(formValues)
  }

  return (
    <>
      <Navbar />

      <div className="alert w-50 mx-auto mt-3 alert-light" role="alert">
        <h1>Report a new Incident</h1>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            className="form-control form-control-sm"
            type="text"
            placeholder="Title"
            value={title}
            onChange={function (event) {
              setTitle(event.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="category">Category</label>
          <select
            id="category"
            className="form-select"
            aria-label="Default select example"
            value={category}
            onChange={function (event) {
              setCategory(event.target.value);
            }}
          >
            <option selected>select category</option>
            <option value="Phishing">Phishing</option>
            <option value="Malware">Malware</option>
            <option value="Unauthorized Access">Unauthorized Access</option>
            <option value="Data Breach">Data Breach</option>
            <option value="DDos">DDos</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="severity">Severity</label>
          <select
            id="severity"
            className="form-select"
            aria-label="Default select example"
            value={severity}
            onChange={function (event) {
              setSeverity(event.target.value);
            }}
          >
            <option selected>Select severity</option>

            <option value="High">High</option>
            <option value="Critical">Critical</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div>
          <label htmlFor="desc">Description</label>
          <textarea
            className="form-control"
            id="desc"
            placeholder="Description"
            onChange={function (event) {
              setDesc(event.target.value);
            }}
          >
            {desc}
          </textarea>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Add
        </button>
      </div>
    </>
  );
}
