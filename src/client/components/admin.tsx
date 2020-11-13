import * as React from "react";
import { useState, useEffect } from "react";
import { RouteComponentProps, Link } from "react-router-dom";

const Admin: React.FC<IAdminProps> = (props: IAdminProps) => {
  const [name, setName] = useState<string>("");
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    (async () => {
      let res = await fetch(`/api/chirps/${props.match.params.id}`);
      let chirp = await res.json();
      setName(chirp.name);
      setContent(chirp.content);
    })();
  }, []);


  const handleTextChange = (e) => setContent(e.target.value);

  const editChirp = async (id: string) => {
    const chirp = {
      id: id,
      name: name,
      content: content,
    };

    let res = await fetch(`/api/chirps/${id}`, {
      method: "PUT",

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(chirp),
    });

    if (res.ok) {
      props.history.push("/");
      console.log("chirp edited");
    } else {
      console.log("chirp edit failed");
    }
  };

  const deleteChirp = async (id: string) => {
    let res = await fetch(`/api/chirps/${id}`, {
      method: "DELETE",
    });
    props.history.push("/");
  };

  return (
    <section className="row" id="row1">
      <div
        key="admin-${id}"
        className="card d-flex align-items-center shadow-lg text-center m-4 rounded text-danger bg-white "
        style={{ width: "20rem" }}
      >
        <img
          className="card-img-top"
          src="./public/assets/download"
          alt="Birdie Image"
          style={{ height: "100px", width: "100px" }}
        />
        <div className="card-body ">
          <h5 className="card-title bg-light">@{name} </h5>
          <textarea
            className="card-text bg-white my-2"
            // placeholder="Edit Chirp Here"
            defaultValue={content}
            onChange={(e) => handleTextChange(e)}
          ></textarea>
          <br></br>
          <button
            className="btn btn-sm btn-outline-danger mx-2rounded "
            onClick={() => editChirp(props.match.params.id)}
          >
            Save Edit
          </button>
          <button
            className="btn btn-sm btn-outline-danger mx-2 rounded "
            onClick={() => deleteChirp(props.match.params.id)}
          >
            Delete Chirp
          </button>

          <Link to="/">
            <button
              type="button"
              className="btn btn-sm mx-2 my-2 btn-outline-dark"
            >
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export interface IAdminProps extends RouteComponentProps<{ id: string }> {
  //  chirp = {
  //    id:string,
  //    name: string,
  //  content: string
  //  }
}

export default Admin;
