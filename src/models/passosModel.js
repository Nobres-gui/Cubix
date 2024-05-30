var database = require("../database/config");
function graficoBar() {
 
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `  select
    SUM(CASE WHEN passo1 < 3 THEN 1 ELSE 0 END) AS passo1, 
    SUM(CASE WHEN passo2 < 3 THEN 1 ELSE 0 END) AS passo2, 
    SUM(CASE WHEN passo3 < 3 THEN 1 ELSE 0 END) AS passo3, 
    SUM(CASE WHEN passo4 < 3 THEN 1 ELSE 0 END) AS passo4, 
    SUM(CASE WHEN passo5 < 3 THEN 1 ELSE 0 END) AS passo5, 
    SUM(CASE WHEN passo6 < 3 THEN 1 ELSE 0 END) AS passo6, 
    SUM(CASE WHEN passo7 < 3 THEN 1 ELSE 0 END) AS passo7, 
    SUM(CASE WHEN passo8 < 3 THEN 1 ELSE 0 END) AS passo8
    FROM 
    passos as passos ;
    `
    // WHERE Usuario_fk = (SELECT idUsuario from usuario WHERE email = '${email}') ;
    
    
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function graficoBar2() {
 
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
    FROM 
    passos as passos ;
    `
    // WHERE Usuario_fk = (SELECT idUsuario from usuario WHERE email = '${email}') ;
    
    
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function cadastrarRespostas(duvida1, duvida2, duvida3, duvida4, duvida5, duvida6, 
    duvida7, duvida8, email) {

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO passos (passo1, passo2, passo3, passo4, passo5, passo6, 
            passo7, passo8, Usuario_fk) VALUES ('${duvida1}', '${duvida2}', '${duvida3}',
             '${duvida4}','${duvida5}','${duvida6}','${duvida7}','${duvida8}', 
             (SELECT idUsuario from usuario WHERE email = '${email}'));
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    cadastrarRespostas,
    graficoBar,
    graficoBar2
}