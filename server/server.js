const express = require('express');
const app = express();

const sequelize = require('./models').sequelize;
const bodyParser = require('body-parser');

sequelize.sync();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const{
    Users,
    Sequelize: { Op }
} = require('./models');
sequelize.query('SET NAMES utf8;');

app.post('/add/user', (req, res) => {
    console.log(req.body);

    Users.create({
        studentid: req.body.studentid,
        name : req.body.name,
        phone: req.body.phone,
        email : req.body.email,
        tokenAddress: req.body.tokenAddress,
        tokenURL: req.body.tokenURL,
    })
    .then( result => {
        res.send(result)
    })
    .catch( err => {
        console.log(err)
        throw err;
    })
})

app.post('/get/user', (req, res) => {
    Users.findAll({
        where: { studentid : req.body.studentid }
    })
    .then( result => { res.send(result) })
    .catch( err => { throw err })
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})