const authModel = require('../model/auth.model')

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
    authModel.loginUser(req.body, (err, result) => {
        if (err) {
            console.log(err);
        }
        if(result.length == 0){
            res.status(400).send('No Result');
            return;
        }
            console.log(result);
            res.send(result);
    })
}



exports.displayUsers = (req, res) => {
    authModel.getUser((err, result) => {
        if (err) {
            console.log(err);
        }
            console.log(result);
            res.send(result);
    })
}