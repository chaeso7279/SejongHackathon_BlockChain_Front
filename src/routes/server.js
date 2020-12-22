const express = require("express");
const app = express();
const PORT = 4000;

app.get('/api/host', (req, res) => {
    res.send({ host : 'sh' });
})


//const db = require('./db');
//db.connect();
/*
var db = mysql.createConnection({
    /// 새로 추가된 부분
    host: '15.164.102.34',
    port: '3306',
    user: 'ubuntu',
    password: '1234',
    database: 'SejongShare'
});
db.connect();
*/

app.post("/user", (req, res) => {
    db.query("SELECT * FROM User", function (err, rows, fields) {
      if (err) {
        console.log(err);
      } else {
        console.log(rows[0]);
        res.send(rows[0]);
      }
    });
  });

app.post("/ST", (req, res) => {
db.query("SELECT * FROM ShareTalent", function (err, rows, fields) {
    if (err) {
    console.log(err);
    } else {
    console.log(rows[0]);
    res.send(rows[0]);
    }
});
});

    

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})
