import { Query } from "./index";

const destroy = (chirpid: number) => Query("DELETE FROM mentions WHERE mentions.chirpid = ?;", [chirpid]);

export default {
   destroy
}