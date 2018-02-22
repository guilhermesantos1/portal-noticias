# Portal de Notícias
Portal de Noticias desenvolvido com NodeJS, Express, Express Validator, 
Consign, EJS, MySQL, Body Parser e Nodemon.

## SQL para implementar o BD
```sql
CREATE DATABASE portal_noticias;

USE portal_noticias;

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
