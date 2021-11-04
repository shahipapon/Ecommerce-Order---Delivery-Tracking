const connection = require("../database/databaseConfig.js");

let trackingProcess = () => {
    return {
        index(req, res) {
            //check express session if not exits create on
            if (typeof localStorage === "undefined" || localStorage === null) {
                var LocalStorage = require("node-localstorage").LocalStorage;
                localStorage = new LocalStorage("./expressLocalStorage");
            }

            //check if an user has logged in  and confirm orderstaus page otherwise redirect
            if (localStorage.getItem("loggedin") === "true") {
                connection.query(
                    "SELECT `status`, `order_id`, `order_time` FROM `history` WHERE `user_phone` = ?", [localStorage.getItem("user_phone")],
                    function(error, results, fields) {
                        if (error) throw error;
                        // console.log("results: ", results)
                        console.log("my res -", results);
                        res.render("./myTemplate/viewes/trackingProcess.ejs", {
                            status: results[0],
                            startTime: JSON.parse(results[0].order_time).startTime,
                            endTime: JSON.parse(results[0].order_time).endTime,
                        });
                    }
                );
            } else {
                res.send(`
        
                <!DOCTYPE html>
                <html lang="en">
                
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                </head>
                
                <body>
                    <div style="margin-top:20%; text-align:center;">
                    <h1> Please Login first... </h1>
                    <a href="/userlogin" >
                        Click Here
                    </a>
                    </div>
                
                </body>
                
                </html>`);
            }

            // res.render("./myTemplate/viewes/trackingProcess.ejs");
        },
    };
};
module.exports = trackingProcess;