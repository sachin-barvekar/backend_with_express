const express = require("express");
const router = express.Router();

//import controller
const {createToDo} = require("../controllers/createToDo");
const {getToDo, getTodoById} = require("../controllers/getToDo");
const {updateToDo} = require("../controllers/updateToDo");
const {deleteToDo} = require("../controllers/deleteToDo");

//define API routes
router.post("/createToDo",createToDo);
router.get("/getTodos", getToDo);
router.get("/getTodos/:id", getTodoById);
router.put("/updateTodo/:id", updateToDo);
router.delete("/deleteTodo/:id", deleteToDo);

module.exports =router;