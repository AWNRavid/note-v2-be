const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'db4free.net',
  user: 'batagor',
  password: 'sayasukabatagor',
  database: 'member2',
});

app.post('/register-2', (req, res) => {
  const { username } = req.body;
  const sql = 'insert into member2 (username) values (?)';
  const values = [username];
  
  db.query(sql, values, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send('values inserted');
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
