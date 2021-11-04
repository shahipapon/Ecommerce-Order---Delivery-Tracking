const homeController = require("../controller/homeController");
const neetu = require("../controller/neetu");
const login = require("../controller/loginController");
const loginController = require("../controller/loginController");
const locationController = require("../controller/locationController");
const indexController = require("../controller/indexController");

const productController = require("../controller/productController");
const CartController = require("../controller/cartController");
const trackingProcessController = require("../controller/trackingProcessController");
const AdminController = require("../controller/AdminController");


let myRoutes = (app) => {
    app.get("/", homeController().home);

    app.get("/neetu1", neetu().neetu1);
    app.get("/neetu2", neetu().neetu2);
    // app.post("/abc", neetu().neetu12);

    app.get("/login", loginController().login);


    //User registration
    app.get("/userregis", loginController().userregisView);
    app.post("/userregis", loginController().userregis);

    //user Login
    app.get("/userlogin", loginController().userLoginView);
    app.post("/userlogin", loginController().userValidation);
    app.get("/userlogout", loginController().userLogout);



    app.get("/regis", loginController().regisView);
    app.post("/regis", loginController().regis);

    app.get("/location", locationController().index);
    app.get("/home", indexController().index); //shops

    app.get("/product", productController().index);
    app.get("/cart", CartController().index);

    app.post("/cart", CartController().addtocart);

    app.get("/orderstatus", trackingProcessController().index);


    //Admin panel
    app.get("/admin", AdminController().index);
    app.post("/admin", AdminController().updateStatus);


    app.get("/allproducts", AdminController().showAllProducts);






    app.use((req, res) => {
        /// res.send("amra antorik vabe dukkhioto kono page khuje na pawar jnno :(")

        res.render("../views/404.ejs");
    });

    // app.get('/', function (req, res) {
    //   res.send('Hello World')
    // })
};

module.exports = myRoutes;