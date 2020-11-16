import * as mysql from 'mysql'
import Chirps from "./chirps"
import Users from "./users"
import Mentions from "./mentions";



export const Connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "chirprapp",
    password: "chirper",
    database: "chirperDB"
})

export const Query = (query: string, values?: Array<string | number >) => {
    return new Promise<Array<any>>((resolve, reject) => {
        Connection.query(query, values, (err,results) => {
            if(err) return reject(err);
            resolve(results)
        })
    })
}

export default {
    Query,
    Chirps,
    Users,
    Mentions

}