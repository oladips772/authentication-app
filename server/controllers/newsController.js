/** @format */
const News = require("../models/newsModel");
const asyncHandler = require("express-async-handler");

// ? create news function
const createNews = asyncHandler(async (req, res) => {
  const { title, content, minuteRead, image } = req.body;
  if (!title || !content) {
    res.status(401).send("please fill all fields");
  } else {
    if (title || content || image || minuteRead) {
      const news = await News.create({
        title,
        content,
        minuteRead,
        image,
      });
      res.status(200).send(news);
    }
  }
});

// ? get all news function
const getAllNews = asyncHandler(async (req, res) => {
  const news = await News.find();
  if (news) {
    res.status(200).send(news);
  } else {
    res.status(400).send("no news data yet");
  }
});

// ? get other news excluding current reading blog
const getOtherBlogs = asyncHandler(async (req, res) => {
  const news = await News.find({ _id: { $ne: req.body.blogId } });
  if (news) {
    res.status(200).send(news);
  } else {
    res.status(400).send("no news data yet");
  }
});

// ? get news by id
const getNews = asyncHandler(async (req, res) => {
  const news = await News.findById(req.params.id);
  if (news) {
    res.status(200).send(news);
  } else {
    res.status(400).send("no news data yet");
  }
});

// ? update news function
const updateNews = asyncHandler(async (req, res) => {
  const news = await News.findById(req.params.id);
  if (news) {
    news.content = req.body.content || news.content;
    news.title = req.body.title || news.title;
    news.minuteRead = req.body.minuteRead || news.minuteRead;
    news.image = req.body.image || news.image;
    await news.save();
    res.status(200).send(news);
  } else {
    res.status(400).send("no news found with this id");
  }
});

// ? delete news function
const deleteNews = asyncHandler(async (req, res) => {
  const news = await News.findByIdAndDelete(req.params.id);
  if (news) {
    res.status(200).send("news deleted succesfully");
  }
});

module.exports = {
  createNews,
  getAllNews,
  updateNews,
  deleteNews,
  getNews,
  getOtherBlogs,
};
