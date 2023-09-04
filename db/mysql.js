const db = require('mysql');

let db_host = 'localhost';
let db_user = 'test';
let db_password = '123';
let db_name = 'test';
const con = db.createConnection({
    host: db_host,
    user: db_user,
    password: db_password,
    database: db_name,
});
con.connect((err) => {
    if(err) throw err;
    console.log('DB Connected');
});

module.exports = con;
