var database = require("../database/config");


function graficoBar() {

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `select
    passo1 as passo1, passo2 as passo2, passo3 as passo3, passo4 as passo4, passo5 as passo5, passo6 as passo6, 
    passo7 as passo7, passo8 as passo8
                    FROM passos
                    `;
                    // WHERE Usuario_fk = (SELECT idUsuario from usuario WHERE email = '${email}') 

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function buscarMedidasEmTempoReal() {

    var instrucaoSql = `Select
    passo1 as passo1, passo2 as passo2, passo3 as passo3, passo4 as passo4, passo5 as passo5, passo6 as passo6, 
    passo7 as passo7, passo8 as passo8
                    FROM passos`;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }



module.exports = {
    buscarMedidasEmTempoReal,
    graficoBar
}
