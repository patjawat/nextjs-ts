import { Pool } from "pg";

let conn: any;

if (!conn) {
  conn = new Pool({
    user:"root",
    password:"docker",
    host:"127.0.0.1",
    port:5432,
    database:"mydb"
});
}

export { conn };