/*
*   Para conectar no banco de dados através do PowerShell do windows ou cmd
*   startar o serviço, depois procurar o arquivo .exe do mysql
*   ir no cmd ou PowerShell e depois que estiver no diretório bin/
*   digitar mysql -u root -p
*   colocar a senha e então conectar ao mysql server
*/

var mysql = require('mysql');
var connMySQL = function() {
    console.log("estabeleci uma conexao com o bd");
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'portal_noticias'
    });
}

module.exports = function() {
    console.log("autoload carregou o modulo de conn com o bd");
    return connMySQL;
};
