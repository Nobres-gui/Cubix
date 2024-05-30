var database = require("../database/config");

function ranking() {

    var instrucaoSql = `SELECT u.nome AS usuario, count(pass.qtdVezesConcluido) AS pontuacao
    FROM passos pass
    JOIN (
      SELECT Usuario_fk
      FROM passos
      GROUP BY Usuario_fk
    ) ultima ON pass.Usuario_fk = ultima.Usuario_fk 
    JOIN usuario u ON pass.Usuario_fk = u.idUsuario group by nome;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
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
    ranking
}
