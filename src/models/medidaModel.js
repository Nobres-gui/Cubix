var database = require("../database/config");

function buscarResultadoGraficoBar(id) {
  var instrucaoSql = `select SUM(CASE WHEN passo1 < 3 THEN 1 ELSE 0 END) AS passo1, 
  SUM(CASE WHEN passo2 < 3 THEN 1 ELSE 0 END) AS passo2, 
  SUM(CASE WHEN passo3 < 3 THEN 1 ELSE 0 END) AS passo3, 
  SUM(CASE WHEN passo4 < 3 THEN 1 ELSE 0 END) AS passo4, 
  SUM(CASE WHEN passo5 < 3 THEN 1 ELSE 0 END) AS passo5, 
  SUM(CASE WHEN passo6 < 3 THEN 1 ELSE 0 END) AS passo6, 
  SUM(CASE WHEN passo7 < 3 THEN 1 ELSE 0 END) AS passo7, 
  SUM(CASE WHEN passo8 < 3 THEN 1 ELSE 0 END) AS passo8 
  from passos WHERE Usuario_fk = ${id};
                  `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}



function buscarResultadoGraficoLine(id){
  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.
  var instrucao = `  select
  SUM(CASE WHEN passo1 > 2 and passo1 < 5 THEN 1 ELSE 0 END) AS passo1, 
  SUM(CASE WHEN passo2 > 2 and passo2 < 5 THEN 1 ELSE 0 END) AS passo2, 
  SUM(CASE WHEN passo3 > 2 and passo3 < 5 THEN 1 ELSE 0 END) AS passo3, 
  SUM(CASE WHEN passo4 > 2 and passo4 < 5 THEN 1 ELSE 0 END) AS passo4, 
  SUM(CASE WHEN passo5 > 2 and passo5 < 5 THEN 1 ELSE 0 END) AS passo5, 
  SUM(CASE WHEN passo6 > 2 and passo6 < 5 THEN 1 ELSE 0 END) AS passo6, 
  SUM(CASE WHEN passo7 > 2 and passo7 < 5 THEN 1 ELSE 0 END) AS passo7, 
  SUM(CASE WHEN passo8 > 2 and passo8 < 5 THEN 1 ELSE 0 END) AS passo8
  from passos WHERE Usuario_fk = ${id};
  `
  // WHERE Usuario_fk = (SELECT idUsuario from usuario WHERE email = '${email}') ;
  
  
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}


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
function buscarKPIs() {

  var instrucaoSql = `
  SELECT 
	(CASE WHEN passo1 < 5 THEN 1 ELSE 0 END +
     CASE WHEN passo2 < 5 THEN 1 ELSE 0 END +
     CASE WHEN passo3 < 5 THEN 1 ELSE 0 END +
     CASE WHEN passo4 < 5 THEN 1 ELSE 0 END +
     CASE WHEN passo5 < 5 THEN 1 ELSE 0 END +
     CASE WHEN passo6 < 5 THEN 1 ELSE 0 END +
     CASE WHEN passo7 < 5 THEN 1 ELSE 0 END +
     CASE WHEN passo8 < 5 THEN 1 ELSE 0 END) AS passos_menores_que_5
FROM passos 
ORDER BY idPasso desc limit 1;';`

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarResultadoGraficoLine,
  buscarResultadoGraficoBar,
  ranking,
  buscarKPIs
}
