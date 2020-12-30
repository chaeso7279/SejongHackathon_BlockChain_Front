const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db');

app.get('/api/users',(req, res) => {
    db.query("SELECT * FROM user", (err, data) => {
        if(!err) res.send({ users : data });
        else res.send(err);
    })
})

app.listen(PORT, () =>{
    console.log(`Server On: http://localhost:${PORT}/`);
})