const connection = require("../database/databaseConfig.js");

// const clickButton = require("../../resources/js/productsToCart");


let productController = () => {
  return {
    index(req, res) {
      // res.render("../views/shajgoj.ejs");

      let query = "SELECT *  FROM `products` WHERE `shop_id`= ? "
      //.log(req.query.shop);
      connection.query(query, [req.query.shop], function (error, results, fields) {
        if (error) throw error;
        //console.log(results.length, results[1].shopid);
        res.render("./myTemplate/viewes/product.ejs", { products: results });
        //  res.render("../../abcd/index.ejs");
      }
      );
    },
  };
};
module.exports = productController;
