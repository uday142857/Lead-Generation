const express = require("express");
const getData= require("../manage/dataManage.js");
const dataRoute = express.Router();


dataRoute.post("/getdata",getData)

module.exports = dataRoute;