var database = require("../database/config");


function graficoBar() {

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `   SELECT 
    SUM(CASE WHEN passo1 < 5 THEN 1 ELSE 0 END) AS passo1, 
    SUM(CASE WHEN passo2 < 5 THEN 1 ELSE 0 END) AS passo2, 
    SUM(CASE WHEN passo3 < 5 THEN 1 ELSE 0 END) AS passo3, 
    SUM(CASE WHEN passo4 < 5 THEN 1 ELSE 0 END) AS passo4, 
    SUM(CASE WHEN passo5 < 5 THEN 1 ELSE 0 END) AS passo5, 
    SUM(CASE WHEN passo6 < 5 THEN 1 ELSE 0 END) AS passo6, 
    SUM(CASE WHEN passo7 < 5 THEN 1 ELSE 0 END) AS passo7, 
    SUM(CASE WHEN passo8 < 5 THEN 1 ELSE 0 END) AS passo8
    FROM 
    passos as passos
    `
    // WHERE Usuario_fk = (SELECT idUsuario from usuario WHERE email = '${email}') 
    
    
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function buscarMedidasEmTempoReal() {

    var instrucaoSql = `Select   passo1 as passo1, passo2 as passo2, passo3 as passo3, passo4 as passo4, 
    passo5 as passo5, passo6 as passo6, 
    passo7 as passo7, passo8 as passo8
                    FROM passos;`
  
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }



module.exports = {
    buscarMedidasEmTempoReal,
    graficoBar
}
