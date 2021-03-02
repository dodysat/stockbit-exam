var mysql = require("mysql");
var connection = mysql.createConnection({
  host: process.env.MYSQL_HOSTNAME,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});
connection.connect();

const addLog = function (data) {
  var sql = `INSERT INTO logger (endpoint, param) VALUES ('${data.endpoint}', '${data.param}')`;
  connection.query(sql, function (err, result) {
    if (err) throw err;
  });
};

module.exports = {
  addLog,
};
