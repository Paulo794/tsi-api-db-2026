import  sqlite3, { Database } from "sqlite3";

sqlite3.verbose();

export const db = new  sqlite3.Database(
    "./database.sqlite3",
    (erro) => {
        if(erro) {
            console.error("erro ao conectar ao banco database", erro.message);
        } else{
            console.log("Sqlite conectado com sucesso");
        }
    }
);

db.serialize(() =>{
    db.run(`
        CREATE TABLE IF NOT EXISTS generos(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL)
        `);
    });