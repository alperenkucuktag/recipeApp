const fs = require("fs");
const path = require("path");
const getData = require("../utils/getData");

const data = getData();
let recipe = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../recipe.json"))
);

module.exports = (req, res, next) => {
  const found = data.find((item) => item.id === req.params.id);
  if (!found) {
    res.status(404).json({ message: "DOSYA BULUNAMADI" });
  }

  req.data = found;

  next();
};
