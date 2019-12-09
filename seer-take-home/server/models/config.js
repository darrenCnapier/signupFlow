const {Pool} = require('pg');
require('dotenv').config();

const URI = 'postgres://${process.env.PG_USERNAME}:${process.env.PG_PASSWORD}@${process.env.PG_URL}:${process.env.PG_PORT}/${process.env.PG_USERNAME}'

//process.env was broken and I didn't have time to fix it, so I added this line to include the full sql uri. Would remove before committing and submitting a PR for production
const myURI = 'postgres://icxneybx:9bfGQleo_8HbbM8Erah2eh-pmxuVE9Wx@raja.db.elephantsql.com:5432/icxneybx' || URI;

const pool = new Pool ({
  connectionString: myURI
});

pool.query(`CREATE TABLE IF NOT EXISTS users
          (id SERIAL PRIMARY KEY, 
          first_name VARCHAR, 
          last_name VARCHAR, 
          email VARCHAR, 
          password VARCHAR)`, 
          (err, result) => {
  console.log('connected to database')
});

module.exports = {pool};