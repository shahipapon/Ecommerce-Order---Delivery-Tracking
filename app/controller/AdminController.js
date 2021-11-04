const connection = require("../database/databaseConfig.js");

let AdminController = () => {
  return {
    index(req, res) {
        
      connection.query(" SELECT * FROM `history` ", function (error, results, fields) {
        if (error) throw error;
        // console.log("results: ", results)
        res.render("./myTemplate/viewes/admin.ejs",{
            info: results,
            
        });
      });
    },

    showAllProducts(req, res) {
        
      connection.query("SELECT * FROM `products` ", function (error, results, fields) {
        if (error) throw error;
        // console.log("results: ", results)
        res.render("./myTemplate/viewes/product_Show_admin.ejs",{
          products: results,
            
        });
      });
    },
    updateStatus(req,res){
        connection.query(" UPDATE `history` SET `status`= ?  WHERE `order_id`= ?  ",[req.body.status, req.body.orderid], function (error, results, fields) {
            if (error) throw error;
            console.log("update results: ", results)
            
          });

          res.redirect("/admin");

    }
  };
};
module.exports = AdminController;