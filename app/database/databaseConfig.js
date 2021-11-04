
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  // user: 'root',
  // password: '',
  user: 'root',
  password: 'shahipapon20',
  database: 'project'
});

connection.connect();


// connection.query(
//   "SELECT 11 + 3121 AS solution",
//   function (error, results, fields) {
//     if (error) throw error;
//     console.log("The solution is: ", results[0].solution);
//   }
// );

// let query = "SELECT shop FROM `shoplist` WHERE `location`= 'Dhanmondi'"

// connection.query(
//   query, function (error, results, fields) {
//     if (error) throw error;
//     //console.log("The solution is: ", results);

//     console.log(typeof (results[0]));
//     results.forEach(element => {
//       // console.log(element.toLowerCase());
//     });
//   }
// );


// console.log("ami ekhane ");

module.exports = connection;