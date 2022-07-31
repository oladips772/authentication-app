/** @format */
const {
  createNews,
  getAllNews,
  updateNews,
  deleteNews,
} = require("../controllers/newsController");
const newsRouter = require("express").Router();

// ? creating news route
newsRouter.post("/create", createNews);

// ? getting all news route
newsRouter.get("/", getAllNews);

// ? updating news route
newsRouter.put("/update/:id", updateNews);

// ? deleting news route
newsRouter.delete("/delete/:id", deleteNews);

module.exports = newsRouter;
