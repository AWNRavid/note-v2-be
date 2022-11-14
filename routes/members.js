const express = require('express');
const router = express.Router();
const ControllerMembers = require('../controllers/members');
const jwt = require('jsonwebtoken');

function verifyJWT() {
  return (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) {
      return res.sendStatus(401);
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      // console.log(user);
      req.params.userId = req.user.id;
      next();
    });
  };
}

router.post('/register', ControllerMembers.Register);
router.post('/login', ControllerMembers.Login);

router.get('/get-note/:userId', verifyJWT(), ControllerMembers.GetNote);
router.post('/add-note/:userId', verifyJWT(), ControllerMembers.AddNote);
router.delete('/delete-note/:noteId', verifyJWT(), ControllerMembers.DeleteNote);
router.put('/update-note/:noteId', verifyJWT(), ControllerMembers.UpdateNote);

router.get('/get-member/:userId', verifyJWT(), ControllerMembers.GetMember);

// router.post('/register-2', ControllerMembers.Register_2);

module.exports = router;
