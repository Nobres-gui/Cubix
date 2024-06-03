var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");


router.get("/buscarResultadoGraficoBar/:idUsuario", function (req, res) {
    medidaController.buscarResultadoGraficoBar(req, res);
});
router.get("/buscarResultadoGraficoLine/:idUsuario", function (req, res) {
    medidaController.buscarResultadoGraficoLine(req, res);
});
router.get("/buscarKPIs/:idUsuario", function (req, res) {
    medidaController.buscarKPIs(req, res);
})
router.get("/ranking", function (req, res) {
    medidaController.ranking(req, res);
});
module.exports = router;