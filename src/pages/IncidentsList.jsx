import { Navbar } from "../layout/Navbar.jsx";
import { mockIncidents } from "../data/incidents.js";
import { useNavigate } from "react-router-dom";
export function IncidentList() {
  const navigate=useNavigate()

  function handleEdit(incident)
  {

      navigate("/details",{state:{incident}})
  }

  return (
    <>
      <Navbar />
      <h1>Incidents List</h1>
      {
        //expressions
        mockIncidents.map(function (e) {
          return (
            <div class="alert alert-success" role="alert">
              <figure>
                <blockquote class="blockquote">
                  <p><strong>{e.title}</strong></p>
                </blockquote>
                <figcaption class="blockquote-footer">
                  #{e._id} | {e.createdAt}
                </figcaption>
              </figure>
              
              <span class="badge text-bg-danger mx-3">{e.severity}</span>
              <span class="badge text-bg-primary mx-3">{e.status}</span>
              <button type="button" className="btn btn-warning mx-3"
               onClick={
                          function()
                          {
                            handleEdit(e)
                          }
                       }>Edit</button>
              <button type="button" className="btn btn-danger mx-3">Delete</button>
            </div>
          );
        })
      }
    </>
  );
}
