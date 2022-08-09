/** @format */
const {
  createNews,
  getAllNews,
  updateNews,
  deleteNews,
  getNews,
  getOtherBlogs,
} = require("../controllers/newsController");
const newsRouter = require("express").Router();

// ? creating news route
newsRouter.post("/create", createNews);

// ? getting all news route
newsRouter.get("/", getAllNews);

// ? getting other blogs route
newsRouter.get("/otherblogs", getOtherBlogs);

// ? getting a news route
newsRouter.get("/:id", getNews);

// ? updating news route
newsRouter.put("/update/:id", updateNews);

// ? deleting news route
newsRouter.delete("/delete/:id", deleteNews);

module.exports = newsRouter;
