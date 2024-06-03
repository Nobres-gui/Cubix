create database cubix;
use cubix;
create table usuario(
idUsuario int primary key auto_increment,
nome varchar(50),
idade char(3),
email varchar(400),
senha varchar(30));
create table passos(
	idPasso int primary key auto_increment,
	passo1 char(1),
	passo2 char(1),
	passo3 char(1),
	passo4 char(1),
	passo5 char(1),
	passo6 char(1),
	passo7 char(1),
	passo8 char(1),
	qtdVezesConcluido varchar(1000),
    PassosEmDuvida varchar(3),
    PassosSemDuvida varchar(3),
    MediadeDuvida varchar(3),
	Usuario_fk int,
    constraint usuario_fk foreign key (Usuario_fk) references usuario(idUsuario)  
);
select * from usuario;
select * from passos;

 SELECT 
	(CASE WHEN passo1 < 5 THEN 1 ELSE 0 END +
     CASE WHEN passo2 < 5 THEN 1 ELSE 0 END +
     CASE WHEN passo3 < 5 THEN 1 ELSE 0 END +
     CASE WHEN passo4 < 5 THEN 1 ELSE 0 END +
     CASE WHEN passo5 < 5 THEN 1 ELSE 0 END +
     CASE WHEN passo6 < 5 THEN 1 ELSE 0 END +
     CASE WHEN passo7 < 5 THEN 1 ELSE 0 END +
     CASE WHEN passo8 < 5 THEN 1 ELSE 0 END) AS passos_menores_que_5
FROM passos where Usuario_fk = 2
ORDER BY idPasso desc limit 1;