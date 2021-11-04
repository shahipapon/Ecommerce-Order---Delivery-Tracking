let locationController = () => {
  return {
    index(req, res) {
      res.render("../views/location.ejs");
    },
  };
};

let locationControllerRdirect = () => {
  return {
    // index(req, res) {

    //     res.render(`../views/${location}.ejs`);

    // },

    hello() {
      console.log("hello");
    },
  };
};

module.exports = locationController;
