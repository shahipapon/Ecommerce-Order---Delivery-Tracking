let homeController = () => {
  return {
    home(req, res) {
      //sessionStorage.setItem("lastname", "Smith");
      res.render("../views/index.ejs");

      // res.send("mhello am");
      //   res.render("index");
    },
  };
};

module.exports = homeController;
