const connection = require("../database/databaseConfig");
const bcrypt = require("bcrypt");

let homeController = () => {
    return {
        login(req, res) {
            res.render("../views/login/login.ejs");
        },

        regisView(req, res) {
            res.render("./myTemplate/viewes/registration.ejs");
        },
        regis(req, res) {
            console.log(req.body);

            /*
                   INSERT INTO `shoplogin`(`id`, `shopname`, `shoplocation`, `mail`, `pass`) 
                  VALUES ([value-1],[value-2],[value-3],[value-4],[value-5]) */

            let query =
                "INSERT INTO `shoplogin`(`id`,`shopname`, `shoplocation`, `mail`, `pass`) VALUES (?,?,?,?,?)";

            // bcrypt.hash(req.body.pass, 10, function (err, hash) {
            //   // Store hash in your password DB.
            //   connection.query(query, [2, req.body.shopname, req.body.shoplocation,
            //     req.body.mail, hash], function (error, results, fields) {
            //       if (error) throw error;

            //     });
            // });

            bcrypt.compare(
                "12480khkfdjshkal",
                "$2b$10$wVIBtFI1CT2Dj/lDpwMU8ugK9h3BkkYJl6qfa3Yz5UMMCWPFAV8/i",
                function(err, result) {
                    // result == true
                    if (result) {
                        console.log("ur pass is true");
                    } else {
                        console.log("ur pass is false");
                    }
                }
            );

            res.send("helllo..");
        },

        userregisView(req, res) {
            res.render("./myTemplate/viewes/userRegistration.ejs");
        },

        userregis(req, res) {
            let query = "";

            //user registration
            bcrypt.hash(req.body.pass, 10, function(err, hash) {
                // Store hash in your password DB.
                query =
                    "INSERT INTO `userinfo`(`name`, `phone`, `pass`, `address`)  VALUES (?,?,?,?)";
                connection.query(
                    query, [req.body.name, req.body.phone, hash, req.body.address],
                    function(error, results, fields) {
                        if (error) throw error;
                    }
                );
            });

            query =
                "INSERT INTO `history`(`user_phone`, `order_id`, `product`, `shop_id`, `status`, `address`, `order_time`) VALUES (?,?,?,?,?,?,?)";

            // product checout history to database
            connection.query(
                query, [
                    req.body.phone,
                    req.body.uuiid,
                    req.body.product,
                    req.body.shopid,
                    "Pending",
                    req.body.address,
                    req.body.orderTime
                ],
                function(error, results, fields) {
                    if (error) throw error;
                }
            );

            //clearing temporay product
            connection.query(
                " DELETE FROM `temporaryaddeddproduct` ",
                function(error, results, fields) {
                    if (error) throw error;
                }
            );

            if (typeof localStorage === "undefined" || localStorage === null) {
                var LocalStorage = require("node-localstorage").LocalStorage;
                localStorage = new LocalStorage("./expressLocalStorage");
            }
            console.log("phone-", req.body.phone);
            console.log("phone local-", localStorage.getItem("user_phone"));
            localStorage.setItem("loggedin", true);
            localStorage.setItem("user_phone", req.body.phone);
            // res.send("success..");
            res.redirect("/orderstatus");
        },
        userLoginView(req, res) {
            res.render("./myTemplate/viewes/userLogin.ejs");
        },
        userValidation(req, res) {
            // res.render("./myTemplate/viewes/userLogin.ejs");
            let query = "SELECT `phone`, `pass` FROM `userinfo` WHERE `phone` = ?";

            connection.query(query, [req.body.phone], function(error, results, fields) {
                if (error) throw error;
                console.log(results.length);
                if (results.length > 0) {
                    bcrypt.compare(req.body.pass, results[0].pass,
                        function(err, result) {
                            // result == true
                            // console.log("res-", req.session);
                            if (result) {
                                if (typeof localStorage === "undefined" || localStorage === null) {
                                    var LocalStorage = require("node-localstorage").LocalStorage;
                                    localStorage = new LocalStorage("./expressLocalStorage");
                                }
                                localStorage.setItem("loggedin", true);
                                localStorage.setItem("user_phone", req.body.phone);
                                // res.send("success..");
                                res.redirect("/orderstatus");

                                // console.log("ur pass is true");
                            } else {
                                // console.log("ur pass is false");
                                res.redirect("/userlogin");
                            }
                        }
                    );
                }
            });

            // res.send("bla bla bla done ....")
            // res.redirect("./cart")
        },

        userLogout(req, res) {
            localStorage.setItem("loggedin", false);
            // localStorage.setItem("user_phone", "");
            localStorage.removeItem("user_phone");

            res.redirect("/userlogin");
        },
    };
};

module.exports = homeController;