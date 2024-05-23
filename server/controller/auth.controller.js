const authModel = require('../model/auth.model')
// const session = require('express-session')

exports.registerUser = (req, res) => {
    authModel.insertUser(req.body, (err, result) => {
        if (err) {
            console.log(err);
        }   
            console.log(result);
            res.send(result);
    })
}

exports.login = (req, res) => {
    const reqbody = req.body;
    if (!reqbody) {
        return res.status(400).send("NO CREDENTIALS");
    }

    authModel.loginUser(reqbody, (err, result) => {  
        if (err) {
            console.log(err);
            return res.status(500).send("Internal Server Error");
        }

        if (reqbody.username && reqbody.password) {
            const user = result.find(u => u.username === reqbody.username);

            if (!user) {
                return res.status(404).send("Account not Found");
            }
            return res.status(200).send("Logged In! Token: ");
        }
        
        return res.status(400).send("Invalid Request");
    });
};



exports.displayUsers = (req, res) => {
    authModel.getUser((err, result) => {
        if (err) {
            console.log(err);
        }
            console.log(result);
            res.send(result);
    })
}
