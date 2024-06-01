var express = require("express");
var router = express.Router();

var passosController = require("../controllers/passosController");


router.post("/cadastrarRespostas", function (req, res) {
    passosController.cadastrarRespostas(req, res);
});

module.exports = router;