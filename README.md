# Portal de Notícias
Portal de Noticias desenvolvido com NodeJS, Express, Express Validator, Consign, EJS, MySQL, Body Parser e Nodemon.

## Instalando as depêndencias do projeto
```
npm install
```

## Executando o projeto
```
npm run dev
```

## Acessando a URL da aplicação
```
http://localhost:3000
```

## Implementando o Banco de Dados
Execute os comandos SQL a seguir, para poder cadastrar novas notícias utilizando a interface da aplicação.

Criando o BD:
```sql
CREATE DATABASE portal_noticias;
```

Selecionando o BD:
```sql
USE portal_noticias;
```

Criando a tabela que armazena todas as notícias:
```sql
CREATE TABLE `noticias` (
  `id_noticia` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) DEFAULT NULL,
  `noticia` text,
  `data_criacao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `resumo` varchar(100) DEFAULT NULL,
  `autor` varchar(30) DEFAULT NULL,
  `data_noticia` date DEFAULT NULL,
  PRIMARY KEY (`id_noticia`)
);
```
