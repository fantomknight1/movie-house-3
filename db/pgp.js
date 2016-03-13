'use strict'
var pgp     = require('pg-promise')({});
var cn = {
  host: 'localhost',
  port: 5432,
  database: 'moviehaus3',
  user: process.env.DB_USER,
  password: process.env.DB_PASS
}
var db = pgp(cn);

// show all theaters in theaters table
function showTheaters(req,res,next){
  db.many(`SELECT * FROM theaters;`)
    .then((data)=>{
      console.log(data);    // should get multiple theater names
      res.rows = data;
      next();
    })
    .catch(()=>{
      console.log('ERROR in showing ALL theaterS!');
    })
}

module.exports.showTheaters = showTheaters;
