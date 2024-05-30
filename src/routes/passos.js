var express = require("express");
var router = express.Router();

var passosController = require("../controllers/passosController");

router.get("/graficoBar", function (req, res) {
    passosController.graficoBar(req, res);
});
router.get("/graficoBar2", function (req, res) {
    passosController.graficoBar2(req, res);
});
router.post("/cadastrarRespostas", function (req, res) {
    passosController.cadastrarRespostas(req, res);
});

module.exports = router;