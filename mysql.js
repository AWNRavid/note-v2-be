const mysql = require('mysql');

// online database
// const db = mysql.createConnection({
//   host: 'db4free.net',
//   user: 'batagor',
//   password: 'sayasukabatagor',
//   database: 'employee_crud',
// });

// local database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'note',
});

module.exports = db;