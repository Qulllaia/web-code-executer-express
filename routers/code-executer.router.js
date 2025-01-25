const { Router } = require("express");
const CodeExecuterController = require("../controllers/code-executer.controller");

const router = new Router();

router.get("/code-setter", CodeExecuterController.getCode);

module.exports = router;
