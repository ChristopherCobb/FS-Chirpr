import React, { useState, useEffect } from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";

const NewChirp: React.FC<IChirpProps> = (props) => {
  const [name, setName] = useState<string>("");
  const [content, setContent] = useState<string>("");


  const handleClick = (e) => {
    e.preventDefault();
    newChirp();
  };

  const history = useHistory();

  const newChirp = async () => {
    const chirp = {
      name: name,
      content: content,
    };
    let res = await fetch("/api/chirps", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(chirp),
    });
    if (res.ok) {
      console.log("chirp posted");
      history.push("/");
    } else {
      console.log("chirp not posted");
    }
  };

  return (
    <form className=" d-flex justify-content-center align-items-center">
      <div className="form-group col-6 shadow-lg border text-danger border-info rounded mt-3 text-center">
        <label className="font-weight-bold">Username</label>
        <input
          type="text"
          className="form-control"
          id="username-form"
          placeholder="Enter Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="form-group">
          <label className="font-weight-bolder">Chirp</label>
          <input
            type="text"
            className="form-control"
            id="message-form"
            placeholder="Enter Chirp Here"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></input>
        </div>
        <button
          type="submit"
          className="btn btn-outline-danger w-20 mx-auto shadow-sm mb-2"
          onClick={(e) => handleClick(e)}
        >
          Send Chirp!
        </button>
      </div>
    </form>
  );
};

export interface IChirpProps extends RouteComponentProps<{}> {
  id?: number;
  name: string;
  content: string;
  userid: string;
}

export default NewChirp;
