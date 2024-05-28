var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");


router.post("/cadastrarRespostas", function (req, res) {
    passosController.cadastrarRespostas(req, res);
});
router.get("/graficoBar", function (req, res) {
    medidaController.graficoBar(req, res);
});
router.get("/tempo-real", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;