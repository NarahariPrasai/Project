import mysql from "mysql2";

const db = mysql.createConnection({
    host:"localhostt",
    user: "root",
    password: "n15ch4l111",
    database: "bookstore"
});

db.connect((err) => {
    if(err){
        console.log("Error connecting to database", err);
    }else{
        console.log("Connected to database");
    }
});

export default db;