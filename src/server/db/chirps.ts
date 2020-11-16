import { Query } from "./index";

const getAllChirps = async () =>
  Query(
    "SELECT chirps.id, chirps.content, chirps.location, users.name FROM chirps JOIN users ON chirps.userid = users.id;"
  );

const getOneChirp = async (id: number) =>
  Query(
    `Select
  Chirps.*,
   Users.name
   FROM Chirps
   Join Users
   on Users.id = Chirps.userid WHERE Chirps.id = ?`,
    [id]
  );

const postChirp = (userid: number, content: string) =>
  Query("INSERT INTO chirps (userid, content) VALUES (?, ?);", [
    userid,
    content,
  ]);

const updateChirp = (content: string, id: number) =>
  Query("UPDATE chirps SET content = ? WHERE chirps.id = ?", [content, id]);

const deleteChirp = async (id: number) =>
  Query("DELETE FROM Chirps WHERE chirps.id =?", [id]);

export default {
  GetChirps: getAllChirps,
  GetChirp: getOneChirp,
  CreateChirp: postChirp,
  UpdateChirp: updateChirp,
  DeleteChirp: deleteChirp,
};
