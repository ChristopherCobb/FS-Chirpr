// import React from "react";
// import { useState, useEffect } from "react";
// import { RouteComponentProps } from "react-router-dom";
// import chirps from "../../server/db/chirps";


// const NewChirp: React.FC<IChirpProps> = (props: IChirpProps) => {
//   const [user, setUser] = useState<string>("");
//   const [content, setContent] = useState<string>("");

//   const handleName = (e) => {
//     setUser(e.target.value);
//   };

//   const handleMessage = (e) => {
//     setContent(e.target.value);
//   };

//   const submitChirp = async (e) => {
  
//     const chirp = {
//       user: user,
//       content: content,
    
//     };

//     await fetch("/api/chirps", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(chirp),
//     });

//     props.history.push("/");
//   };

import React from 'react';
import { RouteComponentProps } from "react-router-dom";

const NewChirp: React.FC<IChirpProps> = (props:IChirpProps) => {
    const [chirp, setChirp] = React.useState({
        user: "",
        content: ""
    });

    const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => setChirp({
        user: e.target.value,
        content: chirp.content
    });

    const onMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => setChirp({
        user: chirp.user,
        content: e.target.value
    });

    const saveChirp = async () => {
        await fetch("/api/chirps", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(chirp)
        });

        props.history.push("/");
    }

  return (
    <form className=" d-flex justify-content-center align-items-center">
      <div className="form-group col-6 shadow-lg border text-danger border-info rounded mt-3 text-center">
        <label className="font-weight-bold">Username</label>
        <input
          type="text"
          className="form-control"
          id="username-form"
          placeholder="Enter Username"
          defaultValue={chirp.user}
          onChange={onUsernameChange}
        />
        <div className="form-group">
          <label className="font-weight-bolder">Chirp</label>
          <input
            type="text"
            className="form-control"
            id="message-form"
            placeholder="Enter Chirp Here"
            defaultValue={chirp.content}
            onChange={onMessageChange}
          ></input>
        </div>
        <button
          type="submit"
          className="btn btn-outline-danger w-20 mx-auto shadow-sm mb-2"
          onClick={saveChirp}
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
  content: string,
  userid: string
}

export default NewChirp;
