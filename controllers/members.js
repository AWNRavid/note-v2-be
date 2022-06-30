const ModelMembers = require('../models/members');

class ControllerMembers {
  static Register_2(req, res) {
    const { username } = req.body;
    ModelMembers.Register_2(username)
      .then((resolve) => {
        res.send('values inserted');
      })
      .catch((reject) => {
        console.log(reject);
      });
  }
}

module.exports = ControllerMembers;
