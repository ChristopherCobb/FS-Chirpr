import { Query } from "./index";

const getAllChirps = async () => Query(`
    Select 
    *  
    FROM chirps
    JOIN users on users.id = Chirps.userid
`);

const getOneChirp = async (id:string) =>
  Query(`Select 
  Chirps.*,
   Users.name 
   FROM Chirps 
   Join Users 
   on Users.id = Chirps.userid WHERE Chirps.id = ?`, [id]);

const postChirp = async (userid: string, content: string) =>
  Query(`
  insert into chirps(userid, content) values (?,?)`, [userid, content]);

const updateChirp = async (content:string, id:number) =>
  Query(`
  UPDATE Chirps 
  SET content = ? 
  WHERE id = ?`, [content, id]);

const deleteChirp = async (id: string) => Query("DELETE FROM Chirps WHERE id =?", [id]);

export default {
  GetChirps: getAllChirps,
  GetChirp: getOneChirp,
  CreateChirp: postChirp,
  UpdateChirp: updateChirp,
  DeleteChirp: deleteChirp,
};


