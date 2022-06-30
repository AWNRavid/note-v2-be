const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'db4free.net',
  user: 'batagor',
  password: 'sayasukabatagor',
  database: 'employee_crud',
});

module.exports = db;