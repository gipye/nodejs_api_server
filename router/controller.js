const con = require('../db/mysql');

/*
let get = (req, res) => {
    res.write('GET request');
    res.end('\n');
};
let post = (req, res) => {
    res.write('POST request');
    res.end('\n');
};
let parseBody = (req, res) => {
    res.write(String(req.body.key1));
    res.end('\n');
};
let parseQuery = (req, res) => {
    res.write(String(req.query.key1));
    res.end('\n');
};
*/

const signUp = (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let query = `INSERT INTO User(username, password) values('${username}', '${password}');`;

    new Promise((resolve, reject) => {
        con.query(query, (err) => {
            if(err) reject(err);
            else resolve();
        });
    })
    .then(() => {
        res.write('Sign up complete (username: '+username+')')
        res.end('\n');
    })
    .catch((err) => {
        res.write('Sign up failed\n');
        res.write(err.sqlMessage);
        res.end('\n');
    });
};

const login = (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let query = `SELECT username FROM User WHERE username='${username}' and password='${password}';`;

    new Promise((resolve, reject) => {
        con.query(query, (err, result, fields) => {
            if(err) throw err;
            resolve(result[0]);
        });
    })
    .then((result) => {
        if(result !== undefined) {
            result.msg = 'Login Success';
        } else {
            result = {
                username: null,
                msg: 'Login failed (Not User)',
            };
        }

        return new Promise((resolve, reject) => {
            resolve(JSON.stringify(result));
        });
    })
    .then((result) => {
        return new Promise((resolve, reject) => {
            res.write(result);
            res.end('\n');
        });
    });
};

module.exports = {
    signUp: signUp,
    login: login,

/*
    get: get,
    post: post,
    body: parseBody,
    query: parseQuery,
*/
};
