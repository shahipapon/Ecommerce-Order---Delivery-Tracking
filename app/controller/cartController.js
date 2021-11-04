const connection = require("../database/databaseConfig.js");

let cartController = () => {
  return {
    index(req, res) {
      // res.render("../views/shajgoj.ejs");
      let query = "SELECT * FROM `temporaryaddeddproduct`";
      if (true) {
        connection.query(query, function (error, results, fields) {
          if (error) throw error;
          if (results.length > 0) {
            // console.log(
            //   "databasaeid- ",
            //   JSON.parse(results[0].product).prod[0].ProductPrice
            // );
            res.render("./myTemplate/viewes/cart.ejs", {
              CartProducts: results[0],
              CartEmpty: false,
              blabla: JSON.stringify(JSON.parse(results[0].product).prod)
              // CartPrice: results,
              // CartQuantity: results,
            });
          } else {
            // empty cart
            res.render("./myTemplate/viewes/cart.ejs", {
              CartEmpty: true,
            });
          }
        });
      }
    },

    addtocart(req, res) {
      let query = "SELECT id FROM `temporaryaddeddproduct` WHERE id=?";
      connection.query(
        query,
        [req.body.uuid],
        function (error, results, fields) {
          if (error) throw error;

          if (results.length > 0) {
            //update
          } else {
            //add
            query =
              "INSERT INTO `temporaryaddeddproduct`(`id`, `product`) VALUES (?,?)";
            if (req.body.cart) {
              connection.query(
                query,
                [req.body.uuid, req.body.cart],
                function (error, results, fields) {
                  if (error) throw error;
                }
              );
            }
          }
        }
      );

      res.json(req.body.cart);
    },
  };
};
module.exports = cartController;