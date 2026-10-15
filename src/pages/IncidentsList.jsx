import { Navbar } from "../layout/Navbar.jsx";
import { mockIncidents } from "../data/incidents.js";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function IncidentList() {
  const navigate = useNavigate();

  function handleEdit(incident) {
    navigate("/details", { state: { incident } });
  }


  function handleDelete(incident)
  {
      alert(incident.title)
  }

  // this useEffect will run on [search,status,category] these dependencies
  const [filteredIncidents, setFilteredIncidents] = useState(mockIncidents);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  useEffect(
    function () {
      if (category !== "") {
        setFilteredIncidents(
          mockIncidents.filter(function (e) {
            return e.category.toLowerCase() == category.toLowerCase();
          }),
        );
      }
    },
    [category],
  );

  useEffect(
    function () {
      if (search !== "") {
        setFilteredIncidents(
          mockIncidents.filter(function (e) {
            return e.title.toLowerCase() == search.toLowerCase();
          }),
        );
      }
    },
    [search],
  );

  useEffect(
    function () {
      if (status !== "") {
        setFilteredIncidents(
          mockIncidents.filter(function (e) {
            return e.status.toLowerCase() == status.toLowerCase();
          }),
        );
      }
    },
    [status],
  );

  return (
    <>
      <Navbar />
      <h1>Incidents List</h1>
      <div className="alert alert-dark text-white">
        <div>
          <label htmlFor="search">Search</label>
          <input
            type="search"
            placeholder="Search"
            value={search}
            onChange={function (event) {
              setSearch(event.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="search">By Category</label>
          <select
            id="category"
            className="form-select"
            aria-label="Default select example"
            value={category}
            onChange={function (event) {
              setCategory(event.target.value);
            }}
          >
            <option selected>Select category</option>
            <option value="Phishing">Phishing</option>
            <option value="Malware">Malware</option>
            <option value="Unauthorized Access">Unauthorized Access</option>
            <option value="Data Breach">Data Breach</option>
            <option value="DDos">DDos</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="search">By Status</label>
          <select
            value={status}
            onChange={function (event) {
              setStatus(event.target.value);
            }}
          >
            <option selected>Select Status</option>
            <option value="Open">Open</option>
            <option value="Investigating">Investigating</option>
            <option value="Resolved">Resolved</option>
          </select>
        </div>
      </div>

      {
        //expressions
        filteredIncidents.map(function (e) {
          return (
            <div class="alert alert-success" role="alert">
              <figure>
                <blockquote class="blockquote">
                  <p>
                    <strong>{e.title}</strong>
                  </p>
                </blockquote>
                <figcaption class="blockquote-footer">
                  #{e._id} | {e.createdAt}
                </figcaption>
              </figure>

              <span class="badge text-bg-danger mx-3">{e.severity}</span>
              <span class="badge text-bg-primary mx-3">{e.status}</span>
              <button
                type="button"
                className="btn btn-warning mx-3"
                onClick={function () {
                  handleEdit(e);
                }}
              >
                Edit
              </button>
              <button type="button" className="btn btn-danger mx-3" onClick={
                                                                              function(){
                                                                                handleDelete(e)
                                                                              }
                                                                            }>
                Delete
              </button>
            </div>
          );
        })
      }
    </>
  );
}
