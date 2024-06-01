var express = require("express");
var router = express.Router();

var passosController = require("../controllers/passosController");

router.get("/graficoBar", function (req, res) {
    passosController.graficoBar(req, res);
});
router.get("/graficoLine", function (req, res) {
    passosController.graficoLine(req, res);
});
router.post("/cadastrarRespostas", function (req, res) {
    passosController.cadastrarRespostas(req, res);
});

module.exports = router;