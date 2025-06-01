const fs = require("fs");
const path = require("path");

module.exports = (data) => {
  fs.writeFile(
    path.join(__dirname, "./recipe.json"),
    JSON.stringify(data),
    (err) => {
      if (err) {
        console.log("DOSYA YAZDIRILAMADI");
      }
    }
  );
};
