var database = require("../database/config");

function cadastrarRespostas(passo1, passo2, passo3, passo4, passo5, passo6, 
    passo7, passo8, email) {

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO passos (passo1, passo2, passo3, passo4, passo5, passo6, 
            passo7, passo8, Usuario_fk) VALUES ('${passo1}', '${passo2}', '${passo3}', '${passo4}','${passo5}','${passo6}','${passo7}','${passo8}', (SELECT idUsuario from usuario WHERE email = '${email}'));
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    cadastrarRespostas
}