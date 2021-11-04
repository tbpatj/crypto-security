const users = []
const bcrypt = require('bcrypt');

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if(users[i].username === username){
          console.log(`user entered: ${password}`);
          console.log(`server contains: ${users[i].password}`);
          let containsHash = bcrypt.compareSync(password,users[i].password);
          if (containsHash) {
            let copyObj = {
              username:users[i].username,
              email: users[i].email,
              firstName:users[i].firstName,
              lastName:users[i].lastName}
            res.status(200).send(copyObj);
            return;
          }
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        

        //hashing
        let salt = bcrypt.genSaltSync(5);
        let saltedHash = bcrypt.hashSync(req.body.password,salt);
        req.body.password = saltedHash;
        users.push(req.body);
        console.log(req.body);
        let packetObj = {username,email,firstName,lastName} = req.body;
        res.status(200).send(packetObj);
    }
}