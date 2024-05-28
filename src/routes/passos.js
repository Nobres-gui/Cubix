var express = require("express");
var router = express.Router();

var PassosController = require("../controllers/passosController");


router.post("/cadastrarRespostas", function (req, res) {
    passosController.cadastrarRespostas(req, res);
});

module.exports = router;