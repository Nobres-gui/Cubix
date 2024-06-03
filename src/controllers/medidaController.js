var medidaModel = require("../models/medidaModel");


function buscarKPIs(req, res) {

    console.log(`controller buscando os resultados do jogador`);

    medidaModel.buscarResultadoGraficoBar(idJogador).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado); /*resposta que o bd traz*/
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimos resultados.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}



function buscarResultadoGraficoBar(req, res) {

    var idJogador = req.params.idJogador;

    console.log(`controller buscando os resultados do jogador`);

    medidaModel.buscarResultadoGraficoBar(idJogador).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado); /*resposta que o bd traz*/
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimos resultados.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarResultadoGraficoLine(req, res) {

    var idJogador = req.params.idJogador;

    console.log(`controller buscando os resultados do jogador`);

    medidaModel.buscarResultadoGraficoLine(idJogador).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado); /*resposta que o bd traz*/
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimos resultados.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function ranking(req, res) {
    medidaModel.ranking()
        .then((resultado) => {
            console.log(`\nResultados encontrados: ${resultado.length}`);
            console.log(`Resultados: ${JSON.stringify(resultado)}`);
            res.status(200).json(resultado);
        })
        .catch((error) => {
            console.error("Erro ao obter dados de ranking:", error);
            res.status(500).json({ error: "Erro ao obter dados de ranking" });
        });
}


module.exports = {
    buscarResultadoGraficoLine,
    buscarResultadoGraficoBar,
    ranking,
    buscarKPIs

}