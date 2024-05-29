var medidaModel = require("../models/medidaModel");

function graficoBar(req, res) {
    
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    medidaModel.graficoBar()
    .then((resultado) => {
        res.json({
            passo1: resultado[0].passo1,
            passo2: resultado[0].passo2,
            passo3: resultado[0].passo3,
            passo4: resultado[0].passo4,
            passo5: resultado[0].passo5,
            passo6: resultado[0].passo6,
            passo7: resultado[0].passo7,
            passo8: resultado[0].passo8

        });
    })
    .catch((error) => {
        console.error("Erro ao obter dados de ranking:", error);
        res.status(500).json({ error: "Erro ao obter dados de ranking" });
    });
// }
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
    buscarMedidasEmTempoReal,
    buscarUltimasMedidas,
    graficoBar

}