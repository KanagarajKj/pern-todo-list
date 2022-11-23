const Pool = require("pg").Pool;

const pool = new Pool( {
user:"postgres",
password:"Raj@1998",
host:"localhost",
database:"pernstack",
port:5432
})

module.exports = pool;