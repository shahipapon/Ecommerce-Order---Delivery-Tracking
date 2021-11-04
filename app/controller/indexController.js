const connection = require("../database/databaseConfig.js");

let indexController = () => {
  return {
    index(req, res) {
      // console.log("My requ- ", req.query.location);
      // let location = req.query.location;
      if (typeof localStorage === "undefined" || localStorage === null) {
        var LocalStorage = require("node-localstorage").LocalStorage;
        localStorage = new LocalStorage("./location");
      }

      if (typeof req.query.location !== "undefined") {
        // console.log("...................", req.query.location);
        localStorage.setItem("location", req.query.location);
      }

      //

      let location = localStorage.getItem("location");

      // console.log();
      console.log("mylocation -  ", location);
      let query = "SELECT shop,shopid FROM `shoplist` WHERE `location`= ? ";

      connection.query(query, [location], function (error, results, fields) {
        if (error) throw error;
        //console.log(results.length, results[1].shopid);
        res.render("./myTemplate/viewes/shopView", {
          shop: results,
        });
      });
    },
  };
};

module.exports = indexController;
