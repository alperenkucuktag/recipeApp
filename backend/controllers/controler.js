const fs = require("fs");
const crypto = require("crypto");
const write = require("../write");
const getData = require("../utils/getData");

const data = getData();
module.exports.getAllRecipe = (req, res) => {
  ///*Eğer url'e arama parametresi eklendiyse onuda postmanden key kısmına search ile ekleyip denedik
  //filtrele
  console.log(req.query.search);
  //*1-Tariflerin kopyasını oluştur
  let recipes = [...data];

  ///*ARAMA KISMINI OLUŞTURDUK BU YENİ ÖZELLİK
  const search = req.query?.search?.toUpperCase();
  const orders = req.query?.order;

  if (search) {
    recipes = data.filter((item) =>
      item.recipeName.toUpperCase().includes(search)
    );
  }

  if (orders === "Asc") {
    recipes = data.sort((a, b) => Number(a.recipeTime - b.recipeTime));
  } else if (orders === "Desc") {
    recipes = data.sort((a, b) => Number(b.recipeTime - a.recipeTime));
  }
  res.status(200).json({
    message: "BÜTÜN TARİFLER ALINDI",
    results: recipes.length,
    recipes: recipes,
  });
};
module.exports.getRecipe = (req, res) => {
  res.status(200).json({ message: "GET İSTEĞİ BAŞARILI", data: req.data });
};
module.exports.postRecipe = (req, res) => {
  const newRecipe = { ...req.body, id: crypto.randomUUID() };
  data.push(newRecipe);
  write(data);

  res.status(200).json({ message: "POST İSTEĞİ BAŞARILI", data: newRecipe });
};
module.exports.deleteRecipe = (req, res) => {
  const del = data.filter((item) => item.id !== req.data.id);
  write(del);
  res.status(200).json({ message: "DELETE İSTEĞİ BAŞARILI" });
};
module.exports.editRecipe = (req, res) => {
  res.status(200).json({ message: "EDİT İSTEĞİ BAŞARILI" });
};
