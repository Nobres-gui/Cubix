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
SELECT * FROM passos WHERE Usuario_fk = 1 ORDER BY idPasso DESC LIMIT 8;
SELECT 
    passo1, passo2, passo3, passo4, passo5, passo6, 
    passo7, passo8, qtdVezesConcluido, PassosEmDuvida, PassosSemDuvida
                    FROM passos
                    WHERE Usuario_fk = 1
                    ORDER BY idPasso DESC LIMIT 10;
SELECT  passo1, passo2, passo3, passo4, passo5, passo6, 
                    passo7, passo8, qtdVezesConcluido, PassosEmDuvida, PassosSemDuvida, MediadeDuvida
                        FROM passos WHERE Usuario_fk = 1
                    ORDER BY idPasso DESC LIMIT 10;