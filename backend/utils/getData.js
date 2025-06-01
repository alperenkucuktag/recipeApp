const fs = require("fs");
const path = require("path");

module.exports = () => {
  try {
    return JSON.parse(fs.readFileSync(path.join(__dirname, "../recipe.json")));
  } catch (error) {
    console.log("DOSYA YOLU YANLIŞ", error);
  }
};
