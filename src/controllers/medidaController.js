var medidaModel = require("../models/medidaModel");


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


function buscarUltimasMedidas(req, res) {


   
    // console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(email, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function buscarMedidasEmTempoReal(req, res) {

   

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarResultadoGraficoLine,
    buscarResultadoGraficoBar,
    buscarMedidasEmTempoReal,
    buscarUltimasMedidas,
    ranking

}