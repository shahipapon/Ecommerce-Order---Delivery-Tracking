
// const connection = require("../../app/database/databaseConfig.js");

const axios = require('axios');


document.getElementById('check').addEventListener('click', () => {
   
    console.log("click2...");

    // connection.query("SELECT * FROM test", function (err, result, fields) {
    //     if (err) throw err;
    //     console.log(typeof result);

    //     // res.json(result);
    //   });
    axios.post('/abc', {
        test: 'abc',
       
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
   

})
