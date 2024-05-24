const conn  = require("../config/dbconfig");

exports.insertUser = (credentials, callback) => {
    const {username, password, first_name, last_name} = credentials;
    conn.query("insert into accounts (username, password, firstname, lastname) values (?,?,?,?)", [username, password, first_name, last_name], callback)
}

exports.loginUser = (credentials, callback) => {
    const {username, password}= credentials;
    conn.query("select username, password from accounts where username = ? AND password = ?",[username, password], callback)
}

exports.getUser = ( callback) => {
    conn.query("select * from accounts", callback)
}