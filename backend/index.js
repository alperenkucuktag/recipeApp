const fs = require("fs");
const express = require("express");
const {
  getRecipe,
  deleteRecipe,
  editRecipe,
  postRecipe,
  getAllRecipe,
} = require("./controllers/controler");
const control = require("./middleware/control");

const app = express();
const port = 5003;

const basePath = "/api/v10/recipe";

app.use(express.json());

app.get(`${basePath}`, getAllRecipe);
app
  .route(`${basePath}/:id`)
  .get(control, getRecipe)
  .delete(control, deleteRecipe)
  .post(control, postRecipe)
  .patch(control, editRecipe);

app.listen(port, () => console.log("SERVER DİNLENİYOR"));
