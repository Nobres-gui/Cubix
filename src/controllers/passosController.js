var passosModel = require("../models/passosModel")

function graficoBar(req, res) {

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    passosModel.graficoBar()
    .then((resultado) => {
        res.json({
            passo1: resultado[0].passo1,
            passo2: resultado[0].passo2,
            passo3: resultado[0].passo3,
            passo4: resultado[0].passo4,
            passo5: resultado[0].passo5,
            passo6: resultado[0].passo6,
            passo7: resultado[0].passo7,
            passo8: resultado[0].passo8,
          
        });
    })
    .catch((error) => {
        console.error("Erro ao obter dados de ranking:", error);
        res.status(500).json({ error: "Erro ao obter dados de ranking" });
    });
// }
}  
function graficoBar2(req, res) {

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    passosModel.graficoBar2()
    .then((resultado) => {
        res.json({
            passo1: resultado[0].passo1,
            passo2: resultado[0].passo2,
            passo3: resultado[0].passo3,
            passo4: resultado[0].passo4,
            passo5: resultado[0].passo5,
            passo6: resultado[0].passo6,
            passo7: resultado[0].passo7,
            passo8: resultado[0].passo8,
          
        });
    })
    .catch((error) => {
        console.error("Erro ao obter dados de ranking:", error);
        res.status(500).json({ error: "Erro ao obter dados de ranking" });
    });
// }
}  

function cadastrarRespostas(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var usuario = req.body.usuarioServer;
    var passo1 = req.body.duvida1Server;
    var passo2 = req.body.duvida2Server;
    var passo3 = req.body.duvida3Server;
    var passo4 = req.body.duvida4Server;
    var passo5 = req.body.duvida5Server;
    var passo6 = req.body.duvida6Server;
    var passo7 = req.body.duvida7Server;
    var passo8 = req.body.duvida8Server;
    
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        passosModel.cadastrarRespostas(passo1, passo2, passo3, passo4, passo5, passo6, passo7, passo8, usuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
    
    module.exports = {
        cadastrarRespostas,
        graficoBar,
        graficoBar2
    
    }