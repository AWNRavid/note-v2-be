require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ModelMembers = require('../models/members');

class ControllerMembers {
  static Register(req, res) {
    const { username, email, password } = req.body;
    console.log(username, email, password);
    ModelMembers.CheckEmail(email).then((result) => {
      if (result.length) {
        res.send('email already exist');
        // return;
      }
      else {
        ModelMembers.CheckUsername(username).then(async (result) => {
          if (result.length) {
            res.send('user already exist');
            // return;
          }
          else {
            const hashedPassword = await bcrypt.hash(password, 10);
            ModelMembers.Register(username, email, hashedPassword);
            res.send('register success');
          }
        });
      }
    });
    
  }

  static Login(req, res) {
    const { email, password } = req.body;
    // console.log(username, password);
    ModelMembers.CheckUsername(email).then(async (result) => {
      if (result.length) {
        console.log(result);
        if (await bcrypt.compare(password, result[0].password)) {
          const user = {
            id: result[0].id,
          };
          const accessToken = jwt.sign(user, process.env.SECRET_KEY
            // , { expiresIn: '15m' }
          );
          res.status(200).json({ accessToken, result: result[0] });
        } else {
          res.status(401).send('Incorrect Password');
        }
      } else {
        res.status(404).send('User not found');
      }
    });
  }

  static GetMember(req, res) {
    ModelMembers.GetMember(req.params.userId).then((result) => {
      console.log(result);
      res.status(200).json(result);
    });
  }

  static GetNote(req, res) {
    ModelMembers.GetNote(req.params.userId).then((result) => {
      console.log(result);
      res.status(200).json(result);
    });
  }

  static AddNote(req, res) {
    console.log(req.body);
    const {content, date, color} = req.body;
    const {userId} = req.params
    ModelMembers.AddNote(content, userId, date, color).then((result) => {
      res.status(201).json(result);
    });
  }

  static DeleteNote(req, res) {
    console.log(req.params.noteId);
    ModelMembers.DeleteNote(req.params.noteId)
  }

  static UpdateNote(req, res) {
    console.log(req.params.noteId);
    console.log(req.body.content);
    ModelMembers.UpdateNote(req.body.content, req.params.noteId, req.body.color)
  }
}

module.exports = ControllerMembers;
