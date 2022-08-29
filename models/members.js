const db = require('../mysql');
class ModelMembers {
  static Register(username, email, password) {
    const sql = 'insert into member (username, email, password) values (?,?,?)';
    const values = [username, email, password];

    return new Promise((resolve, reject) => {
      db.query(sql, values, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
          resolve(result);
        }
      });
    });
  }

  static CheckUsername(username) {
    const sql = 'select * from member where username = (?)';
    const values = [username];

    return new Promise((resolve, reject) => {
      db.query(sql, values, (err, result) => {
        if (err) {
          throw err;
        } else {
          resolve(result);
        }
      });
    });
  }

  static CheckEmail(email) {
    console.log(email);
    const sql = 'select * from member where email = (?)';
    const values = [email];

    return new Promise((resolve, reject) => {
      db.query(sql, values, (err, result) => {
        if (err) {
          throw err;
        } else {
          resolve(result);
        }
      });
    });
  }

  static GetNote(id) {
    const sql = 'select * from note where member_id = (?);';
    const values = [id];
    return new Promise((resolve, reject) => {
      db.query(sql, values, (err, result) => {
        if (err) {
          throw err;
        } else {
          resolve(result);
        }
      });
    });
  }

  static AddNote(content, member_id, date) {
    const sql = 'insert into note(content,member_id,date) values(?,?,?);';
    const values = [content, member_id, date];
    return new Promise((resolve, reject) => {
      db.query(sql, values, (err, result) => {
        if (err) {
          throw err;
        } else {
          resolve(result);
        }
      });
    });
  }

  static DeleteNote(id) {
    const sql = 'delete from note where id = (?);';
    const values = [id];
    return new Promise((resolve, reject) => {
      db.query(sql, values, (err, result) => {
        if (err) {
          throw err;
        } else {
          resolve(result);
        }
      });
    });
  }

  static UpdateNote(content, id) {
    const sql = 'update note set content = (?) where id = (?);';
    const values = [content, id];
    return new Promise((resolve, reject) => {
      db.query(sql, values, (err, result) => {
        if (err) {
          throw err;
        } else {
          resolve(result);
        }
      });
    });
  }

  /* static Register_2(username) {
    const sql = 'insert into member2 (username) values (?)';
    const values = [username];

    return new Promise((resolve, reject) => {
      db.query(sql, values, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
          resolve(result);
        }
      });
    });
  } */
}

module.exports = ModelMembers;
