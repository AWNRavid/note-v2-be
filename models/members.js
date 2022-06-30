const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'db4free.net',
  user: 'batagor',
  password: 'sayasukabatagor',
  database: 'employee_crud',
});

class ModelMembers {
  static Register_2(username) {
    const sql = 'insert into member2 (username) values (?)';
    const values = [username];

    return new Promise((resolve, reject) => {
      db.query(sql, values, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
          //   res.send('values inserted');
          resolve(result);
        }
      });
    });
  }
}

module.exports = ModelMembers;
