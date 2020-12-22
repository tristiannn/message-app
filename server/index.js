const express = require('express')
const mysql = require('mysql2')
const app = express()
const cors = require ('cors')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({

    user: "root",
    password: "",
    host: "localhost",
    database: "CRUD",

})

app.post('/create',(req, res) =>  {
    const Name    = req.body.Name
    const Subject = req.body.Subject
    const Message = req.body.Message

    db.query(
    "INSERT INTO CRUD (Name, Subject, Message) VALUES (?,?,?)", 
    [Name, Subject, Message], 
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("value Inserted");
        }
       }
      );
});


app.get('/DATA', (req,res) => {
    db.query(
    "SELECT * FROM CRUD",
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
       }
      );
    })
app.listen(3001, ()=> {
    console.log("server run on 3001");
})
