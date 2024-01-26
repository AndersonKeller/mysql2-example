import { conn } from "../connection.js";

export async function createUserModel(userData) {
  try {
    await conn.query(`INSERT INTO usuario (name) VALUES ('${userData.name}');`);
    const [results, fields] = await conn.query("SELECT LAST_INSERT_ID();");
    console.log(results);
    return results;
  } catch (err) {
    console.log(err);
  }
}
