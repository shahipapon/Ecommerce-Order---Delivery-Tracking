const { json } = require("express");
const connection = require("../database/databaseConfig");

let neetu = () => {
  return {
    neetu1(req, res) {
      //res.send("./resources/views/index.ejs");

      // res.send("hello 1");
      res.render("index", { mobile: "abc.." });
    },
    neetu12(req, res) {
      //res.send("./resources/views/index.ejs");

      // res.send("hello 1");
      // INSERT INTO `justfortesting`(`test`) VALUES ([value-1])

      let query =
      "INSERT INTO `justfortesting`(`test`) VALUES (?)";
         connection.query(query, [req.body.test], function (error, results, fields) {
            if (error) throw error;

          });
      res.json(req.body.test);
    },
    checkpost(req, res) {
      //res.send("./resources/views/index.ejs");

      // res.send("hello 1");
      res.render("index", { mobile: "abc.." });
    },

    neetu2(req, res) {
      //res.send("./resources/views/index.ejs");

      connection.query("SELECT * FROM test", function (err, result, fields) {
        if (err) throw err;
        console.log(typeof result);

        res.json(result);
      });

      //   res.json({
      //     username: "Neetu",
      //     mobile: "123456",
      //   });

      //   res.render("index");
    },
  };
};

module.exports = neetu;
